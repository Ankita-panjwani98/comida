/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Drawer,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import axios from "axios";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useStyles } from './DrawerForm.style';



const DrawerExample = (props) => {
  const classes = useStyles();
  const { open, close, onSubmitData } = props;
  const [data, setData] = useState({});
  let initalSplit;
  let newSplitValue;

  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        getUserAddressByLatitudeAndLongitude(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      function (error) {
        alert("The Locator was denied, Please add your address manually");
      }
    );
  };
  // Splits and joins the first two street address with hypen
  function getinitalSplit(formattedAddress) {
    initalSplit = formattedAddress.split(",");
    for (let i = 0; i < initalSplit.length; i++) {
      if (i == 0) {
        newSplitValue = initalSplit[i];
      }
      if (i == 1) {
        newSplitValue = `${newSplitValue}-${initalSplit[i]}`;
      }
      if (i == 2) {
        newSplitValue = `${newSplitValue},${initalSplit[i]}`;
      }
      if (i == 4) {
        newSplitValue = `${newSplitValue},${initalSplit[i]}`;
      }
    }
    // Split Logic
    const splitData = newSplitValue.split(",");
    return splitData;
  }
  // fetches the latitude and longitude
  const getUserAddressByLatitudeAndLongitude = (latitude, longitude) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((result) => {
        const address_components = result.data.results[0].address_components.map(
          (name) => {
            return name.long_name;
          }
        );
        // sets the state data for fields
        setData((data) => ({
          ...data,
          city: address_components[0],
          state: address_components[1],
          country: address_components[2],
          zip: parseInt(address_components[3]),
        }));
        if (result.data.results[0].formatted_address === "")
          localStorage.removeItem("location");
        else
          localStorage.setItem(
            "location",
            result.data.results[0].formatted_address
          );
        const res = getinitalSplit(result.data.results[0].formatted_address);
        // sets the landmark,Area,StreetAddress in the state
        setData((data) => ({
          ...data,
          streetAddress: res[0],
          landmark: res[1],
          area: res[2],
        }));
      })
      .catch((err) => {
      });
  };
  const handleInputChange = (event) => {
    event.persist();
    const key = event.target.name;
    const value = event.target.value;
    setData((inputs) => ({
      ...inputs,
      [key]: value,
    }));
  };
  return (
    <>
      <Drawer
        open={open}
        onClose={close}
        anchor="left"
        transitionDuration={{ enter: 1000, exit: 30000 }}
      >
       
        <div className={classes.address}>
          <form onSubmit={() => onSubmitData(data, event)}>
            <Typography
              variant="body2"
              component="p"
              className={classes.addressTitle}
              style={{ margin: "10px 10px 2px 10px" }}
            >
              Address:
            </Typography>
            <br />
            <TextField
              id="street"
              name="streetAddress"
              placeholder="Street"
              value={data.streetAddress}
              className={classes.textField}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              id="landmark"
              name="landmark"
              placeholder="landmark"
              className={classes.textField}
              onChange={handleInputChange}
              value={data.landmark}
              fullWidth
              required
            />
            <TextField
              id="area"
              name="area"
              placeholder="Area"
              className={classes.textField}
              onChange={handleInputChange}
              value={data.area}
              fullWidth
              required
            />
            <br />
            <TextField
              id="city"
              name="city"
              placeholder="City"
              className={classes.textField}
              onChange={handleInputChange}
              value={data.city}
              fullWidth
              required
            />{" "}
            <br />
            <TextField
              id="zipCode"
              name="zip"
              placeholder="Zip Code"
              className={classes.textField}
              onChange={handleInputChange}
              type="number"
              value={parseInt(data.zip)}
              fullWidth
              required
            />
            <br />
            <TextField
              id="state"
              name="state"
              placeholder="State"
              className={classes.textField}
              onChange={handleInputChange}
              value={data.state}
              type="text"
              fullWidth
              required
            />
            <br />
            <TextField
              id="country"
              name="country"
              placeholder="Country"
              className={classes.textField}
              onChange={handleInputChange}
              value={data.country}
              fullWidth
              required
            />
            <br />
            <Button variant="contained" className={classes.geoLocationIcon}>
              {" "}
              <MyLocationIcon onClick={getCurrentLocation} />
            </Button>
            <Button
              className={classes.addTocart}
              variant="contained"
              type="submit"
            >
              submit
            </Button>{" "}
          </form>
        </div>
      </Drawer>
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: `"${process.env.REACT_APP_GOOGLE_API_KEY}"`,
})(DrawerExample);



