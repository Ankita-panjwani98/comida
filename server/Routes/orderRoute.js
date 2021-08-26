const express = require("express");
const { mongoose } = require("mongoose");

const auth = require("../Helpers/authApi");
const orderController = require("../Controllers/orderController");

const router = express.Router(); 

// order route for user
router.post("/postorder",auth.authAPI,orderController.postOrder);
router.get("/getuserorder",auth.authAPI,orderController.getUserOrder);
router.get("/getusertrackorder",auth.authAPI,orderController.getUserTrackOrder);
router.get("/getorderdetailbyorderid/:orderId",auth.authAPI,orderController.getOrderDetailByOrderId);
// router.get("/getorderdetailbyorderid",orderController.getOrderDetailByOrderId);

// order route for delivery executive
router.get("/getplacedorderfordeliveryexecutive",auth.authAPI,orderController.getPlacedOrderForDeliveryExecutive);



module.exports = router;                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
