import React, { useState, useEffect } from "react";
import NavAppBar from "../../components/Navbar/Navbar";
import FooterGrid from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {
  fade,
  Grid,
  Card,
  FormControl,
  InputLabel,
  InputBase,
  Checkbox,
  Select,
  Paper,
  FormControlLabel,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import StarRateIcon from "@material-ui/icons/StarRate";
import SearchBar from "material-ui-search-bar";
import EcoIcon from "@material-ui/icons/Eco";
import EcoOutlinedIcon from "@material-ui/icons/EcoOutlined";
import axios from "axios";
import { useStyles, GreenCheckbox } from './AllRestaurantsPage.style';

const handleId = (rest) => {
};

export default function AllRestaurants() {
  const classes = useStyles();
   // const restaurants = foodData();
   const [city, setCity] = useState();
   const [search, setSearch] = useState();
   const [vegChecked, setVegChecked] = useState(false);

   const token = localStorage.getItem("token");

   const [restaurants, setRestaurants] = useState([]);
   const [globalRestaurant, setGlobalRestaurant] = useState([]);
   const headers = {
     // "Content-Type": "application/json",
     Authorization: `Bearer ${token}`,
   };
   const handleVegCheckChange = (event) => {
     setVegChecked(!vegChecked);
     if (vegChecked != true) {
       const restaurantFilter = restaurants.filter(
         (restaurant) => restaurant.restaurantType == "Veg"
       );
       setRestaurants(restaurantFilter);
     } 
     else {
       const restaurantFilter = globalRestaurant.filter(
         (restaurant) => restaurant.restaurantLocation.city == city
       );
       setRestaurants(restaurantFilter);
     }
   };
   const handleCityChange = async (event) => {
     setCity(event.target.value);
   };
   const handleSearchChange = async (event) => {
     setSearch(event);
   };



   const getSearchedRestaurants = async (city, search) => {
     const resp = await axios.get(
       "http://localhost:5000/restaurant/searchrestaurants",
       { params: { city: city, search: search } },
     );
     return resp.data;
   };
   useEffect(() => {
     (async function () {
       const res = await axios.get(
         "http://localhost:5000/restaurant/getrestaurants"
       );
       setGlobalRestaurant(res.data);
       setRestaurants(res.data);
     })();
   }, []);
   
   useEffect(() => {
     (async function () {
       const res = await getSearchedRestaurants(city, search)
       setRestaurants(res);
       // handleVegCheckChange();
     })();
   }, [city, search]);

  return (
    <React.Fragment>
      <NavAppBar></NavAppBar>

      <Container maxWidth="lg" className={classes.foodsContainer}>
        <Typography className={classes.restPagetitle} variant="h4">
          Restaurants In Your City
          <hr className={classes.hrstyle} />
        </Typography>
{/* filtering */}
        <Grid container >
          <Grid item container xs={12} sm={12} md={12} lg={12} spacing={6} className={classes.filterItemsAlign}> 
            <Grid item xs={12} sm={3} md={3} lg={2}  justify="flex-start">

                  <FormControl variant="outlined" >
                    <InputLabel htmlFor="age-native-simple"  className={classes.checkboxstyle}>City</InputLabel>
                    <Select
                      native
                      value={city}
                      onChange={handleCityChange}
                      label="Status"
                   
                    >
                      <option aria-label="None" value="" />
                      <option value="Gandhinagar">Gandhinagar</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Surat">Surat</option>
                      <option value="Vadodara">Vadodara</option>
                    </Select>
                  </FormControl>
            
            </Grid>
            <Grid item xs={12} sm={5} md={6} lg={7} justify="center">

            <SearchBar
             
              placeholder="Search for Restaurants or dishes.."
              onChange={handleSearchChange}
            />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  justify="flex-end">

            <div >
              <Paper>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      checked={vegChecked}
                      onChange={handleVegCheckChange}                    
                    />
                  }
                  className={classes.PureVegCheckbox}
                />
                <EcoOutlinedIcon
                  style={{ color: "green", transform: "scaleX(-1)" }}
                />
                <EcoIcon style={{ marginLeft: "-15px", color: "green" }} />
                <b>Pure Veg</b>
              </Paper>
            </div>
            </Grid>
          </Grid>
        </Grid>

      
        {/* <FullWidthTabs></FullWidthTabs> */}

        <Grid
          item
          container
          spacing={10}
          mt={10}
          className={classes.restcontainer}
        >
          <Grid item container xs={12} sm={12} md={12} lg={12} spacing={6} className={classes.alignRestcards}>
            {
              restaurants.length>0
              ?(
                restaurants?.map((rest) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={rest._id} >
                    <div className={classes.cardborder}>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`restaurant/${rest._id}`}
                      >
                        <Card className={classes.card}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image={rest.restaurantImages[0]}
                              title=""
                              onClick={() => handleId(rest)}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2" >
                                {rest.restaurantName}
                              </Typography>
                              <Typography variant="body2" className={classes.cardContent}>
                                {rest.restaurantCategory.join(",")}
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="body2"
                                className={classes.cardContent}
                               
                              >
                                {rest.restaurantDescription}
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="body2"
                                className={classes.cardContent}
                                
                              >
                                {rest.restaurantType}
                              </Typography>
                              <Typography
                                variant="body2"
                                className={classes.cardContent}
                                
                              >
                                {rest?.restaurantLocation?.streetAddress +
                                  "," +
                                  rest?.restaurantLocation?.area +
                                  " ," +
                                  rest?.restaurantLocation?.landmark +
                                  " ," +
                                  rest?.restaurantLocation?.city +
                                  " ," +
                                  rest?.restaurantLocation?.state +
                                  " ," +
                                  rest?.restaurantLocation?.country}
                              </Typography>
                              <Typography>
                                <p className={classes.rating}>
                                  <StarRateIcon />
                                  {parseFloat(rest.rating_avg).toFixed(1)}
                                </p>
                              </Typography>
                            </CardContent>
                          </CardActionArea>
    
                          <CardActions></CardActions>
                        </Card>
                      </Link>
                    </div>
                  </Grid>
                ))
              )
              :<><p className={classes.para}>
              Oops, No Restaurant Found !!!
            </p></>
            }
            
          </Grid>
        </Grid>
      </Container>

      <FooterGrid></FooterGrid>
    </React.Fragment>
  );
}
