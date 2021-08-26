import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Container,
  Box,
  Paper,
  FormControlLabel,
  Chip,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// import SearchBar from "../components/SearchBar";
import SearchBar from "material-ui-search-bar";
import RestaurantItems from "../../components/RestaurantItems/RestaurantItems";
import NavAppBar from "../../components/Navbar/Navbar";
import FooterGrid from "../../components/Footer/Footer";
import StarRateIcon from "@material-ui/icons/StarRate";
import RestaurantInfoCarausal from "../../components/RestaurantInfoCarausal/RestaurantInfoCarausal";
import EcoIcon from "@material-ui/icons/Eco";
import EcoOutlinedIcon from "@material-ui/icons/EcoOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { getRestaurantById } from "../../services/axiosData";
import SimpleRating from "../../components/Rating/Rating";
import { GreenCheckbox,useStyles } from './RestaurantContainer.style';



const RestaurantContainer = (props) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [vegChecked, setVegChecked] = useState(false);
  // const allVeg = items.filter((item) => item.foodType === "Veg");
  const [restaurantData, setRestaurant] = useState({});
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const headers = {
    //'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  //rating modal open
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    (async function () {
      const res = await getRestaurantById(props.match.params.restaurantId);
      setRestaurant(res);
      setItems(res.menuDetails);
    })();
  }, []);

  //filter based on  search
  const handleSearchChange = (value) => {
    if (value == "") {
      setItems(restaurantData.menuDetails);
    } else {
      let filteredItems = restaurantData.menuDetails?.filter((search) => {
        return (
          search.foodDescription.toLowerCase().includes(value.toLowerCase()) ||
          search.foodName.toLowerCase().includes(value.toLowerCase())
        );
      });
      setItems(filteredItems);
    }
    const handleSearch = (value) => {};
  };

  //filter based on veg-only..
  const handleVegCheckChange = (event) => {
    setVegChecked(!vegChecked);
    if (vegChecked != true) {
      const filterItem = items.filter((item) => item.foodType == "Veg");
      setItems(filterItem);
    } else {
      setItems(restaurantData.menuDetails);
    }
  };

  const handleSubmitOfRating = async (ratingData, event) => {
    event.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/rate/addratingtorestaurant",
      {
        restaurantId: props.match.params.restaurantId,
        rating: ratingData.rating,
        ratingReview: ratingData.review,
      },
      {
        headers: headers,
      }
    );
  };

  return (
    <>
    <NavAppBar />
      <Container>
        <Grid container className={classes.orderbox}>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={1}
            className={classes.grid1}
          ></Grid>
          <Grid
            container
            item
            xs={10}
            s={10}
            md={10}
            lg={11}
            className={classes.grid2}
          >
            <Grid item xs={12} s={12} md={5} lg={6}>
              <div className={classes.restDetails}>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h2"
                  style={{ fontStyle: "bolder" }}
                  className={classes.typographyDetails}
                >
                  {/*   Id is : {match.params.id} */}
                  <br />
                  {restaurantData.restaurantName}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#171A29" }}
                  component="body2"
                  className={classes.typographyDetails}
                >
                  {/* {ratings.review} {ratings.rating} */}
                  {
                    <div>
                      {restaurantData?.restaurantCategory?.map((cat, index) => {
                        return cat ? (
                          <>
                            <Chip variant="outlined" size="small" label={cat} />{" "}
                          </>
                        ) : (
                          "No Categories defined"
                        );
                      })}
                    </div>
                  }
                </Typography>

                <Typography
                  variant="body2"
                  className={classes.typographyDetails}
                  style={{ color: "#171A29" }}
                >
                  {restaurantData.restaurantDescription}
                </Typography>
                <br />
                <Typography
                  variant="body2"
                  className={classes.typographyDetails}
                  style={{ color: "#171A29" }}
                >
                  {/* <b>Address</b>: */}
                  {restaurantData?.restaurantLocation?.streetAddress +
                    "," +
                    restaurantData?.restaurantLocation?.area +
                    "," +
                    restaurantData?.restaurantLocation?.landmark +
                    "," +
                    restaurantData?.restaurantLocation?.city +
                    "," +
                    restaurantData?.restaurantLocation?.state +
                    "," +
                    restaurantData?.restaurantLocation?.country}
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.typographyDetails}
                  color="#171A29"
                >
                  Call: {restaurantData?.restaurantMobileNumber}
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.typographyDetails}
                  color="#171A29"
                >
                  Dine-In Timing: {restaurantData?.workingHours?.start} AM to{" "}
                  {restaurantData?.workingHours?.end} PM
                </Typography>
                <Box
                  display="flex"
                  direction="row"
                  className={classes.restDetailRating}
                >
                  <div className={classes.restDetailRatingDiv}>
                    <p className={classes.rating}>
                      <StarRateIcon />{" "}
                      {parseFloat(restaurantData.rating_avg).toFixed(1)}
                    </p>
                  </div>

                  <div className={classes.restDetailRatingDiv}>
                    <b>Rs. {restaurantData.restaurantCostForTwo}</b>
                    <br />
                    Costs for Two
                  </div>
                  <div className={classes.restDetailRatingDiv}>
                    {" "}
                    <p
                      onClick={handleClickOpen}
                      className={classes.addRatingBtn}
                    >
                      Add Rating
                    </p>
                  </div>

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
                </Box>
              </div>
            </Grid>
            {/* ImageSEction */}
            <Grid item xs={12} sm={12} md={7} lg={6}>
              <Box className={classes.imgContainer}>
                {/*Rest caaarausala for images */}
                <RestaurantInfoCarausal
                  images={restaurantData?.restaurantImages}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container direction="row" style={{ marginTop: 40 }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={3}
            md={3}
            style={{ marginTop: 20, marginLeft: "80", paddingLeft: 10 }}
          >
            <SearchBar
              className={classes.searchbar}
              placeholder="Search for food"
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            style={{
              paddingLeft: "50px",
            }}
            lg={6}
            md={6}
          >
            <Typography
              gutterBottom
              variant="h5"
              noWrap
              style={{ textAlign: "center" }}
            >
              Why starve when you have us&nbsp;&nbsp;
              <span role="img" aria-label="fries" style={{ fontSize: 40 }}>
                🍟
              </span>
            </Typography>
            <Typography variant="body1" noWrap style={{ textAlign: "center" }}>
              Order from wide varieties of different available Items below
            </Typography>
            <br />
          </Grid>

          <Grid
            item
            xs={12}
            sm={3}
            lg={3}
            md={3}
            style={{
              marginTop: 20,
              right: "10px",
            }}
          >
            <div className={classes.checkBoxStyle}>
              <Paper className={classes.vegSection}>
                <span className={classes.vegText}>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={vegChecked}
                        onChange={handleVegCheckChange}
                      />
                    }
                  />
                </span>
                <EcoOutlinedIcon
                  classes={classes.ecoOutlinedIcon}
                  style={{ color: "green", transform: "scaleX(-1)" }}
                />
                <EcoIcon style={{ marginLeft: "-13px", color: "green" }} />
                <b>Pure Veg</b>{" "}
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        //style={{ marginTop: 20, marginLeft: "20", paddingLeft: 10 }}
      >
        <RestaurantItems
          customProps={props}
          items={items}
          restaurantId={props.match.params.restaurantId}
        />
      </Grid>
      <FooterGrid />
    </>
  );
};
export default RestaurantContainer;
