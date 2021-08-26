const mongoose = require("mongoose");
const addressSchema = require("./addressModel");
const ratingSchema = require("./ratingSchema");

const deliveryExecutiveSchema = new mongoose.Schema({
  _id: false,
  vehicleNumber: {
    type: String, // think for data type
    required: true,
  },
  deliveryExecutiveLocation: {
    type: addressSchema,
    required: true,
  },
  activityStatus: {
    //extended :
    type: Boolean,
    default: false,
  },
  deliveryExecutiveRatings: [ratingSchema],
  deliveryExecutiveStatus:{
    type:Boolean,
    default:true,
    required:true
  }
});

module.exports = deliveryExecutiveSchema;
