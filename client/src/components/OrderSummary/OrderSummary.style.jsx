import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: "center",
      marginTop:"2%"
    },
    paper: {
      height: "auto",
      width: "auto",
      padding: "2vw",
    },
    orderBackground: {
      padding: "20px",
    },
    table: {
      minWidth: "auto",
      padding: "10%",
    },
    sectionGrid: {
      margin: "20px",
    },
    centralBorder: {
      borderBottom: "2px solid #171A29",
    },
    hrstyle: {
      borderTop: "2px dashed #2c446e",
      width: "70%",
    
    },
    orderDetailsHeading: {
      textAlign: "center",
      marginBottom: "5%",
      fontWeight: 500,
      fontSize: "3rem",
      color: "#282c3f",
    },
    acceptButton: {
      backgroundColor: "#171a29",
      float: "left",
      width: '100px',
      "&:hover": {
        backgroundColor: "#171a29",
      },
    },

    addRating: {
      fontWeight: "bold",
      fontSize: "20px",
      color: "#171a29",
    },
  }));
  