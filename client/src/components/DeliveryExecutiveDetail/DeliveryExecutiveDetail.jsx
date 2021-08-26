import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";
import StarRateIcon from "@material-ui/icons/StarRate";
import DirectionsBikeOutlinedIcon from "@material-ui/icons/DirectionsBikeOutlined";
import SimpleRating from "../Rating/Rating";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { useStyles } from "./DeliveryExecutiveDetail.style";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function DeliveryExecutiveDetails(props) {
  const classes = useStyles();
  const { page, detail, status } = props;
  const [open, setOpen] = useState(false);
  const [ratings, setRatings] = useState({});
  const [snackstate, setsnackState] = useState({
    openSnackbar: false,
    message: "Rating given Successfully!",
  });
/*   const { openSnackbar, message } = snackstate; */

  const token = localStorage.getItem("token");
  const headers = {
    //'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  //Rating success snackbar
  const handleSnackbarClose = () => {
    setsnackState((status) => ({ ...status, openSnackbar: false }));
  };
  const handleSnackbarClick = () => {
    setsnackState((status) => ({ ...status, openSnackbar: true }));
  };

  //rating modal open
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitOfRating = async (ratingData, event) => {
    event.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/rate/addratingtodeliveryexecutive",
      {
        deliveryExecutiveId: detail._id,
        rating: ratingData.rating,
        ratingReview: ratingData.review,
      },
      {
        headers: headers,
      }
    );
    setsnackState((status) => ({ ...status, openSnackbar: true }));
  };

  return (
    <>
      <div className={classes.root}>
        <Container>
          <Grid container>
            <Grid item lg={12} xs={12} md={12} sm={12}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Paper className={classes.paper} id="1234">
                  <Grid>
                    {/* Title */}
                    <Grid item container direction="row" lg={12}>
                      <Grid item lg={2} md={2} sm={4} xs={4}>
                        <div className={classes.imgContainer}>
                          <DirectionsBikeOutlinedIcon
                            style={{ fontSize: "50px", color: "red" }}
                          />
                        </div>
                      </Grid>

                      <Grid item lg={8} md={8} sm={8} xs={8} spacing={8}>
                        <b>
                          <p className={classes.restaurantTitle}>
                            Your Delivery Person Details
                          </p>
                        </b>
                      </Grid>
                      {/* <Grid item lg={2} md={2} sm={12} xs={12}>
                        <p className={classes.rating}>
                          <StarRateIcon /> 5.0
                        </p>
                      </Grid> */}
                    </Grid>

                    <hr />
                    {/* Content */}
                    <Grid
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className={classes.deliveryManDetails}
                    >
                      <p>
                        <b>Name:</b>
                        <strong>
                          {" "}
                          {detail.firstName} {detail.lastName}
                        </strong>
                      </p>
                      <p>
                        <b>Contact No:</b>
                        <strong>{detail.mobileNumber}</strong>
                      </p>
                      <p>
                        <b>Vehicle Number:</b>
                        <strong>
                          {detail?.deliveryExecutive?.vehicleNumber}
                        </strong>
                      </p>
                      <p></p>
                      <hr />
                    </Grid>

                    {/* Track Order and Order SUmmary */}
                    <Grid
                      item
                      container
                      justify="flex-end"
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                    >
                      {page === "completedOrder " || status === "Completed" ? (
                        <Button
                          onClick={handleClickOpen}
                          className={classes.acceptButton}
                          variant="contained"
                          color="secondary"
                        >
                          Rate
                        </Button>
                      ) : null}
                    </Grid>
                  </Grid>
                </Paper>


                {/* Snackbar popup */}
                <Snackbar
        open={snackstate.openSnackbar}
        onClose={handleSnackbarClose}
        message={snackstate.message}
        autoHideDuration={1000}
      >

          <Alert
            severity="success"
            onClose={handleSnackbarClose}
           
            style={{
              backgroundColor: "#1a5e2d",
              color: "white",
              width: "350px",
            }}
          >
            {snackstate.message}
          </Alert></Snackbar>
                {/* Rating Dailog */}

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
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
export default DeliveryExecutiveDetails;
