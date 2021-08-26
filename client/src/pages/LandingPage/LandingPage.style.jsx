import { makeStyles,fade } from "@material-ui/core/styles";
import {  createMuiTheme } from "@material-ui/core/styles";

export let useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    body: {
      margin: 0,
      padding: 0,
    },
    // rating:{
    //   marginTop: '5%',
    //   width: '60px',
    //   backgroundColor: '#48c479',
    //   color: 'white'
    // },
    image: {
      width: "80%",
      paddingTop: "5%",
    },
    p: {
      fontSize: "1rem",
      fontWeight: 100,
    },
    hero: {
      margin: 0,
      // backgroundImage: `url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      // justifyContent: "center"
    },
    foodtext: {
      float: "right",
    },
    search: {
      marginTop: "5vh",
      position: "relative",
      // borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
  
      paddingLeft: "2%",
      paddingRight: "2%",
      [theme.breakpoints.up("sm")]: {
        // marginLeft: theme.spacing(1),
        width: "100vh",
        height: "7vh",
      },
    },
  
    title: {
      color: "white",
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    SignupLogin: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      backgroundRepeat: "no-repeat",
      height: "60vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      backgroundImage: `url(${
        process.env.PUBLIC_URL + `images/foodimage.jfif`
      } )`,
    },
    quote: {
      alignItems: "center",
      justifyContent: "center",
      position:"absolute",
      top:'50%',
      right:'10%'

    },
    logintext: {
      float: "right",
      marginTop: 0,
      fontSize: "20px",
      //padding: "20px",
    },
    spaceText: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    signUpText: {
      paddingRight: "20px",
      cursor: "pointer",
    },
  
    foodsContainer: {
      paddingTop: theme.spacing(3),
      marginBottom: '7%'
    },
    cardtitle: {
      fontWeight: 700,
      fontSize: "4rem",
      textAlign: "center",
      color: "#282c3f",
    },
    card: {
      // border: "2px solid white",
      borderRadius: "16px",
      maxwidth: "100%",
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      "&:hover": {
        transform: "translate3D(0,-7px,0) scale(1.05)",
        transition: "0.4s",
        transitionTimingFunction: "ease-in-out",
      },
    },
    restcontainer: {
      marginTop: "5%",
    },
  
    media: {
      height: 200,
    },
  
    inputRoot: {
      color: "black",
    },
    inputInput: {
      padding: theme.spacing(1, 0, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "50ch",
        "&:focus": {
          width: "10ch",
        },
      },
    },
    loggedInUser: {
      marginRight: "20px",
    },
    navbarLinks: {
      fontSize: "20px",
      marginTop: "5%",
      marginRight: "1vw",
      "&:hover": {
        color: "#171A29",
      },
    },

    cardsalign:{
      justifyContent: 'center'
    }
  }));
  