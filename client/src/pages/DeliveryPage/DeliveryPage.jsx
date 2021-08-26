import React, { useState, useEffect } from "react";
import NavAppBar from '../../components/Navbar/Navbar';
import FooterGrid from "../../components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { fade, Grid, Card } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import NoPlacedOrdersDelivery from '../EmptyPages/NoPlacedOrdersDelivery';
import { useStyles } from "./DeliveryPage.style"



export default function DeliveryPage() {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);
  // const [acceptedOrder, setAcceptedOrder] = useState({});
  const [colorStatus,setColorStatus]=useState(true);
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const [snackstate, setsnackState] = useState({
    open: false,
    message: "order accepted",
  });

  const { open, message } = snackstate;

  // handle snackbar pop up with message
  const handleClick = (message) => {
    setsnackState({ open: true, message: message });
  };

  // handleclose snackbar
  const handleClose = () => {
    setsnackState({ ...snackstate, open: false });
  };

  //Axios get api call for getting placed orders
  const getPlacedOrderForDeliveryExecutive = async () => {
    const res = await axios.get(
      "http://localhost:5000/order/getplacedorderfordeliveryexecutive",
      {
        headers: headers,
      }
    );
    return res.data;
  };

  useEffect(() => {
    (async function () {
      const res = await getPlacedOrderForDeliveryExecutive();
      setOrders(res);
    })();
  }, []);

  const handleOrders = async (orderId) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/delivery/addDeliveryExecutive",
        { orderId: orderId },
        {
          headers: headers,
        }
      ); 
      setColorStatus(true);
      handleClick(res.data.message);
      const res1 = await getPlacedOrderForDeliveryExecutive();
      setOrders(res1);
    } catch (err) {
      setColorStatus(false);
      handleClick(err.response.data.message);
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
                <Link to={`/acceptedOrders`}>
                  <img
                    src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg"
                    className={classes.imagesize}
                  />
                </Link>
                <div>
                  <Typography className={classes.imageText}>
                    {" "}
                    <b>Accepted Orders</b>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg"
                  className={classes.imagesize}
                />
                <div className={classes.imageText}>
                  <b>Your restaurants Delivered</b>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg"
                  className={classes.imagesize}
                />
                <div className={classes.imageText}>
                  <b>Deliver with Foodiz</b>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>

   
        {orders.length > 0 ? (


          <Container maxWidth="lg">
            <Grid container spacing={3}>
    
            <Grid item container xs={12} sm={12} md={12} lg={12} spacing={3} style={{  justifyContent: 'center'}}>
            <Typography className={classes.orderHeading}>
              Orders In you  City!!
              <hr className={classes.hrstyle}/>
              </Typography>
            
            </Grid>
          
              <Grid item container xs={12} sm={12} md={12} lg={12} spacing={3}>
                
                {orders.map((order) => (
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Paper className={classes.paper}>
                      <div className={classes.orderDetails}>
                        <Grid item container xs={12} sm={12} md={12} lg={12}>
                          <Grid
                            item
                            xs={6}
                            sm={6}
                            md={6}
                            lg={6}
                            className={classes.orderdiv}
                          >
                            <div className={classes.orderdiv}>
                              <b>Order Id:</b>{" "}
                            </div>
                            <div className={classes.orderdiv}>
                              {" "}
                              <b>Restaurant Name:</b>
                            </div>
                            <div className={classes.orderdiv}>
                              {" "}
                              <b> PickUp Address:</b>{" "}
                            </div>
                            <div className={classes.orderdiv}>
                              {" "}
                              <b>Drop address:</b>{" "}
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className={classes.orderdivDetail}>
                              {" "}
                              #{order._id}{" "}
                            </div>
                            <div className={classes.orderdivDetail}>
                              {" "}
                              {order.restaurantDetails.restaurantName}
                            </div>
                            <div className={classes.orderdivDetail}>
                              {" "}
                              {order.orderLocation.streetAddress},
                              {order.orderLocation.landmark
                                ? order.orderLocation.landmark + ","
                                : ""}
                              {order.orderLocation.area},
                              {order.orderLocation.city},
                              {order.orderLocation.state}
                            </div>
                            <div className={classes.orderdivDetail}>
                              {" "}
                              {
                                order.restaurantDetails.restaurantLocation
                                  .streetAddress
                              }
                            </div>
                          </Grid>

                          {/*  <div className={classes.acptbtnDiv}> */}
                          <Grid item container justify="flex-end" lg={12}>
                            <Button
                              onClick={() => handleOrders(order._id)}
                              className={classes.acceptButton}
                              variant="contained"
                              color="secondary"
                            >
                              Accept
                            </Button>
                          </Grid>
                          {/*  </div> */}

                          <Snackbar
                            open={snackstate.open}
                            onClose={handleClose}
                            message={snackstate.message}
                            autoHideDuration={1000}
                          >{
                            colorStatus
                            ?<Alert
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
                            :<Alert
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
                          }
                            
                          </Snackbar>
                        </Grid>
                      </div>
                    </Paper>
                  </Grid>
                ))}
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
                  <h3>No Orders placed in your City!!</h3>
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      </div>

      <FooterGrid></FooterGrid>
    </React.Fragment>
  );
}