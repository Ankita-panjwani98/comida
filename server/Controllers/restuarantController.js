const {
  request,
  response
} = require("express");
const mongoose = require("mongoose");
const restaurantSchema = require("../Models/restaurantModel");
const userSchema = require("../Models/restaurantModel");

exports.postRestuarant = async (request, response, next) => {
  console.log("In post Restaurant!");

  // to add restuarant
  const restaurantDataCollection = mongoose.model(
    "restaurant",
    restaurantSchema,
    "restaurants"
  );
  const restuarantObj = new restaurantDataCollection({
    restaurantName: request.body.restaurantName,
    restaurantLocation: request.body.restaurantLocation,
    workingHours: request.body.workingHours,
    activityStatus: request.body.activityStatus,
    restaurantImages: request.body.restaurantImages,
    restaurantCategory: request.body.restaurantCategory,
    restaurantRatings: request.body.restaurantRatings,
    userId: request.body.userId,
    menuDetails: request.body.menuDetails,
  });

  restuarantObj
    .save()
    .then((restaurant) => {
      response.send(restaurant).status(200);
    })
    .catch((error) => {
      console.log("Error:", error);
      next(error);
    });
};

exports.getRestaurants = async (request, response, next) => {
  const restaurantDataCollection = mongoose.model(
    "restaurant",
    restaurantSchema,
    "restaurants"
  );
  const allRestaurantData = await restaurantDataCollection.aggregate([{
    $addFields: {
      rating_avg: {
        $avg: {
          $map: {
            input: "$restaurantRatings",
            as: "restRating",
            in: "$$restRating.rating",
          },
        },
      },
    },
  }, ]);
  response.status(200).json(allRestaurantData);
};

exports.getRestaurantsById = async (request, response, next) => {
  const restaurantId = mongoose.Types.ObjectId(request.params.restaurantId);
  const restaurantDataCollection = mongoose.model(
    "restaurant",
    restaurantSchema,
    "restaurants"
  );
  const restaurantData = await restaurantDataCollection.aggregate([{
      "$match": {
        "_id": restaurantId
      }
    },
    {
      "$addFields": {
        "rating_avg": {
          "$avg": {
            "$map": {
              "input": "$restaurantRatings",
              "as": "restRating",
              "in": "$$restRating.rating"
            }
          }
        }
      }
    }
  ])
  let foodList=[];
  let avgRating = 0;
  restaurantData[0].menuDetails.forEach((food)=>{
      avgRating=food.foodRating.reduce((total,current)=>total+current.rating,0)/food.foodRating.length;
    food.avgRating = avgRating;  
    foodList.push(food);
  })
  restaurantData[0].menuDetails = foodList;
  if (restaurantData != null) {
    response.status(200).json(restaurantData[0]);
  } else {
    response.status(400).json({
      message: "Restaurant is not available"
    });
  }
};

exports.getTopRestaurants = (req, res, next) => {
  const restaurantDataCollection = mongoose.model(
    "restaurant",
    restaurantSchema,
    "restaurants"
  );
  restaurantDataCollection.aggregate([
      {
          "$addFields": {
              "rating_avg": {
                  "$avg": {
                      "$map": {
                          "input": "$restaurantRatings",
                          "as": "restRating",
                          "in": "$$restRating.rating"
                      }
                  }
              }
          }
      },
      { "$sort": { "rating_avg": -1 } }
  ])
      .limit(6)
      .exec(function (err, result) {
          if (err) throw err;
          res.send(result);
      });
}

exports.searchRestaurants = async (req, res, next) => {
  let search = req.query.search;
    let city = req.query.city;
    let searchRestaurants
    let searchRegex, cityregex;
    const restaurantDataCollection = mongoose.model(
      "restaurant",
      restaurantSchema,
      "restaurants"
    );
    if (search == '') {
        // searchRestaurants = await restaurantDataCollection.find({ 'restaurantLocation.city': city });
        searchRegex = new RegExp('^');
    }
    else {
        searchRegex = new RegExp(search);
    }
    if (city == '') {
        cityregex = new RegExp('^');
    }
    else {
        cityregex = new RegExp(city);
    }
    try {
        searchRestaurants = await restaurantDataCollection.aggregate([
            {
                '$addFields': {
                    "rating_avg": {
                        "$avg": {
                            "$map": {
                                "input": "$restaurantRatings",
                                "as": "restRating",
                                "in": "$$restRating.rating"
                            }
                        }
                    }
                }
            },
            {
                $match: {
                    $and: [
                        {
                            'restaurantLocation.city': { $regex: cityregex, $options: 'i' }
                        },
                        {
                            $or: [
                                {
                                    'restaurantName': {
                                        $regex: searchRegex,
                                        $options: 'i'
                                    }
                                }
                                ,
                                {
                                    'restaurantCategory': {
                                        $regex: searchRegex,
                                        $options: 'i'
                                    }
                                },
                                {
                                    'menuDetails.foodName': {
                                        $regex: searchRegex,
                                        $options: 'i'
                                    }
                                },
                                {
                                    'menuDetails.foodCategory': {
                                        $regex: searchRegex,
                                        $options: 'i'
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
        ]);
        res.send(searchRestaurants);
    }
    catch (err) {
        res.send(err)
    }
    // .catch((err) => {
    //     res.send(err)
    // });
    // let searchRestaurants= await restaurantDataCollection.aggregate([{"search city":{$in:[city,'$restaurantLocation.city']}}]).exec(function(err,data){
    // console.log(searchRestaurants);
}