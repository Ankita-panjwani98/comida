const {
  request,
  response
} = require("express");
const mongoose = require("mongoose");
const orderSchema = require("../Models/orderModel");
const userSchema = require("../Models/userModel");
const restaurantSchema = require("../Models/restaurantModel");
const foodSchema = require("../Models/foodModel");
const auth = require("../Helpers/authApi");
const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const sendEmail = require("../Helpers/emailSend");

exports.addDeliveryExecutive = async (request, response, next) => {

  const deliverExecutiveUserId = request.body.userId;
  const orderId = request.body.orderId;

  const userDataCollection = mongoose.model("user", userSchema, "users");
  const orderDataCollection = mongoose.model("order", orderSchema, "orders");

  var orderData = await orderDataCollection.findById({
    _id: orderId
  });
  const deliveryExecutiveData = await userDataCollection.findById({
    _id: deliverExecutiveUserId,
  });

  if (orderData.orderStatus != "Cancelled") {
    if (deliveryExecutiveData.deliveryExecutive.deliveryExecutiveStatus) {
      if (orderData.orderStatus == "Placed") {
        orderData.addDeliveryExecutive(deliverExecutiveUserId);
        deliveryExecutiveData.changeDeliveryExecutiveStatus();
        const userData = await userDataCollection.findById({ _id: orderData.userId }, 'email');
        console.log("userData for email", userData);
        // const html = orderData.orderOtp.toString();
        const html=`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body style="background-color:#faf8f4; text-align: center;">
            <div >
                <img src = "https://files.slack.com/files-pri/T01KZ8MM4BY-F01PCQ4D5MK/chef.png" alt="" style="height:400px"></img> 
             </div>
             <div style= "font-size: 20px;">
             Dear Customer,<br><br>
             Thank you for being our valued customer. We are grateful for the pleasure of serving you and hope we met your expectations.<br><br>
             You have made an order for which One Time Passsword (OTP) is:<br><br>
             <div style="color:red ; font-size: 100px; font-weight: bold; ">
                ${orderData.orderOtp.toString()}
             </div>
             <br>
             In case you have any query, please call our Customer Care. You can also write an email at @foodPlaza.com.<br><br>
             </div>
        </body>
        </html>`
        console.log("html ", html)
        sendEmail.sendMails([userData.email], "Foodizz Order otp", html);
        response.status(200).json({
          message: "you have accepted the order"
        })
      } else {
        response.status(200).json({
          message: "someone already accepted the order"
        });
        // Show message to delivery Executive that someone already accepted the order
      }
    } else {
      response.status(200).json({
        message: "you have already accepted one order"
      })
      // Show message to delivery Executive that you have already accepted one order
    }
  } else {
    response.status(200).json({
      message: "order is cancelled you can't accept it"
    })
    // show message to delivery Executive that order is cancelled you can't accept it
  }


};

exports.changeOrderStatus = async (request, response, next) => {

  const deliverExecutiveUserId = request.body.userId;
  const orderId = request.body.orderId;
  const orderStatus = request.body.orderStatus;

  const userDataCollection = mongoose.model("user", userSchema, "users");
  const orderDataCollection = mongoose.model("order", orderSchema, "orders");

  var orderData = await orderDataCollection.findById({
    _id: orderId
  });
  const deliveryExecutiveData = await userDataCollection.findById({
    _id: deliverExecutiveUserId,
  });
  //   console.log("orderData",orderData);
  if (orderStatus == "Out For Delivery") {
    if (orderData.orderStatus == "Accepted") {
      orderData.changeOrderStatus(orderStatus);
      response.status(200).json({
        message: "Order status is changed to out for delivery"
      })
    } else if (orderData.orderStatus == "Out For Delivery") {
      // Order status is already in out for delivery
      response.status(400).json({
        message: "Order status is already in out for delivery"
      })
    } else {
      // Order is not Accepted by you
      response.status(400).json({
        message: "Order is not Accepted by you"
      })
    }
  } else if (orderStatus == "Completed") {
    const orderOtp = request.body.orderOtp;
    if (orderData.orderStatus == "Out For Delivery") {
      if (orderData.orderOtp == orderOtp) {
        orderData.changeOrderStatus(orderStatus);
        deliveryExecutiveData.changeDeliveryExecutiveStatus();
        response.status(200).json({
          message: "Order Status Change completed"
        })
      } else {
        // Otp is not valid
        response.status(400).json({
          message: "Otp is not valid"
        })
      }
    } else if (orderData.orderStatus == "Completed") {
      // order is already completed
      response.status(400).json({
        message: "Order is already completed"
      })
    } else {
      // Order is not for out for delivery
      response.status(400).json({
        message: "Order is not for out for delivery"
      })
    }
  }
  // response.json(orderData);
};
// get order which is accepted by delivery executive
exports.getOrderDetailAcceptedByDeliveryExecutive = async (request, response, next) => {
  const deliverExecutiveId = request.body.userId;
  const orderDataCollection = mongoose.model("order", orderSchema, "orders");
  try {
    const orderData = await orderDataCollection.findOne({
      $and: [{
        deliveryExecutive: mongoose.Types.ObjectId(deliverExecutiveId)
      },
      {
        $or: [{
          orderStatus: "Accepted"
        },
        {
          orderStatus: "Out For Delivery"
        },
        ],
      },
      ],
    });
    if (orderData == null || orderData == undefined) {
      response
        .status(200)
        .json({
          message: "Order not found!!!"
        });
    } else {
      response.status(200).json(orderData);
    }
  } catch (err) {
    console.log(err);
    response.status(400).json({
      message: "Order not found!!!"
    });
  }
};

