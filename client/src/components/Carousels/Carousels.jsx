import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Box from "@material-ui/core/Box";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import StarRateIcon from "@material-ui/icons/StarRate";
import axios from "axios";
import { Link } from "react-router-dom";
import { cardstyle, mediastyle, carddiv, rating, heading,rate } from './Carousels.style';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1580, itemsToShow: 4 },
];
 
function Carousels() {

  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    (async function () {
  
      const res = await axios.get(
        "http://localhost:5000/restaurant/gettoprestaurants"
      );

      setRestaurants(res.data);
    })();
  }, []);

  return (
    <>
      <div>
        <Typography style={heading}>
          Comida's Top 
         
          Rated Restaurants
        </Typography>
      </div>
      <div>
        <Carousel breakPoints={breakPoints}>
          {restaurants.map((rest) => (
            <Box key={rest._id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/restaurant/${rest._id}`}
              >
                <Card style={cardstyle}>
                  <CardActionArea>
                    <CardMedia
                      style={mediastyle}
                      image={rest.restaurantImages[0]}
                      title=""
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {rest.restaurantName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {rest?.restaurantCategory.join(", ")}
                        <span>Rs.{rest.price} for Two</span>
                      </Typography>

                      <Typography>
                        <p style={rating}>
                          <StarRateIcon /> {parseFloat(rest.rating_avg).toFixed(1)}
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Box>
          ))}
        </Carousel>
    
    
      </div>
    </>
  );
}

export default Carousels;
