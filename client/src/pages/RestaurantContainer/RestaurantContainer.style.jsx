import  Checkbox  from "@material-ui/core/Checkbox";
import { makeStyles,withStyles } from "@material-ui/core/styles";




export let GreenCheckbox = withStyles({
  root: {
    color: "#171a29",
    "&$checked": {
      color: "#171a29",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export let useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 12,
    width: "100%",
    backgroundColor: "#f5f2da",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  restBack: {
    // marginTop: "3%",
    height: "40vh",
    width: "100%",
    backgroundColor: "#171a29",
    marginTop: "-2%",
  },
  imgContainer: {
    //marginTop: "20px",
    width: "97%",
    height: "100%",
  },
  control: {
    padding: theme.spacing(),
  },
  restDetails: {
    marginLeft: "70px",
    color: "black",
    marginBottom: "2%",
  },
  restDetailRating: {
    paddingRight: "8px",
    //border: "1px solid black",
    marginTop: "1rem",
  },
  restDetailRatingDiv: {
    marginRight: "1.5rem",
    paddingRight: "1rem",
    paddingTop: "1rem",
  },
  typographyDetails: {
    letterSpacing: "1px",
    fontFamily: "ProximaNova,Arial,Helvetica Neue,sans-serif",
    paddingTop: "5px",
    lineHeight: "1.2",
  },
  random: {
    width: "200px",
    height: "200px",
  },
  orderbox: {
    marginTop: "5%",
    marginBottom: "5%",
    height: "auto ",
    backgroundColor: "white",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  grid1: {
    backgroundColor: "#171a29",
    color: "white",
  },
  grid2: {
    backgroundColor: "white",
    color: "#171a29",
  },
  checkBoxStyle: {
    marginRight: "30px",

    float: "right",
  },
  rating: {
    marginTop: "5%",
    width: "60px",
    backgroundColor: "#48c479",
    color: "white",
  },
  vegSection: {
    width: "auto",
    // height: "40px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.22)",
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
  addRatingBtn: {
    color: "#171a29",
    fontWeight: "bold",
    cursor: "pointer",
  },
  ecoOutlinedIcon: {
    marginLeft: "0",
  },
}));
