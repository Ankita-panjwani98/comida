import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Container from "@material-ui/core/Container";
import { useStyles } from "./Footer.style";
import { Link } from "react-router-dom";

export default function FooterGrid() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4} md={4} lg={4}>
            <Paper className={classes.paper}>
              <h4>Cities With Foodizz</h4>
              <div>
                <div>Anand</div>
                <div>Gandhinagar</div>
                <div>Vadodara</div>
                <div>Godhra</div>
                <div>Ahmedabad</div>
                <div>Surat</div>
                <div>Ankleshwar</div>
                <div>Bharuch</div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Paper className={classes.paper}>
              <h4>Company </h4>

              <div>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/aboutus `}
                >
                  {" "}
                  <div>About Comida</div>
                </Link>
                <div>Team</div>
                <div>Read Our Blog</div>
                <div>Terms and Conditions</div>
                <div>Privacy</div>
                <div>Security</div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Paper className={classes.paper}>
              <h4>Contact Us</h4>
              <div>
                <div>Help and Support</div>
                <div>Partner With Us</div>
                <div>Code of Conduct</div>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <hr className={classes.hr} />
          <Grid item xs={4} md={4} lg={4}>
            <Paper className={classes.grid2}>
              <div>
                <h4>
                  Comida
                  <img
                    width="80"
                    height="80"
                    src="https://img.pngio.com/sandwich-bread-food-free-vector-graphic-on-pixabay-food-animated-png-781_720.png"
                  />
                </h4>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Paper className={classes.grid2}>
              <div>
                <h4>&copy; 2021 FOODIZ</h4>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Paper className={classes.grid2}>
              <h4 className="p-3">
                <FacebookIcon />
                <PinterestIcon />
                <InstagramIcon />
                <TwitterIcon />
              </h4>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
