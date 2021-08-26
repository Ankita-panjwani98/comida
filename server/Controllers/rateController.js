const { request, response } = require("express");
const mongoose = require("mongoose");
const restaurantSchema = require("../Models/restaurantModel");
const userSchema = require("../Models/userModel");
const auth = require("../Helpers/authApi");

const userDataCollection = mongoose.model("user", userSchema, "users");
const restaurantDataCollection = mongoose.model("restaurant", restaurantSchema, "restaurants");

exports.addRatingToDeliveryExecutive = async (request, response, next) => {
    const userId = request.body.userId;
    const deliveryExecutiveId = request.body.deliveryExecutiveId;
    const rating = request.body.rating;
    const ratingReview = request.body.ratingReview;
    const ratingObj = {
        userId: userId,
        rating: rating,
        ratingReview: ratingReview,
    }
    const ratingData = await userDataCollection.findByIdAndUpdate({ _id: deliveryExecutiveId },
        { $push: { "deliveryExecutive.deliveryExecutiveRatings": ratingObj } })
    response.json(ratingData);
}


exports.addRatingToFood = async (request, response, next) => {
    const userId = request.body.userId;
    const restaurantId = request.body.restaurantId;
    const rating = request.body.rating;
    const ratingReview = request.body.ratingReview;
    console.log("restaurrantId",restaurantId);
    const foodId = request.body.foodList.map((item) => {
        return item.foodItem._id;
    });
    const foodRating = {
        userId: userId,
        rating: rating,
        ratingReview: ratingReview,
    }
    // console.log(foodRating);
    // console.log(request.body.foodList);
    console.log("foodId",foodId)
    let result;
    await foodId.forEach(async (value) => {
        result = await restaurantDataCollection.findOneAndUpdate(
            {
                $and: [{
                    _id: mongoose.Types.ObjectId(restaurantId)
                }, {
                    "menuDetails._id": mongoose.Types.ObjectId(value)
                }]
            },
            { $push: { "menuDetails.$.foodRating": foodRating } }
        );
        // console.log("Result",result);
    })

}

exports.addRatingToRestaurant = async (request, response, next) => {
    console.log("ratingRating")
    const userId = request.body.userId;
    const restaurantId = mongoose.Types.ObjectId(request.body.restaurantId);
    const rating = request.body.rating;
    const ratingReview = request.body.ratingReview;
    const ratingObj = {
        userId: userId,
        rating: rating,
        ratingReview: ratingReview,
    }
    console.log("ratingRating", ratingObj)
    const ratingData = await restaurantDataCollection.findByIdAndUpdate({ _id: restaurantId }, { $push: { restaurantRatings: ratingObj } })
    response.json(ratingData);
}