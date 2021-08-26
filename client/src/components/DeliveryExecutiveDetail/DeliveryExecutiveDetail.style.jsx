import { makeStyles } from "@material-ui/core/styles";

/* styles */
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
    //margin: "2%",
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
    marginTop: "12%",
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
  deliveryManDetails: {
    marginTop: "5%",
    textAlign: "left",
  },
  editHeading: {
    textAlign: "center",
  },
  addRating: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#171a29",
  },
  ratingDialog: {
    padding: "20px",
  },
}));
