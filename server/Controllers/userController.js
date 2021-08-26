
const { request, response } = require("express");
const mongoose = require("mongoose");
const userSchema = require("../Models/userModel");
const orderSchema =require("../Models/orderModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const otpGenerator = require("otp-generator");
const sendEmail = require("../Helpers/emailSend");
const auth = require("../Helpers/authApi");

const userDataCollection = mongoose.model("user", userSchema, "users");

// authentication of the user
exports.authenticate = async (request, response, next) => {
  const email = request.body.email;
  const password = request.body.password;
  const userDataCollection = mongoose.model("user", userSchema, "users");
  const user = await userDataCollection.findOne({ email });
 console.log(user);
  // generates the jwt token
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ userId: user._id, email: user.email, password: user.password, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return response.status(200).json({ token: token, firstName: user.firstName })

  } else if (!user) {
    response.status(404).json({ message: "User not found" });
  } else {
    response.status(400).json({ message: "User & Password is not match" });
  }
};

exports.postUser = async (request, response, next) => {
  console.log("In Post User Controller");
  const normalUser = new userDataCollection({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: bcrypt.hashSync(request.body.password, 10),
    birthDate: request.body.birthDate,
    gender: request.body.gender,
    mobileNumber: request.body.mobileNumber,
    role: request.body.role,
  });
  if (request.body.role == "DE") {
    normalUser.deliveryExecutive = request.body.deliveryExecutive;
  }
  normalUser
    .save((err, res) => {
      if (err) {
        console.log("erreowqkpeowoek",err);
        response.status(400).json({ message: "User is already exists with this email!!" });
      }
      console.log(res);
      response.status(201).json({ message: "User Created Successfully" });
    })
};

//get user data for profile 
exports.getUser = async(request,response,next)=>{
  const userId = request.body.userId;
  try{
    var userData = await userDataCollection.findById(userId);
    if(userData){
      response.status(200).json(userData);
    }else{
      response.status(400).json({message:"User is not found with provided data"});
    }
  }catch(err){
    response.status(400).json({message:"User is not found with provided data"});
  }
}

//update both use profile
exports.updateProfile = async (request, response, next) => {
  const userId = request.body.userId;
  var userData = await userDataCollection.findById(userId);
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const mobileNumber = request.body.mobileNumber;
  const updatedata = {
    firstName: firstName,
    lastName: lastName,
    mobileNumber: mobileNumber,
  }
  if (userData.role == "DE") {
    const deliveryExecutiveLocation = request.body.deliveryExecutiveLocation;
    const vehicleNumber = request.body.vehicleNumber;
    const deliveryExecutive = {
      deliveryExecutiveLocation: deliveryExecutiveLocation,
      vehicleNumber: vehicleNumber
    }
    updatedata.deliveryExecutive = deliveryExecutive;
  }
  try{
    useData=await userData.updateUserProfile(updatedata);
    if(userData){
      response.status(200).json({message:"Profile is update succefully"});
    }else{
      response.status(200).json({message:"Profile is'n updated Succefully"});
    }
  }catch(err){
    if(err){
      response.status(200).json({message:"Profile is'n updated Succefully"});
    }
  }
  
}

//send otp to user module for reset password and also send the otp in response 
exports.sendOtpForForgotPassword = async (request, response, next) => {

  const email = request.body.email;
  var userData = await userDataCollection.findOne({ email: email });
  if (userData) {
    const generatedForgotPasswordOtp = otpGenerator.generate(6, {
      upperCase: false,
      specialChars: false,
      alphabets: false,
    });
    const html = `<!DOCTYPE html>
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
         
         One Time Passsword (OTP) for Forgot Password request is as below:<br><br>
         <div style="color:red ; font-size: 100px; font-weight: bold; ">
            ${generatedForgotPasswordOtp}
         </div>
         <br>
         In case you have any query, please call our Customer Care. You can also write an email at @foodPlaza.com.<br><br>
         </div>
    </body>
    </html>`;
    sendEmail.sendMails([email], "Foodizz Reset Password OTp", html);
    response.status(200).json({ forgotPasswordOtp: generatedForgotPasswordOtp, message: "Check you email inbox. OTP Send Succeccfully!!!" });
  } else {
    response.status(200).json({ message: "User is not exist with this email" });
  }
}

// reset password in database
exports.resetPassword = async (request, response, next) => {
  const email = request.body.email;
  const newPassword = request.body.newPassword;
  var userData = await userDataCollection.findOne({ email: email });
  if (userData) {
    userData = await userData.resetPassword(bcrypt.hashSync(newPassword, 10));
    // console.log("bcrypt : ",bcrypt.compareSync(newPassword, userData.password))
    // console.log("useData :",userData);

    if (userData) {
      response.status(200).json({ message: "Your Password is reset successfully" });
    } else {
      response.status(200).json({ message: "Your Password is not reset successfully" });
    }
  } else {
    response.status(200).json({ message: "Your Password is not reset successfully" });
  }
}

exports.countNumberOfRestaurantOrderByUser = async(request,response,next)=>{
  const userId = request.body.userId;
  const orderDataCollection = mongoose.model("order", orderSchema, "orders");

  const deliveryExecutiveChartData = await orderDataCollection.aggregate([
    {
      "$match":
      {
        "userId": mongoose.Types.ObjectId(userId),
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
}