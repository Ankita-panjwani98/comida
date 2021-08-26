import React, { useState, useEffect } from "react";
import NavAppBar from '../../components/Navbar/Navbar';
import FooterGrid from "../../components/Footer";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  fade,
  Grid,
  Card,
  FormControl,
  InputLabel,
  InputBase,
  Select,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
// import Avatar from "@material-ui/core/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import StarRateIcon from "@material-ui/icons/StarRate";
import SearchBar from "material-ui-search-bar";

import axios from "axios";
import { AutoInit } from "materialize-css";

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
      <img src="https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png"
      
        width="300" height="300" alt="no placed order"/>
     {/*  </Grid>
      </Grid> */}
    </React.Fragment>
  );
}
