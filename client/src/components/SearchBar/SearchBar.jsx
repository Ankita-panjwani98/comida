import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import LocationOn from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import  Grid  from '@material-ui/core/Grid';
import { useStyles } from "./SearchBar.style";

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  const page = props.page;
  const handleSearch = (event) => {
    const val = event.target.value
    setSearch(val)
    props.handleSearch(search);
  };

  return (
    <Paper
      component="form"
      className={page !== "items" ? classes.rootHome : classes.rootItems}
    >
      <Grid item container xs={12} sm={12}
      lg={12}
      md={12} >
        <InputBase
            className={classes.input}
            value={search}
          placeholder="Search Items"
          onChange={handleSearch}
          inputProps={{ "aria-label": "search for items" }}
          endAdornment={<SearchIcon />}
        />
        </Grid>
    </Paper>
  );
}
