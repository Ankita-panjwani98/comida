import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useStyles } from "./RestaurantInfoCarausal.style";

const RestaurantInfoCarausal = ({ images }) => {
  const classes = useStyles();
  const [currImg, setCurrImg] = useState(0);

  return (
    <>
      {images ? (
        <Box
          className={classes.App}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            className={classes.carausalInner}
            style={{ backgroundImage: `url(${images[currImg]})` }}
          >
            <Box
              className={classes.left}
              flex="5%"
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
              }}
            >
              <ArrowBackIosIcon />
            </Box>
            <Box flex="90%"></Box>
            <Box
              className={classes.right}
              flex="5%"
              height="100%"
              onClick={() => {
                currImg < images.length - 1 && setCurrImg(currImg + 1);
              }}
            >
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
};
export default RestaurantInfoCarausal;
