import React, { useState, useEffect } from "react";
import { withRouter} from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import currencyInr from "@iconify-icons/mdi/currency-inr";
import { Icon, InlineIcon } from "@iconify/react";
import _ from "lodash";
import Button from '@material-ui/core/Button';
import axios from "axios";
import {decodeToken} from '../../services/authUser';
import jwt_decode from "jwt-decode";
import NoPlacedOrdersDelivery from '../../pages/EmptyPages/NoPlacedOrdersDelivery';
import { useStyles } from './PastOrders.style';



 function PastOrders(props) {
  const classes = useStyles();
  const [myOrders, setMyOrders] = useState([]);

  const token = localStorage.getItem("token");

  const headers = {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const fetchAllOrders = async () => {
    const res = await axios.get("http://localhost:5000/order/getuserorder", {
      headers: headers,
    })
    return res.data;
  };
   const fetchPastorders = async () => {
    var token = localStorage.getItem("token");
    const decodedToken =   decodeToken(token); 
     if(decodedToken.role=="DE"){
      const resp = await axios.get("http://localhost:5000/delivery/getdeliveryexecutivepastorders", {
        headers: headers,
       })
       return resp.data;
     }else{
      const resp = await axios.get("http://localhost:5000/order/getUserOrder", {
        headers: headers,
       })
       return resp.data;
     }
     
}

  useEffect(() => {
    (async () => {
      const result = await fetchAllOrders();
      const resp = await fetchPastorders();
    
      setMyOrders(resp);
    })();
  }, []);


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
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12} lg={12} md={12}>
            <Paper className={classes.paper}>
           
            {myOrders.length> 0 ? (myOrders?.map(order => (
              <Paper className={classes.paper1} key={order._id}>
                   
                <div className={classes.pastorders}>
                  <div className={classes.pastImage}>
                    <img className={classes.image} src={order?.restaurantDetails?.restaurantImages} />
                  </div>
                  <div className={classes.orderdetails}>
                    <Typography
                    >
                     <b> Order Id:  </b>  #{order._id}
                    </Typography>

                    <Typography>  <b>{order?.restaurantDetails?.restaurantName}</b></Typography>
                    <Typography>
                      <b>Order Date:</b>
                      <strong>
                            {" "}
                            {handleDate(order.orderDateAndTime)}
                          </strong>
                    </Typography>
                   
                    <Typography>
                    <b>Order Time:</b>
                          <strong>
                            {" "}
                            {handleTime(order.orderDateAndTime)}
                          </strong>
                    </Typography>
                    <div className={classes.price}>
                      <hr className={classes.hrcolor} />
                      <Typography>
                        Total Paid: <Icon icon={currencyInr} />
                        {order.totalAmount}
                      </Typography>
                      <div className={classes.detailsBtn}>

                      
                        <Button
                           onClick={() => handleOrderSummary(order._id)}
                          className={classes.detailsBtn}>Order Details</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )) ): 
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
                    <h3>No Orders Placed!</h3>
                  </Grid>
                </Grid>
              </Container>
            
            }
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default withRouter(PastOrders);