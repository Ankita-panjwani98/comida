const express = require("express");
const { mongoose } = require("mongoose");

const auth = require("../Helpers/authApi");
const rateController = require("../Controllers/rateController");

const router = express.Router(); 

// order route for user
router.post("/addratingtofood",auth.authAPI,rateController.addRatingToFood);
router.post("/addratingtorestaurant",auth.authAPI,rateController.addRatingToRestaurant);
router.post("/addratingtodeliveryexecutive",auth.authAPI,rateController.addRatingToDeliveryExecutive);

module.exports = router;                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
