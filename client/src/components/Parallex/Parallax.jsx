import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import M from "materialize-css";
import Typography from "@material-ui/core/Typography";
import { useStyles } from './Parallax.style';

const Parallax = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".parallax");
    M.Parallax.init(elements);
  }, []);

  const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
    <div className="parallax-container mt-5">
      {/*   <Typography className={classes.quotetext}>Every meal matters</Typography> */}
      {/* <Typography gutterBottom variant="h3" className={classes.quotetext} style={{ textAlign: "center" }}>
        Why starve when you have us&nbsp;&nbsp;
        <span role="img" aria-label="fries" style={{ fontSize: 40 }}>
          🍟
        </span>
      </Typography> */}
      <div className="parallax">
        <img
          width="auto"
          height="auto"
          src="https://curtisgallon.com/wp-content/uploads/2017/05/top-shot-honey-plate.jpg"
          alt="parallax images"
        />
      </div>
      {/*  <div className="section white"></div> */}
    </div>
    // </ThemeProvider>
  );
};

export default Parallax;
