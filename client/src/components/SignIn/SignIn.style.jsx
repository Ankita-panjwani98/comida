
import { makeStyles } from '@material-ui/core/styles';
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
    errorMessageAuth: {
      color: "red",
      fontSize: "16px",
      fontWeight: "strong",
      textAlign: "center",
    },
    submitButton: {
      backgroundColor: "#171a29",
      marginTop: "12%",
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
    foodie: {
      marginTop: "2%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    forgetpassword: {
      cursor: "pointer",
      marginLeft: "2px",
    },
    wantToregister: {
      float: "right",
    },
  }));