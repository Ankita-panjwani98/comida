
import { makeStyles } from "@material-ui/core/styles";

export let useStyles = makeStyles(theme => ({
    root: {
      //   margin: '2%',
      padding: "3%",
      height: "100%",
      // backgroundColor: '#37718e',
      flexGrow: 1
    },
  
    paper: {
      padding: theme.spacing(7),
      textAlign: "left",
      // border: '1px solid #171a29',
      color: "black",
      height: "100%",
      // boxShadow: "0 14px 28px rgb(89, 130, 150), 0 10px 10px rgb(89, 130, 150)",
      backgroundColor: "#ffffff"
    },
    paper1: {
      padding: theme.spacing(2),
      backgroundColor: "#ffffff",
      margin: "2%",
      color: "black",
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    },
    pastorders: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginLeft: 0,
      paddingLeft: theme.spacing(1),
      alignItems: "center"
    },
  
    image: {
      borderRadius: "5px",
      width: "80%",
      height: "160px"
    },
    cardtitle: {
      fontWeight: 400,
      fontSize: "2rem",
      textAlign: "center",
  
      // paddingBottom: theme.spacing,
      color: "#282c3f"
    },
    orderdetails: {
      color: "#2c446e",
      fontWeight: "100",
      width: "65%",
      marginTop: '5%'
    },
    media: {
      height: 200
    },
    pastImage: {
      borderRadius: "10px",
      border: "2px solid white",
      width: "40%",
      margin: "2%"
    },
    card: {
      border: "2px solid white",
      maxwidth: "80%"
      /*  "&$selected": {
        backgroundColor: "white !important"
      } */
    },
   
    pastordertext: {
      color: "#2c446e",
      fontSize: "30px",
      fontWeight: "200"
    },
    hrcolor: {
      // backgroundColor: "#2c446e",
      borderTop: "1px dashed #2c446e"
    },
    detailsBtn:{
      float: 'right',
      backgroundColor: '#2c446e',
      width: '150px',
      color: 'white',
      borderRadius: '5px'
    },
  
    loaditems: {
      height: "100px"
    }
  }));