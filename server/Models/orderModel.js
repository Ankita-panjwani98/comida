const mongoose = require("mongoose");
const addressSchema = require("./addressModel");
const foodSchema = require("./foodModel");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  orderLocation: {
    type: addressSchema,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  orderOtp: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    enum: ["Placed", "Accepted", "Out For Delivery", "Completed", "Cancelled"],
  },
  orderDateAndTime: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  foodList: [
    {
      _id: false,
      foodItem: { type: foodSchema, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  restaurantDetails: {
    restaurantId: {
      type: String,
      required: true,
    },
    restaurantName: {
      type: String,
      required: true,
    },
    restaurantLocation:{
      type: addressSchema,
      required: true,
    },
    restaurantImages: [
      {
        type: String,
        required: true,
      },
    ],
  },
  deliveryExecutive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
});

orderSchema.methods.addDeliveryExecutive = function (deliveryExecutiveId) {
  this.deliveryExecutive = mongoose.Types.ObjectId(deliveryExecutiveId);
  this.orderStatus="Accepted";
  return this.save();
};

orderSchema.methods.changeOrderStatus = function(orderStatus){
    this.orderStatus=orderStatus;
    return this.save();
}
module.exports = orderSchema;
