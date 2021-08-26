import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    rootHome: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 860,
  
    },
    rootItems: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "60%",
      backgroundColor:"#ffffff",
      boxShadow: "0 10px 20px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.22)",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: "1 auto",
      width:'100%',
      color:'#171a29',
      fontWeight:'bold',
      position: "relative",
    },
    results: {
      position: "absolute",
      bottom: -166,
      left: "26%",
      zIndex: 999,
      width: 760,
      height: "15%",
    },
    iconButton: {
      padding: 10,
      height: '2rem',
      width:'2rem'
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));