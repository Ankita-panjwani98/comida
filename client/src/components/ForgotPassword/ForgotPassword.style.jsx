import {makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiInput-underline:after": {
        borderBottomColor: "#171a29",
      },
    },
    textField: {
      marginTop: "2%",
    },
    errorMessage: {
      color: "red",
      fontSize: "12px",
      fontWeight: "strong",
    },
    submitButton: {
      backgroundColor: "#171a29",
      marginTop: "12%",
      "&:hover": {
        backgroundColor: "#171a29",
      },
    },
    checkOtp: {
      backgroundColor: "#171a29",
      marginTop: "5%",
      "&:hover": {
        backgroundColor: "#171a29",
      },
    },
    paper: {
      height: "auto",
      width: "auto",
      padding: "2vw",
    },
    container: {
      marginTop: "2%",
    },
  }));
  