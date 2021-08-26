import { makeStyles} from "@material-ui/core/styles";




export let useStyles = makeStyles((theme) => ({
    root: {
      // marginTop: "3%",
      //  padding: "2%",
      height: "auto",
      // backgroundColor: "#d8dee8",
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: "#dae2f0",
      height: "auto",
      backgroundColor: "#ffffff",
    },
    tabs: { 
      backgroundColor: "#2c446e",
    },
    tabtext: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#171a29",
    },
    labelContainer: {
      width: "auto",
      padding: 2,
    },
    iconLabelWrapper: {
      flexDirection: "row",
    },
  
    tabposition: {
      padding: "20%",
    },
  }));