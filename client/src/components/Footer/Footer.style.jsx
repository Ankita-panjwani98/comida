
import { makeStyles} from "@material-ui/core/styles";


export let useStyles = makeStyles(theme => ({
    root: {
      padding: "1%",
      backgroundColor: "#171a29",
      flexGrow: 1,
      bottom: 0,
      marginTop: "10%"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      border: "1px solid #171a29",
      color: "white",
      height: "350px",
      backgroundColor: "#171a29"
    },
    grid2: {
      padding: theme.spacing(2),
      marginTop: 0,
      textAlign: "left",
      color: "white",
      height: "250px",
      backgroundColor: "#171a29"
    },
    hr: {
      backgroundColor: "white"
    }
  }));
  