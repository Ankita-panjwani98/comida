import { Checkbox } from "@material-ui/core";
import { makeStyles, withStyles,fade } from "@material-ui/core/styles";

export let GreenCheckbox = withStyles({
    root: {
      color: "#171a29",
      "&$checked": {
        color: "#171a29",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
 export let useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#2c446e",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    para: {
      fontSize: "x-large",
      marginLeft: "32%",
    },
    image: {
      width: "80%",
      paddingTop: "5%",
    },
    p: {
      fontSize: "1rem",
      fontWeight: 100,
    },
    hero: {
      margin: 0,
      backgroundImage: `url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80')`,
      backgroundRepeat: "no-repeat",
      height: "60vh",
      flexWrap: "wrap",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      display: "flex",
      flexDirection: "col",
  
      width: "100%",
  
      alignItems: "center",
      justifyContent: "center",
    },
    search: {
      marginTop: "5vh",
      position: "relative",
      // borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
  
      paddingLeft: "2%",
      paddingRight: "2%",
      [theme.breakpoints.up("sm")]: {
        // marginLeft: theme.spacing(1),
        width: "100vh",
        height: "7vh",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 120),
      height: "100%",
      width: "100",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: "white",
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  
    foodsContainer: {
      marginTop: "6%",
    },
    restPagetitle: {
      fontWeight: 700,
      fontSize: "4rem",
      textAlign: "center",
  
      // paddingBottom: theme.spacing,
      color: "#282c3f",
    },
    card: {
     
      borderRadius: "5px",
      maxwidth: "100%",
      height: '53vh',
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      "&:hover": {
        transform: "translate3D(0,-7px,0) scale(1.05)",
        transition: "0.7s",
      },
    },
  
    restcontainer: {
      marginTop: "5%",
    },
  
    media: {
      height: 200,
    },
    searchbar: {
      marginTop: "5%",
      // marginBottom: '5%',
      height: "7vh",
      width: "auto",
  
      backgroundColor: "#ffffff",
      "&:hover": {
        backgroundColor: "#ffffff",
      },
      color: "white",
    },
    inputRoot: {
      color: "black",
    },
    inputInput: {
      padding: theme.spacing(1, 0, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "50ch",
        "&:focus": {
          width: "10ch",
        },
      },
    },
  
    rating: {
      marginTop: "5%",
      width: "60px",
      backgroundColor: "#48c479",
      color: "white",
    },
    searchAlign: {
      display: "flex",
      flexDirection: "row",
      // justifyContent: '',
      marginLeft: "5%",
    },
    statusSelect: {
      marginTop: "2%",
      marginRight: "2%",
      float: "left",
    },
    hrstyle: {
      // justifyContent: 'center',
      width: "70%",
      borderTop: "2px dashed #2c446e",
    },
    filterItemsAlign:{
      marginTop: '5%'
    },
    alignRestcards:{
      justifyContent: 'center'
    },
    checkboxstyle:{
      width: '5%'
    },
    cardContent:{
      fontWeight: 400 ,
      color: '#4a4b52',
      fontSize: '13px'
    }
   
  }));