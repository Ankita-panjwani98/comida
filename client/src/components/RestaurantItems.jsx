import React from "react";


//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import ItemCard from "./ItemCard";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  para: {
    fontSize: "x-large",
    marginLeft: "32%",
  },
  paraSeller: {
    fontSize: "x-large",
    marginLeft: "28%",
  },
});

function RestaurantItems(props) {
  const classes = useStyles();
  const { items } = props;
  console.log("in rest items", items);
  /* const {
    account: { role },
  } = useSelector((state) => state.auth); */

  return (
    <Container>
      <Grid item container direction="" style={{ marginTop: "20px" }}>
              <Grid item xs={12} sm={12} lg={12} />
              
        <Grid item sm={12} md={12} lg={12}>
          <Grid container spacing={2}>
            {items ? (
              items.length > 0 ? (
                items.map((item) => (
                  <Grid
                    item
                    justify="center"
                    xs={12}
                    sm={12}
                    lg={12}
                    md={12}
                    key={item._id}
                  >
                    <ItemCard {...item} />
                  </Grid>
                ))
              ) : (
                <p className={classes.para}>
                  No Items present to order, Come back Later.
                </p>
              )
            ) : null}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={1} />
      </Grid>
    </Container>
  );
}

export default React.memo(RestaurantItems);
