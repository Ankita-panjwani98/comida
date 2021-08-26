import { makeStyles} from "@material-ui/core/styles";





export let useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // marginTop: '2%'
      // backgroundColor: "#2c446e",
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
    formselect: {
      color: "#171a29",
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
      borderRadius: "10px",
      width: "100%",
      // boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      "&:hover":{
        border: '2px solid #171a29'
      }
    },
  
  
    orderDetails: {
      padding: "4%",
      color: "#171a29",
      fontWeight: 500,
      height: "250px",
      borderRadius: "5px",
      backgroundColor: "white",
    },
    orderdiv: {
      marginTop: "10px",
    },
    orderdivDetail: {
      textOverflow: "ellipsis",
      marginTop: "13px",
      overflow: "hidden",
    },
  
   
  
    acceptButton: {
      backgroundColor: "#171a29",
      marginTop: "7%",
  
      "&:hover": {
        backgroundColor: "#171a29",
      },
    },
  
    acptbtnDiv: {
      marginTop: "8%",
      float: "right",
    },
    statusSelect: {
      marginTop: "10%",
      float: "left",
    },
    confirmBtn: {
      marginTop: "15%",
      width: "150px",
      height: "5vh",
      backgroundColor: "#171a29",
      color: "white",
      "&:hover": {
        backgroundColor: "#171a29",
      },
    },
    deliveryImageDiv: {
      backgroundColor: "white",
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
    imageres: {
      justifyContent: "center",
    },
    paper1: {
      padding: "2vw",
    },
    orderHeading:{
      // textAlign: 'center',
      marginTop: '7%',
    justifyContent: 'center',
      fontWeight: 700,
      fontSize: "4rem",
      color: "#282c3f",
    },
    hrstyle: {
      // justifyContent: 'center',
      borderTop: "2px dashed #2c446e",
    },
  }));