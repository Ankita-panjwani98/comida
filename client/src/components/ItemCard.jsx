import React, {
  useState,
} from "react"; /* 
 import { useDispatch, useSelector } from "react-redux"; */
import { Link } from "react-router-dom";

//m-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Box } from "@material-ui/core";

// Icons
/* import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

//custom-hook
import useForm from "../hooks/forms";

import MyButton from "../util/MyButton";
import { deleteItem, editItem } from "../redux/actions/dataActions";
import ItemDialog from "../components/ItemDialog"; */
/* import { addToCart } from "../redux/actions/dataActions"; */

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
  },
  content: {
    textAlign: "center",
    flex: "1 0 auto",
  },
  cover: {
    height: "100",
    width: "30%",
  },
  snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  addTocart: {
    color: "white",
    backgroundColor: "rgb(23,26,41)",
    width: "20%",
    marginBottom: "3%",
    marginLeft: "auto",
    marginRight: "auto",
    float: "left",
    "&:hover": {
      backgroundColor: "rgb(23,26,41)",
    },
  },
  counter: {
    color: "white",
    backgroundColor: "rgb(23,26,41)",
    width: "auto",
    "&:hover": {
      backgroundColor: "rgb(23,26,41)",
    },
  },
  displayCounters: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={10} variant="filled" {...props} />;
}

export default function ItemCard(props) {
  const classes = useStyles();
  const { title, imageUrl, description, price, _id } = props;

  /* const imageUrlSplit = imageUrl.split("\\");
  const finalImageUrl = `${process.env.REACT_APP_SERVER_URL}/${imageUrlSplit[0]}/${imageUrlSplit[1]}`; //3002 - server port

  const dispatch = useDispatch();
 */

  // const authenticated = true;
  /* const {
    authenticated,
    account: { role },
  } = useSelector((state) => state.auth); */
  //const { addCartSuccess } = useSelector((state) => state.data);

  //const [open, setOpen] = useState(false);

  const [openSnackBar, setSnackBar] = useState(false); //open close snack bar

  const handleCart = () => {
    const itemData = {
      itemId: _id,
    };

    setSnackBar(true);

    //dispatch(addToCart(itemData));
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      setSnackBar(false);
      return;
    }
    setSnackBar(false);
  };

  const handleSnackBar = () => {
    /*   if (addCartSuccess || addCartSuccess == null) */
    //setSnackBar({ open: true });
  };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" noWrap>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rs.{price}
            </Typography>
          </CardContent>

          {/*  <Box display="flex" flexDirection="row"> */}
          <Button
            className={classes.addTocart}
            variant="contained"
            onClick={() => {
              handleCart();
              handleSnackBar({ vertical: "bottom", horizontal: "right" });
            }}
          >
            Add to Cart
          </Button>

          {/*  <div className={classes.displayCounters}>
              <Button className={classes.counter} onClick={handleIncrement}>
                +
              </Button>
              <Button>{quantity}</Button>
              <Button className={classes.counter} onClick={handleDecrement}>
                -
              </Button>
            </div> */}
          {/*    </Box> */}
        </div>
        <CardMedia
          justify="flex-end"
          className={classes.cover}
          image={imageUrl}
          title="Item order"
        />
      </Card>

      <div className={classes.snackbar}>
        <Snackbar
          open={openSnackBar}
          autoHideDuration={3600}
          onClose={handleCloseSnackBar}
        >
          <Alert
            onClose={handleCloseSnackBar}
            style={{ backgroundColor: "#157a21", width:'250px' }}
          >
            Item added to cart!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