exports.getDeliveryExecutivePastOrders = async (request, response, next) => {
  const deliverExecutiveId = request.body.userId;
  const orderDataCollection = mongoose.model("order", orderSchema, "orders");
  try {
    const orderData = await orderDataCollection.find({
      $and: [{
        deliveryExecutive: mongoose.Types.ObjectId(deliverExecutiveId)
      },
      {
        orderStatus: "Completed"
      }
      ],
    });
    if (orderData.length == 0) {
      response
        .status(400)
        .json({
          message: "Order not found!!!"
        });
    } else {
      response.status(200).json(orderData);
    }
  } catch (err) {
    console.log(err);
    response.status(400).json({
      message: "Order not found!!!"
    });
  }
}


exports.countNumberOfRestaurantOrderByDeliverExecutive = async (request, response, next) => {
  // const deliverExecutiveId = "603b28a045301657d08a7f47";
  const deliverExecutiveId = request.body.userId;
  const orderDataCollection = mongoose.model("order", orderSchema, "orders");

  const deliveryExecutiveChartData = await orderDataCollection.aggregate([
    {
      "$match":
      {
        "deliveryExecutive": mongoose.Types.ObjectId(deliverExecutiveId),
        "orderStatus": "Completed"
      }
    },
    {
      $group:
      {
        _id: "$restaurantDetails.restaurantName",
        count: { $sum: 1 }
      }
    }
  ])
  let chartData=[];
  deliveryExecutiveChartData.forEach((data,index)=>{
    chartData.push([data._id,data.count]);
  })
  console.log(chartData);
  response.json(chartData);
  // const deliverExecutiveId = request.body.userId;
}

exports.monthlyBasedRatingForDeliveryExecutive = async (request, response, next) => {
  // const deliverExecutiveId = "603b28a045301657d08a7f47";
   const deliverExecutiveId = request.body.userId;
   const color1="#2466d1";
   const color2="#e05910";
   var monthsArray = [
    ['January', 0,color1],
    ['February', 0,color2],
    ['March', 0, color1],
    ['April', 0,color2],
    ['May', 0, color1],
    ['June', 0, color2],
    ['July', 0, color1], 
    ['August', 0,color2],
    ['September', 0, color1],
    ['October', 0, color2], 
    ['November', 0, color1], 
    ['December', 0, color2]
  ]

  const userDataCollection = mongoose.model("user", userSchema, "users");
  const deliveryExecutiveChartData = await userDataCollection.findById(
    {
      _id: mongoose.Types.ObjectId(deliverExecutiveId),
    }, 'deliveryExecutive.deliveryExecutiveRatings'
  )
  // console.log(deliveryExecutiveChartData.deliveryExecutive.deliveryExecutiveRatings)
  console.log(new Date().getYear());
  deliveryExecutiveChartData.deliveryExecutive.deliveryExecutiveRatings.forEach((rate) => {
    if (new Date(rate.ratingDateTime).getYear() >= new Date().getYear()) {
      monthsArray[new Date(rate.ratingDateTime).getMonth()][1] += rate.rating;
    }
  })
  console.log(monthsArray);
  //   deliveryExecutiveChartData.deliveryExecutive.deliveryExecutiveRating.forEach((rate)=>{
  //     console.log(rate)
  //   })
  response.json(monthsArray);
}

