import React, { useState, useEffect } from "react";
import FooterGrid from '../../components/Footer/Footer';
import { Grid} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";

import NoPlacedOrdersDelivery from "../EmptyPages/NoPlacedOrdersDelivery";
import Alert from "@material-ui/lab/Alert";
import NavAppBar from '../../components/Navbar/Navbar';
import { useStyles } from "./AcceptedOrders.style";
 

export default function AcceptedOrders() {
  const classes = useStyles();

  const [acceptedOrder, setAcceptedOrder] = useState({});
  const [colorStatus, setColorStatus] = useState(true);

  const [snackstate, setsnackState] = useState({
    open: false,
    message: "Status Updated!",
  });
  const { open, message } = snackstate;
  // handle snackbar pop up with message

  // handleclose snackbar
  const handleClose = () => {
    setsnackState({ ...snackstate, open: false });
  };

  const getOrderDetailAcceptedByDeliveryExecutive = async () => {
    const res = await axios.get(
      "http://localhost:5000/delivery/getorderdetailacceptedbydeliveryexecutive",
      {
        headers: headers,
      }
    );
    return res.data;
  };

  useEffect(() => {
    (async function () {
      const res = await getOrderDetailAcceptedByDeliveryExecutive();
      setAcceptedOrder(res);
    })();
  }, []);

  const token = localStorage.getItem("token");

  const headers = {
    //"Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const [state, setState] = useState("None");
  const [optstate, setOtp] = useState();

  const handleotp = (event) => {
    const otp = event.target.value;
    setOtp(otp);

  };
  const handleChange = (event) => {
    const name = event.target.value;
    setState(name);
  };
  const handleClick = (message) => {
    setsnackState({ open: true, message: message });
  };

  const handleStatus = async () => {
    setsnackState((status) => ({ ...status, open: true }));

    if (state == "Completed") {
      try {
        const res = await axios.post(
          "http://localhost:5000/delivery/changeorderstatus",
          {
            orderId: acceptedOrder._id,
            orderStatus: state,
            orderOtp: parseInt(optstate),
          },
          {
            headers: headers,
          }
        );
        setColorStatus(true);
        handleClick(res.data.message);
        const res1 = await getOrderDetailAcceptedByDeliveryExecutive();
        setAcceptedOrder(res1);

      } catch (err) {
        setColorStatus(false);
        handleClick(err.response.data.message);
      }
    } else {
      try{
        const res = await axios.post(
          "http://localhost:5000/delivery/changeorderstatus",
          { orderId: acceptedOrder._id, orderStatus: state },
          {
            headers: headers,
          }
        );
        setColorStatus(true);
        handleClick(res.data.message);
      }catch(err){
        setColorStatus(false);
        handleClick(err.response.data.message);
      }
      

    }
  };

  return (
    <React.Fragment>
      <NavAppBar></NavAppBar>

      <div className={classes.root}>
        <div className={classes.deliveryImageDiv}>
          <Grid container spacing={1}>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={12}
              lg={12}
              spacing={1}
              className={classes.imageres}
            >
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg"
                  className={classes.imagesize}
                />
                <div className={classes.imageText}>
                  <strong>Accepted Orders</strong>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg"
                  className={classes.imagesize}
                />
                <div className={classes.imageText}>
                  <strong>Your restaurants Delivered</strong>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg"
                  className={classes.imagesize}
                />
                <div className={classes.imageText}>
                  <strong>Deliver with Foodiz</strong>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>

        {acceptedOrder.message == undefined ? (
          <Container maxWidth="md">
            <Grid container spacing={3}>
              <Grid item container xs={12} sm={12} md={12} lg={12} spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className={classes.orderDetailsDisplay}>
                    <Typography
                      variant="h4"
                      className={classes.orderDetailsHeading}
                    >
                      Accepted Order Details
                      <hr className={classes.hrstyle} />
                    </Typography>

                    <Grid item container xs={12} sm={12} md={12} lg={12}>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        className={classes.detailsOrderSpace}
                      >
                        <div className={classes.detailsOrderSpace}>
                          <b>Order Id: </b>{" "}
                        </div>
                        <div className={classes.detailsOrderSpace}>
                          {" "}
                          <b>Restaurant Name:</b>{" "}
                        </div>
                        <div className={classes.detailsOrderSpace}>
                          <b> PickUp Address: </b>
                        </div>
                        <div className={classes.detailsOrderSpace}>
                          {" "}
                          <b>Drop address: </b>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <div className={classes.detailsOrderLength}>
                          {" "}
                          #{acceptedOrder._id}
                        </div>
                        <div className={classes.detailsOrderLength}>
                          {" "}
                          {acceptedOrder?.restaurantDetails?.restaurantName}
                        </div>
                        <div className={classes.detailsOrderLength}>
                          {" "}
                          {acceptedOrder?.restaurantDetails?.restaurantLocation
                            ?.streetAddress +
                            "," +
                            acceptedOrder?.restaurantDetails?.restaurantLocation
                              ?.landmark +
                            "," +
                            acceptedOrder?.restaurantDetails?.restaurantLocation
                              ?.area +
                            "," +
                            acceptedOrder?.restaurantDetails?.restaurantLocation
                              ?.city +
                            "," +
                            acceptedOrder?.restaurantDetails?.restaurantLocation
                              ?.state +
                            "," +
                            acceptedOrder?.restaurantDetails?.restaurantLocation
                              ?.country}
                        </div>
                        <div className={classes.detailsOrderLength}>
                          {acceptedOrder?.orderLocation?.streetAddress +
                            "," +
                            acceptedOrder?.orderLocation?.landmark +
                            "," +
                            acceptedOrder?.orderLocation?.area +
                            "," +
                            acceptedOrder?.orderLocation?.city +
                            "," +
                            acceptedOrder?.orderLocation?.state +
                            "," +
                            acceptedOrder?.orderLocation?.country}
                        </div>
                      </Grid>
                    </Grid>

                    <Grid item container lg={12} md={12} sm={12} xs={12}>
                      <TableContainer className={classes.tablecontainer}>
                        <Table
                          className={classes.table}
                          aria-label="simple table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell>
                                <b>Food Item</b>
                              </TableCell>
                              <TableCell align="right">
                                <b>Quantity</b>
                              </TableCell>

                              <TableCell align="right">
                                <b>Price / item</b>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {acceptedOrder?.foodList?.map((food) => (
                              <TableRow key={food._id}>
                                <TableCell component="th" scope="row">
                                  {food?.foodItem?.foodName}
                                </TableCell>
                                <TableCell align="right">
                                  {food?.quantity}
                                </TableCell>
                                <TableCell
                                  component="th"
                                  align="right"
                                  scope="row"
                                >
                                  {food?.foodItem?.foodPrice * food?.quantity}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>

                      <Grid
                        container
                        justify="flex-end"
                        style={{ marginTop: "20px" }}
                      >
                        <Typography variant="h6">
                          Total Amount : {acceptedOrder.totalAmount}
                        </Typography>
                      </Grid>

                      <hr className={classes.hrabovestatus} />
                      <Grid item container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={6} sm={4} md={4} lg={4}>
                          <div className={classes.statusSelect}>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <InputLabel htmlFor="age-native-simple">
                                Status
                              </InputLabel>
                              <Select
                                native
                                value={state}
                                onChange={handleChange}
                                label="Status"
                                className={classes.formselect}
                              >
                                <option value="Select"></option>
                                <option value="Completed">Completed</option>
                                <option value="Out For Delivery">
                                  Out for Delivery
                                </option>
                              </Select>
                            </FormControl>
                          </div>
                        </Grid>

                        {state == "Completed" ? (
                          <Grid item xs={6} sm={8} md={8} lg={8}>
                            <TextField
                              onChange={handleotp}
                              id="standard-basic"
                              name="otp"
                              label="Enter OTP"
                            />
                          </Grid>
                        ) : null}

                        <Grid
                          item
                          container
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          justify="flex-end"
                        >
                          <div>
                            <Button
                              className={classes.confirmBtn}
                              onClick={handleStatus}
                            >
                              Confirm
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
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
                  <h3>No Accepted Orders!</h3>
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      </div>
      <Snackbar
        open={snackstate.open}
        onClose={handleClose}
        message={snackstate.message}
        autoHideDuration={1000}
      >
        {colorStatus ? (
          <Alert
            severity="success"
            onClose={handleClose}
            style={{
              backgroundColor: "#1a5e2d",
              color: "white",
              width: "350px",
            }}
          >
            {snackstate.message}
          </Alert>
        ) : (
          <Alert
            severity="error"
            onClose={handleClose}
            style={{
              backgroundColor: "#e8170c",
              color: "white",
              width: "350px",
            }}
          >
            {snackstate.message}
          </Alert>
        )}
      </Snackbar>
      <FooterGrid></FooterGrid>
    </React.Fragment>
  );
}