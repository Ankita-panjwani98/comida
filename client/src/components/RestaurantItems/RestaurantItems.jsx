import React from "react";

//material-ui
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard/ItemCard";
import Container from "@material-ui/core/Container";
import { useStyles } from './RestaurantItems.style';

function RestaurantItems(props) {
  const classes = useStyles();
  const { items, restaurantId, customProps } = props;

  return (
    <Container>
      <Grid item container style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={12} lg={12} />

        <Grid item sm={12} md={12} lg={12}>
          <Grid container spacing={2}>
            {items ? (
              items?.length > 0 ? (
                items?.map((item) => (
                  <Grid item xs={12} sm={12} lg={12} md={12} key={item._id}>
                    <ItemCard
                      customProps={customProps}
                      restaurantId={restaurantId}
                      {...item}
                    />
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

export default RestaurantItems;
