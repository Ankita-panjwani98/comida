import React, { useState,useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "./OrderSummary.style";
import Button from "@material-ui/core/Button";
import SimpleRating from "../Rating/Rating";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { decodeToken } from "../../services/authUser";

const OrderSummary = (props) => {
  const classes = useStyles();

  const { orderData } = props;
  const foodList = orderData.foodList;
  const [open, setOpen] = useState(false);
  const { detail } = props;
  const [authenticated,setAutheticated]=useState();
  const token = localStorage.getItem("token");
  const headers = {
    //'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitOfRating = async (ratingData, event) => {
    event.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/rate/addratingtofood",
      {
        foodList: orderData.foodList,
        rating: ratingData.rating,
        ratingReview: ratingData.review,
        restaurantId:orderData.restaurantDetails.restaurantId
      },
      {
        headers: headers,
      }
    );
   
    
  };
  useEffect(() => {
    (async function () {
      
      if (token) {
        let data = decodeToken(token);
        setAutheticated(data.role);
      }
    })();
  });
  return (
    <>
      <div className={classes.root}>
        <Container>
          <Grid spacing={2}>
            <Typography variant="h4" className={classes.orderDetailsHeading}>
              Order Summary
              <hr className={classes.hrstyle} />
            </Typography>
            <Paper className={classes.paper}>
              <Grid item conatiner lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h5">
                  <b>{orderData?.restaurantDetails?.restaurantName}</b>
                </Typography>
                <Typography variant="h5">
                  Order Id: <b>#{orderData._id}</b>
                </Typography>
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />
              <Grid item lg={12}>
                Your order has been placed successfully!
              </Grid>
              {/* {
                authenticated=="NU"
                ?<Grid container justify="center" style={{ marginTop: "20px" }}>
                <Button
                  onClick={handleClickOpen}
                  className={classes.acceptButton}
                  variant="contained"
                  color="secondary"
                >
                  Rate
                </Button>
              </Grid>
                :<></>
              } */}
              
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />
              <div className={classes.centralBorder}></div>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                container
                className={classes.sectionGrid}
              />
              <Grid item container lg={12} md={12} sm={12} xs={12}>
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
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
                      {foodList?.map((row) => (
                        <TableRow key={row.foodItem._id}>
                          <TableCell component="th" scope="row">
                            {row.foodItem.foodName}
                          </TableCell>
                          <TableCell align="right">{row.quantity}</TableCell>
                          <TableCell component="th" align="right" scope="row">
                            Rs. {row.foodItem.foodPrice}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <div className={classes.centralBorder}></div>
              <Grid container justify="flex-end" style={{ marginTop: "20px" }}>
                <Typography variant="h6">
                  Total Amount : {orderData.totalAmount}
                </Typography>
              </Grid>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle className={classes.editHeading}>
                  <p className={classes.addRating}>Add Rating</p>
                </DialogTitle>

                <DialogContent className={classes.ratingDialog}>
                  <SimpleRating
                    handleSubmitOfRating={handleSubmitOfRating}
                    onClose={handleClose}
                  />{" "}
                  
                </DialogContent>
              </Dialog>
            </Paper>
            {/*  </Grid> */}
          </Grid>
        </Container>
        {/*  <FooterGrid /> */}
      </div>
    </>
  );
};
export default OrderSummary;
