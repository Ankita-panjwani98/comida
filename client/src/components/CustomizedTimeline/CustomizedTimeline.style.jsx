import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
      height: "1000px",
      backgroundColor: "red",
    },
    paper: {
      padding: "6px 16px",
    },
    secondaryTail: {
      backgroundColor: "green",
    },
    orderAccepted: {
      width: "auto",
      backgroundImage: `url(${
        process.env.PUBLIC_URL + `images/orderAccepted.png`
      } )`,
    },
    timeLineItem: {
      height: "150px",
    },
  }));