// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Badge from "@material-ui/core/Badge";

// export let StyledBadge = withStyles((theme) => ({
//   badge: {
//     right: 3,
//     top: 15,
//     border: `2px solid #171a29`,
//     padding: "0 4px",
//   },
// }))(Badge);

// export let useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: "#171a29",
//     height: "70px",
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     color: "white",
//     flexGrow: 1,
//   },
//   navLink: {
//     textDecoration: "none",
//     color: "white",
//   },
//   links: {
//     marginLeft: "100px",
//   },
//   navbarLinks: {
//     marginRight: "2vw",
//     fontSize: "16px",
//     padding: "10px",
//     "&:hover": {
//       color: "#f5d6a4",
//     },
//     iconSection: {
//       //padding: "20px",
//       // width: "60px",
//       //  height: "60px",
//       marginBottom: "20%",
//     },
//   },
//   navbarLinkCard: {
//     marginLeft: "10px",
//   },
// }));



import { makeStyles, withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
export const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 3,
    top: 15,
    border: `2px solid #171a29`,
    padding: "0 4px",
  },
}))(Badge);
export const drawerWidth = 340;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
      marginBottom:"7%"
    // backgroundColor: "#171a29",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#171a29",
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },

  /* MYYYY */
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    color: "white",
    flexGrow: 1,
  },
  navLink: {
    textDecoration: "none",
    color: "white",
  },
  links: {
    marginLeft: "50px",
  },
  navbarLinks: {
    marginRight: "2vw",
    fontSize: "16px",
    padding: "10px",
    "&:hover": {
      color: "#f5d6a4",
    },
    iconSection: {
      marginBottom: "20%",
    },
  },
  navbarLinkCard: {
    marginLeft: "10px",
  },

  navbarstyle: {
    display: "flex",
  },
  hideNavbar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  navbarDrawerLinks: {
    padding: "20px",
    fontSize: "16px",
    "&:hover": {
      color: "#171a29",
    },
  },
  imagesize: {
    objectFit: "cover",
  },
  title: {
    color: "white",
    marginTop: "2%",
    /*  flexGrow: 1, */
  },
}));
