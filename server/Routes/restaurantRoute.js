const express = require("express");
const { mongoose } = require("mongoose");

const restaurantController = require("../Controllers/restuarantController");

const router = express.Router(); 


router.post("/registerrestaurant",restaurantController.postRestuarant);
router.get("/getrestaurants",restaurantController.getRestaurants);
router.get("/getrestaurantbyid/:restaurantId",restaurantController.getRestaurantsById);
router.get("/gettoprestaurants",restaurantController.getTopRestaurants);
router.get('/searchrestaurants',restaurantController.searchRestaurants);

module.exports = router;
