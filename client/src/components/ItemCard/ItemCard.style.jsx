
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      flex: "1 0 auto",
    },
    content: {
      textAlign: "center",
      flex: "1 0 auto",
    },
    cover: {
      height: "100",
      width: "30%",
    },
    snackbar: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    rating: {
      backgroundColor: "#48c479",
      color: "white",
      marginLeft: "auto",
      marginRight: "auto",
      width: "max-content",
      paddingRight:"5px"
    },
    addTocart: {
      color: "white",
      backgroundColor: "rgb(23,26,41)",
      width: "20%",
      marginBottom: "3%",
      marginLeft: "auto",
      marginRight: "auto",
      float: "left",
      "&:hover": {
        backgroundColor: "rgb(23,26,41)",
      },
    },
    counter: {
      color: "white",
      backgroundColor: "rgb(23,26,41)",
      width: "auto",
      "&:hover": {
        backgroundColor: "rgb(23,26,41)",
      },
    },
    displayCounters: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));