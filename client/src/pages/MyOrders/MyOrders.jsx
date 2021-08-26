import React, { useState, useEffect, useCallback } from "react";
import NavAppBar from "../../components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import FooterGrid from "../../components/Footer/Footer";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { useStyles } from "./MyOrders.style";
import NoPlacedOrdersDelivery from './../EmptyPages/NoPlacedOrdersDelivery';


function MyOrders(props) {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  //headrer data
  const token = localStorage.getItem("token");

  const headers = {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const fetchOrdersData = async () => {
    const res = await axios.get(
      "http://localhost:5000/order/getusertrackorder",
      {
        headers: headers,
      }
    );
    return res.data;
  };

  useEffect(() => {
    (async () => {
      const result = await fetchOrdersData();
      setOrders(result);
    })();
  }, []);

  /* redirect to order Summary */
  const handleOrderSummary = (id) => {
    props.history.push("/ordersummary/" + id);
  };
  const handleDate = (date) => {
    const newDate = new Date(date);

    return newDate.toDateString();
  };
  const handleTime = (date) => {
    const newDate = new Date(date);
    return newDate.toTimeString();
  };

  return (
    <>
      <div className={classes.root}>
        <NavAppBar />

        <Container className={classes.container} maxWidth="lg">
          <Grid container spacing={2}>
            {/* TITLE OF PAGE ! */}
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={12}
              lg={12}
              spacing={3}
              style={{ justifyContent: "center" }}
            >
              <Typography className={classes.orderHeading}>
                Track Your Active Orders!
                <hr className={classes.hrstyle} />
              </Typography>
            </Grid>

            <Grid item container lg={12} xs={12} md={12} sm={12} spacing={2}>
              {orders.length > 0 ? (
                orders?.map((order) => {
                  return (
                    <Grid item lg={6} md={6} sm={12} xs={12} key={order._id}>
                      <Paper className={classes.paper} id="1234">
                        <Grid>
                          {/* Title */}
                          <Grid item container direction="row" lg={12}>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                              <div className={classes.imgContainer}>
                                <img
                                  className={classes.restImage}
                                  src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                ></img>
                              </div>
                            </Grid>

                            <Grid item lg={8} md={8} sm={8} xs={8}>
                              <b>
                                <p className={classes.restaurantTitle}>
                                  {order.restaurantDetails.restaurantName}
                                </p>
                              </b>
                            </Grid>
                            {/* <Grid item lg={2} md={2} sm={2} xs={2}>
                              <p className={classes.rating}>
                                <StarRateIcon /> 5.0
                              </p>
                            </Grid> */}
                          </Grid>
                          <hr />

                          {/* Content */}
                          <Grid item lg={12} md={12} sm={12} xs={12}>
                            <p>
                              <b>Order Id :</b>
                              <strong> #{order._id}</strong>
                            </p>
                            <p>
                              <b>Order Date:</b>
                              <strong>
                                {handleDate(order.orderDateAndTime)}
                              </strong>
                            </p>
                            <p>
                              <b>Order Time:</b>
                              <strong>
                                {handleTime(order.orderDateAndTime)}
                              </strong>
                            </p>
                            <p></p>
                            {/*   <p><b>Order Status:</b> <strong>{order.orderStatus }</strong></p> */}
                            <b>Total Amount:</b>
                            <strong> Rs {order.totalAmount}</strong>
                          </Grid>
                          <hr />

                          {/* Track Order and Order SUmmary */}
                          <Grid item container justify="flex-end" lg={12}>
                            <Button
                              onClick={() => handleOrderSummary(order._id)}
                              className={classes.acceptButton}
                              variant="contained"
                              color="secondary"
                            >
                              Track Order
                            </Button>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  );
                })
              ) : (
                <>
                <Container spacing={3} className={classes.noOrderImage}>
                  <Grid
                    container
                    spacing={3}
                    direction="column"
                    alignItems="center"
                    justify="center"
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <NoPlacedOrdersDelivery />
                      <h3>No Active Orders!</h3>
                    </Grid>
                  </Grid>
                </Container>
              </>
               
              )}
            </Grid>

           
          </Grid>
        </Container>
        <FooterGrid />
      </div>
    </>
  );
}
export default MyOrders;
