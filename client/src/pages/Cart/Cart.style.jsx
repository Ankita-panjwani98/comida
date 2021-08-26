import { makeStyles } from "@material-ui/core/styles";
export let useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2%",
  },
  paper: {
    padding: theme.spacing(4),
    border: "1px solid rgb(23,26,41)",
  },
  paperAddress: {
    padding: theme.spacing(4),
    border: "1px solid rgb(23,26,41)",
    // background:'#f5f5ff'
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
  addTocart: {
    color: "white",
    backgroundColor: "rgb(23,26,41)",
    width: "30%",
    marginLeft: "20%",
    marginBottom: "3%",
    float: "left",
    "&:hover": {
      backgroundColor: "rgb(23,26,41)",
    },
  },
  counter: {
    color: "rgb(23,26,41)",
    textAlign: "center",
    width: "30%",
    // border: "1px solid rgb(23,26,41)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#fafafa",
    },
  },
  quantity: {
    width: "40%",
    textAlign: "center",
    // borderRight: "1px solid rgb(23,26,41)",
  },
  displayCounters: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5%",
    display: "flex",
    width: "6vw",
    flexDirection: "row",
    //  border: "1px solid rgb(23,26,41)",
  },
  cardstyle: {
    //  height: "30vh",
    display: "flex",
    direction: "row",
    marginBottom: "20px",
  },
  addressContainer: {
    border: "1px dashed grey",
    height: "auto",
    backgroundColor: "",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },
  locationIconContainer: {
    backgroundColor: "white",
    marginTop: "5vh",
    //  marginBottom: "auto",
    // padding: '20px',
    textAlign: "center",
  },
  locationIcon: {
    width: "40%",
    height: "40%",
    color: "",
  },
  addAddressButtonContainer: {
    // backgroundColor: 'red',
    padding: "2vh",
    textAlign: "center",
  },
  addAddressButton: {
    color: "rgb(23,26,41)",
    fontWeight: "bold",
    border: "1px solid rgb(23,26,41)",
  },
  address: {
    textAlign: "center",
    fontColor: "grey",
  },
  addressDisplay: {
    marginTop: "20px",
    fontColor: "rgb(23,26,41)",
    fontWeight: "bold",
    display: "block",
  },
}));
