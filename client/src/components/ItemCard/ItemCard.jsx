import React, { useState } from "react";

//m-ui
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import { decodeToken } from "../../services/authUser";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStyles } from "./ItemCard.style";

function Alert(props) {
  return <MuiAlert elevation={10} variant="filled" {...props} />;
}

export default function ItemCard(props) {
  const classes = useStyles();
  const {
    restaurantId,
    foodName,
    foodCategory,
    foodDescription,
    foodImage,
    foodType,
    foodPrice,
    _id,
    avgRating,
    customProps,
  } = props;

  const [openSnackBar, setSnackBar] = useState(false); //open close snack bar
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const data = {
    foodId: _id,
    restaurantId: restaurantId,
  };
  let authenticated = "";

  if (token) {
    authenticated = decodeToken(token);
  }

  const handleCart = async (_id) => {
    if (authenticated && authenticated.role == "NU") {
      const res = await axios.post(
        "http://localhost:5000/cart/addtocart",
        data,
        {
          headers: headers,
        }
      );
      setSnackBar(true);
    } else if (authenticated && authenticated.role == "DE") {
      setSnackBar(true);
    } else {
      customProps.history.replace("/login");
    }
    if (authenticated) {
      const res = await axios.post(
        "http://localhost:5000/cart/addtocart",
        data,
        {
          headers: headers,
        }
      );

      setSnackBar(true);
    } else {
      customProps.history.replace("/login");
    }
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      setSnackBar(false);
      return;
    }
    setSnackBar(false);
  };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {foodName}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {foodCategory.join(",")}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" noWrap>
              {foodDescription}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rs.{foodPrice}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <p className={classes.rating}>
                <StarRateIcon /> {parseFloat(avgRating).toFixed(1)}
              </p>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {foodType}
            </Typography>
          </CardContent>

          {/*  <Box display="flex" flexDirection="row"> */}
          <Button
            className={classes.addTocart}
            variant="contained"
            onClick={() => {
              handleCart(_id);
            }}
          >
            Add to Cart
          </Button>
        </div>
        <CardMedia
          justify="flex-end"
          className={classes.cover}
          image={foodImage}
          title="Item order"
        />
      </Card>

      <div className={classes.snackbar}>
        <Snackbar
          open={openSnackBar}
          autoHideDuration={1000}
          onClose={handleCloseSnackBar}
        >
          {authenticated && authenticated.role == "DE" ? (
            <Alert
              onClose={handleCloseSnackBar}
              style={{ backgroundColor: "red", width: "300px" }}
            >
              Delivery Executive can't place an order!
            </Alert>
          ) : (
            <Alert
              onClose={handleCloseSnackBar}
              style={{ backgroundColor: "#157a21", width: "250px" }}
            >
              Item added to cart!
            </Alert>
          )}
        </Snackbar>
      </div>
    </>
  );
}
