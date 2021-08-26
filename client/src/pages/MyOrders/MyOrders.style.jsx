import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "2%",
      //margin: "2%",
      // backgroundColor:'#e4e3ff'
    },
    paper: {
      padding: theme.spacing(4),
      width: "100%",
      margin: "2%",
      "&:hover":{
        border: '2px solid #171a29'
      }
    },
    acceptButton: {
      backgroundColor: "#171a29",
      float: "right",
      "&:hover": {
        backgroundColor: "#171a29",
      },
    },
    restaurantTitle: {
      marginTop: "2%",
      fontSize: "18px",
    },
    rating: {
      marginTop: "5%",
      width: "60px",
      backgroundColor: "#48c479",
      color: "white",
    },
    imgContainer: {
      width: "100%",
      height: "100%",
    },
    restImage: {
      width: "90%",
      height: "90%",
    },
    orderHeading:{
      // textAlign: 'center',
      marginTop: '2%',
    justifyContent: 'center',
      fontWeight: 500,
      fontSize: "4rem",
      color: "#282c3f",
    },
    hrstyle: {
      // justifyContent: 'center',
      borderTop: "2px dashed #2c446e",
    },
  }));