import { makeStyles} from "@material-ui/core/styles";



export let useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      // backgroundColor: '#171a29',
      color: "#171a29",
  
      "&:hover": {
        // backgroundColor: '#171a29',
        color: "#171a29",
      },
    },
    table: {
      minWidth: "auto",
      padding: "10%",
    },
    tablecontainer: {
      marginTop: "10%",
    },
  
    imageText: {
      marginTop: "2%",
      fontSize: "20px",
      color: "#171a29",
      cursor: "pointer",
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: "left",
      marginTop: "5%",
      color: "black",
      backgroundColor: "white",
      height: "auto",
      borderRadius: "5px",
      // boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
    orderDetails: {
      padding: "3%",
      // marginTop: '%',
      color: "#171a29",
      fontWeight: 600,
      height: "auto",
      borderRadius: "15px",
      backgroundColor: "white",
    },
    orderdiv: {
      marginTop: "10px",
    },
  
    orderDetailsDisplay: {
      padding: "5%",
      marginTop: "4%",
      color: "#171a29",
      fontWeight: 500,
      height: "auto",
      backgroundColor: "white",
      borderRadius: "5px",
      border: "2px solid #171a29",
      textOverflow: "ellipsis",
      // marginTop: "13px",
      overflow: "hidden",
      // boxShadow: "0 10px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  
    acceptButton: {
      backgroundColor: "#171a29",
  
      "&:hover": {
        backgroundColor: "#171a29",
      },
    },
  
    acptbtnDiv: {
      marginTop: "8%",
      float: "right",
    },
  
    confirmBtn: {
      marginTop: "15%",
      width: "100px",
      height: "5vh",
      backgroundColor: "#171a29",
      color: "white",
      "&:hover": {
        backgroundColor: "#171a29",
      },
    },
    deliveryImageDiv: {
      backgroundColor: "",
      textAlign: "center",
      width: "100%",
      height: "auto",
      justifyContent: "center",
    },
  
    imagesize: {
      marginTop: "15%",
      width: "85%",
      borderRadius: "5px",
      "&:hover": {
        transform: "translate3D(0,-7px,0) scale(1.05)",
        transition: "0.7s",
      },
      cursor: "pointer",
    },
  
    paper1: {
      padding: "2vw",
    },
  
    orderDetailsHeading: {
      textAlign: "center",
      marginBottom: "5%",
      fontWeight: 700,
      fontSize: "3rem",
      color: "#282c3f",
    },
    hrstyle: {
      borderTop: "2px dashed #2c446e",
      width: "50%",
    },
    hrabovestatus: {
      borderTop: "2px solid #2c446e",
      width: "100%",
    },
    orderTextlength: {
      textOverflow: "ellipsis",
      // marginTop: "13px",
      overflow: "hidden",
    },
    imageres: {
      justifyContent: "center",
    },
    detailsOrderLength: {
      textOverflow: "ellipsis",
      // marginTop: "13px",
      overflow: "hidden",
      padding: "10px",
    },
    detailsOrderSpace: {
      padding: "10px",
    },
  }));