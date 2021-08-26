const express = require("express");
const {
    mongoose
} = require("mongoose");

const auth = require("../Helpers/authApi");
const cartController = require("../Controllers/cartController");

const router = express.Router();

// router.post("/register-restuarant",restuarantController.postRestuarant);

// router.get('/user',userController.getUser);
router.post("/addtocart", auth.authAPI, cartController.addToCart);
router.post("/reducequantitytocart", auth.authAPI, cartController.reduceQuantity);
router.post("/removefromcart", auth.authAPI, cartController.removeFromCart);
router.post("/clearcart", auth.authAPI, cartController.clearCart);
router.get("/getcart", auth.authAPI, cartController.getCart);

module.exports = router;