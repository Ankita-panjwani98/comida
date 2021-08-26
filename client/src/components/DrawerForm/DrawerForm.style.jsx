import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  address: {
    // border: "1px solid grey",
    marginLeft: "50px",
    marginTop: "10%",
    // width: "40vw",
    "& > *": {
      width: "40vw",
    },
  },
  textField: {
    margin: "2%",
    width: "25vw",
  },
  addTocart: {
    color: "white",
    backgroundColor: "rgb(23,26,41)",
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3%",
    marginTop: "2%",
    float: "left",
    "&:hover": {
      backgroundColor: "rgb(23,26,41)",
    },
  },
  addressTitle: {
    fontSize: "25px",
    marginBottom: "12px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  mapStyles: {
    width: "50%",
    height: "50%",
  },
  geoLocationIcon: {
    marginTop: "12px",
    marginLeft: "25%",
    //float:"right"
  },
  geoMap: {
    width: "50px",
    height: "50px",
  },
}));
