import React, { useState,useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Button, Grid, Card, Slide } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import FooterGrid from "../../components/Footer/Footer";
import "materialize-css/dist/css/materialize.min.css";
import Parallax from "../../components/Parallex/Parallax";
import Carousel from '../../components/Carousels/Carousels';
import StarRateIcon from "@material-ui/icons/StarRate";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Dialog, DialogContent } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { decodeToken } from "../../services/authUser";
import { logout } from "../../services/authUser";
import { fetchUserDetails } from "../../services/UserService";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { useStyles } from './LandingPage.style';

const handleId = (rest) => {
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Oi", "cursive"].join(","),
  },
});

export default function LandingPage(props) {
  const classes = useStyles();
  const [userName, setuserName] = useState();
  const token = localStorage.getItem("token");

  const headers = {
    // "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  let authenticated = "";
  if (token) {
    authenticated = decodeToken(token);
  } else {
    <Redirect to="/"></Redirect>;
  }

  const handleLogout = () => {
    logout();
  };
  useEffect(()=>{
    (async function(){
      if(authenticated){
        setuserName(authenticated.email.split('@')[0]);
      }
    })()
  })
  let finalres;
  // async function fetchUserData() {
  //   let userDetail = await fetchUserDetails();
  //   setuserName(userDetail.firstName);
  //   return finalres;
  // }
  // fetchUserData();

  return (
    <ThemeProvider theme={theme}>
      <div>

        
        <Grid item container xs={12} sm={12} md={12} lg={12}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className={classes.SignupLogin}>

              <div className={classes.logintext}>
                <div className={classes.spaceText}>
                  {authenticated ? (
                    <>
                    
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/profile`}
                      >
                        <div className={classes.navbarLinks}>
                          <AccountCircleOutlinedIcon
                            style={{ marginBottom: "3px" }}
                          />
                          {userName}
                        </div>
                      </Link>

                   
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/`}
                      >
                        <div
                          color="inherit"
                          className={classes.navbarLinks}
                          onClick={handleLogout}
                        >
                          <ExitToAppIcon style={{ marginRight: "5px" }} />
                          Sign Out
                        </div>
                      </Link>
                    </>
                  ) : (
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/login"
                    >
                      <Button className={classes.signUpText}>
                        <PersonIcon /> SignIn
                      </Button>
                    </Link>
                  )}

                  
                </div>
              </div>
             
             
             
              <div className={classes.quote}>
                <Typography variant="h1">COMIDA</Typography>
                <Typography variant="h4"><i>Your Hunger Destiny</i></Typography>
              </div>
            
            
            </div>
          </Grid>
        </Grid>

        
        
        
        
        
        <Container maxWidth="lg" className={classes.foodsContainer}>
          <Grid
            item
            container
            spacing={10}
            mt={10}
            className={classes.restcontainer}
          >
            <Grid item container xs={12} sm={12} md={12} lg={12} spacing={3} className={classes.cardsalign}>


              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Link style={{ textDecoration: "none" }} to="/allrestaurants">
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1583096114844-06ce5a5f2171?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        title="Contemplative Reptile"
                      />

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Order Food Online
                        </Typography>

                        <Typography variant="body2" color="textSecondary">
                          Stay at home and order to your doorstep
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4}>
              <Link style={{ textDecoration: "none" }} to="/allrestaurants">
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Grab some amazing food
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Enjoy limitless dining privileges
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Link>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4}>
              <Link style={{ textDecoration: "none" }} to="/allrestaurants">
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      Good food and great vibes
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                      Your happy place
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Parallax></Parallax>
        <Carousel></Carousel>
        <FooterGrid></FooterGrid>
      </div>
    </ThemeProvider>
  );
}
