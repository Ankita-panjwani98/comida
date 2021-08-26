
import { makeStyles} from "@material-ui/core/styles";



export let useStyles = makeStyles((theme) => ({
    root: {
      //   margin: '2%',
      padding: "3%",
  
      // backgroundColor: "#37718e",
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      // border: "1px solid #171a29",
      color: "#171a29",
      height: "auto",
      width: "",
      backgroundColor: "#ffffff",
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  
    formfields: {
      color: "#171a29",
      // backgroundColor: 'white'
    },
    avatarImage: {
      fontSize: "20%",
      width: "10vw",
      height: "20vh",
      marginLeft: "auto",
      marginRight: "auto",
    },
    details: {
      fontSize: "20px",
      // padding: "3%",
      // margin: '2%',
      textAlign: "center",
      // marginTop: "5%",
      color: "#37718e",
    },
    detailedText: {
      marginTop: "5%",
      fontFamily: "font-family: Noto Sans HK, sans-serif",
    },
    fields: {
      fontSize: "18px",
      lineHeight: "2.5rem",
      color: "#37718e",
    },
    editicon: {
      display: "flex",
      cursor: "pointer",
    },
    edit: {
      fontSize: "35px",
      color: "#37718e",
    },
    editHeading: {
      textAlign: "center",
      fontSize: "20px",
    },
  }));
  