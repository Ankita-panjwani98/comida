import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // placedorder:{
  // marginLeft: '40%',
  // marginRight: 'auto'
  // }
}));

export default function NoPlacedOrdersDelivery() {
  const classes = useStyles();
  // const restaurants = foodData();

  return (
    <React.Fragment>
      {/* <Grid container >
      <Grid item container xs={12} sm={12} md={12} lg={12}> */}
      <img
        src="https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png"
        width="300"
        height="300"
        alt="no placed order"
      />
      {/*  </Grid>
      </Grid> */}
    </React.Fragment>
  );
}
