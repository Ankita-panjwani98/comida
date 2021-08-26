const mongoose = require("mongoose");
const deliveryExecutiveSchema = require("./deliveryExecutiveModel");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  mobileNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  deliveryExecutive: {
    type: deliveryExecutiveSchema, // child field
  },
  cart: {
    _id: false,
    restaurantId: {
      type: String,
      // required: true
     default: undefined
    },
    foodList: {
      type: [
        {
          _id: false,
          foodId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "restaurant.menuDetails",
            // required: true   //
          }, //Ref of User ID
          quantity: {
            type: Number,
            // required: true  //
          },
        },
      ],
      default: undefined,
    },
    //  [
    //   {
    //     _id: false,
    //     foodId: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "restaurant.menuDetails",
    //       // required: true   //
    //     }, //Ref of User ID
    //     quantity: {
    //       type: Number,
    //       // required: true  //
    //     },
    //     // required: true
    //   },
    // ],
  },
});

userSchema.methods.addToCart = function (foodId, restaurantId) {
  if (restaurantId == this.cart.restaurantId) {
    const cartItemIndex = this.cart.foodList.findIndex((foodItem) => {
      return foodItem.foodId.toString() === foodId.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.foodList];

    if (cartItemIndex >= 0) {
      newQuantity = this.cart.foodList[cartItemIndex].quantity + 1;
      updatedCartItems[cartItemIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        foodId: foodId,
        quantity: newQuantity,
      });
    }
    const updatedCart = {
      restaurantId: this.cart.restaurantId,
      foodList: updatedCartItems,
    };
    this.cart = updatedCart;
  } else {
    this.cart.restaurantId = restaurantId;
    const foodListDoc = { foodId: foodId, quantity: 1 };
    this.cart.foodList = foodListDoc;
  }
  return this.save();
};

userSchema.methods.reduceQuantity = function (foodId) {
  const newCart = this.cart.foodList.map((food) => {
    if (food.foodId.toString() === foodId.toString())
      return {
        ...food.toObject(),
        quantity: food.quantity - 1,
      };
    return food.toObject();
  });
  const finalNewCart = newCart.filter((food) => {
    return food.quantity > 0;
  });
  this.cart.foodList = finalNewCart;
  return this.save();
};

userSchema.methods.removeFromCart = function (foodId) {
  const updatedCartItems = this.cart.foodList.filter((food) => {
    return food.foodId.toString() !== foodId.toString();
  });
  if (updatedCartItems.length == 0) {
    this.cart.restaurantId = "";
  }
  this.cart.foodList = updatedCartItems;
  return this.save();
};

userSchema.methods.clearCart = function () {
  this.cart = { foodList: [] };
  this.cart.restaurantId = "";
  return this.save();
};

userSchema.methods.changeDeliveryExecutiveStatus = function(){
  this.deliveryExecutive.deliveryExecutiveStatus=!this.deliveryExecutive.deliveryExecutiveStatus;
  return this.save();
}

userSchema.methods.resetPassword =function(newPassword){
  this.password=newPassword;
  return this.save();
}

userSchema.methods.updateUserProfile=function(updatedata){
  console.log("In module updateprofile",updatedata)
  if(this.role=="DE"){
    this.deliveryExecutive.deliveryExecutiveLocation=updatedata.deliveryExecutive.deliveryExecutiveLocation;
    this.deliveryExecutive.vehicleNumber=updatedata.deliveryExecutive.vehicleNumber;
  }
  this.firstName=updatedata.firstName;
  this.lastName=updatedata.lastName;
  this.mobileNumber=parseInt(updatedata.mobileNumber);
  return this.save();
}
module.exports = userSchema;
