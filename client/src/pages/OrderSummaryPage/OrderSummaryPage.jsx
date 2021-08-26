import React, { useState, useEffect, useCallback } from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import NavAppBar from "../../components/Navbar/Navbar";
import FooterGrid from "../../components/Footer/Footer";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import CustomizedTimeline from "../../components/CustomizedTimeline/CustomizedTimeline";
import axios from "axios";
import { useStyles } from "./OrderSummaryPage.style";
import DeliveryExecutiveDetails from './../../components/DeliveryExecutiveDetail/DeliveryExecutiveDetail';

const OrderSummaryPage = (props) => {
  const classes = useStyles();
  const [orderData, setOrderData] = useState({});
  const [deliveryManDetails, setdeliveryManDetails] = useState([]);
  //order Id
  const orderId = props.match.params.orderId;

  //header data
  const token = localStorage.getItem("token");

  const headers = {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const FetchOrderByID = async () => {
    const res = await axios.get(
      `http://localhost:5000/order/getorderdetailbyorderid/${orderId}`,
      { headers: headers }
    );
    return res.data;
  };

  useEffect(() => {
    (async () => {
      const res = await FetchOrderByID();
      setOrderData(res.orderData);

      if (res.deliveryExecutiveData) {
        setdeliveryManDetails(res.deliveryExecutiveData);
      } 

    })();
  }, []);


  return (
    <>
      <NavAppBar />
      {!orderData ? (
        "No orders Placed "
      ) : (
        <div className={classes.root}>
          <Container>
            <Grid container spacing={2}>
              {orderData.orderStatus === "Completed" ||
              orderData.orderStatus === "Cancelled" ? (
                <Container className={classes.onlyOrderSummaryDisplay}>
                  <Grid container>
                    <Grid item container lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="h4"
                        color="Primary"
                        className={classes.Title}
                      >
                    
                      </Typography>
                      <OrderSummary orderData={orderData} />
                      {deliveryManDetails != [] ? (
                        <DeliveryExecutiveDetails
                          page="completedOrder"
                          detail={deliveryManDetails}
                          status={orderData.orderStatus}
                        />
                      ) : null}
                    </Grid>
                  </Grid>
                </Container>
              ) : (
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Typography
                    variant="h4"
                    color="Primary"
                    className={classes.Title}
                  >
               
                  </Typography>
                  <OrderSummary orderData={orderData} />

                  {deliveryManDetails != [] &&
                  orderData?.orderStatus != "Placed" ? (
                    <DeliveryExecutiveDetails
                      page="currentOrder"
                      detail={deliveryManDetails}
                      status={orderData.orderStatus}
                    />
                  ) : null}
                </Grid>
              )}

              <br />
              {orderData.orderStatus === "Completed" ||
              orderData.orderStatus === "Cancelled" ? null : (
                <>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography
                      variant="h4"
                      color="Primary"
                      className={classes.Title}
                    >
                      Track your Order Here!
                    </Typography>
                    <CustomizedTimeline status={orderData?.orderStatus} />
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
        </div>
      )}

      <FooterGrid />
    </>
  );
};
export default OrderSummaryPage;
