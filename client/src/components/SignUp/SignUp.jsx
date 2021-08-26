import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Paper,
  Grid,
  Button,
  Box,
  CssBaseline,
  RadioGroup,
  Radio,
  FormLabel,
  Checkbox,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  Container,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import axios from "axios";
import NavAppBar from "../Navbar/Navbar";
import FooterGrid from "../Footer/Footer";
import { CustomCheckbox, CustomRadio, useStyles } from './SignUp.style';

export default function SignUp(props) {
  const classes = useStyles();

  const [data, setData] = useState({ role: "NU" });
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState();

  const handleCheckboxChange = (event) => {
    // debugger;
    if (checked) {
      setChecked(false);
      setData((data) => ({ ...data, role: "NU" }));
    } else {
      setData((data) => ({ ...data, role: "DE" }));
      setChecked(true);
    }
  };

  //Onchange for every input element.
  const handleChange = (event) => {
    event.persist();
    const key = event.target.name;
    const value = event.target.value;
    setData((inputs) => ({
      ...inputs,
      [key]: value,
    }));
  };

  const validate = (userData) => {
    const errors = {};
    
    if (!userData.firstName) {
      errors.firstName = "First Name cannot be empty";
    } else {
      if (userData.firstName.length < 3) {
        errors.firstName = "It should be 3 characters long";
      }
    }
    if (!userData.lastName) {
      errors.lastName = "Last Name cannot be empty.";
    } else {
      if (userData.lastName.length < 3) {
        errors.lastName = "It should be 3 characters long";
      }
    }

    if (!userData.email) {
      errors.email = "Email cannot be empty.";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)) {
      errors.email = "Please enter valid email.";
    }
    if (!userData.password) {
      errors.password = "Password cannot be empty.";
    } else {
      if (userData.password.length <= 6) {
        errors.password = "Password must be of atleast 6 length.";
      }
    }

    if (!userData.birthDate) {
      errors.birthDate = "Please select birthdate.";
    }

    if (!userData.mobileNumber) {
      errors.mobileNumber = "Mobile Number cannot be empty.";
    } else {
      if (
        /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/g.test(
          userData.mobileNumber
        )
      ) {
        errors.mobileNumber = "Mobile Number must be of 10 digit.";
      }
    }
    if (!userData.gender) {
      errors.gender = "Please select Gender.";
    }

    if (userData.role === "DE") {
      if (!userData.vehicleNumber) {
        errors.vehicleNumber = "Vehicle Number Cannot ve Empty.";
      } else if (
        !/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/i.test(
          userData.vehicleNumber
        )
      ) {
        errors.vehicleNumber = "Please enter valid Vehicle Number.";
      }

      if (!userData.streetAddress) {
        errors.streetAddress = "Street Address cannot be empty.";
      }
      if (!userData.landmark) {
        errors.landMark = "Landmark cannot be empty.";
      }
      if (!userData.area) {
        errors.area = "Area cannot be empty.";
      }
      if (!userData.city) {
        errors.city = "City cannot be empty.";
      }
      if (!userData.zip) {
        errors.zip = "Zip Code cannot be empty.";
      }
      /*  if (userData.zip.length < 6) {
        errors.zip = "Enter correct zip code.";
      } */
      if (!userData.state) {
        errors.state = "State cannot be empty.";
      }
      if (!userData.country) {
        errors.country = "Country cannot be empty.";
      }
    }
    /*  return errors;
    // return errors; */
    setErrors(errors);
    return true;
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let registerUserObj = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobileNumber: parseInt(data.mobileNumber),
      password: data.password,
      role: data.role,
      gender: data.gender,
      birthDate: data.birthDate,
    };

    if (data.role === "DE") {
      let deliveryExecutive = {
        vehicleNumber: data.vehicleNumber,
        deliveryExecutiveLocation: {
          streetAddress: data.streetAddress,
          landMark: data.landMark,
          area: data.area,
          city: data.city,
          zip: data.zip,
          state: data.zip,
          country: data.country,
          latitude: 52.004,
          longitude: 15.0225,
        },
        activityStatus: true,
        deliveryExecutiveRatings: [],
      };
      let commonData = registerUserObj;
      registerUserObj = { ...commonData, deliveryExecutive };
    }

    const validateResult = validate(registerUserObj);

    if (errors == null) {
      return errors;
    } else {
      //axios call
      registerUser(registerUserObj);
    }
  };

  /* Display feilds for delivery executive */
  const registerUser = async (userDetail) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/user/registeruser",
        userDetail
      );

      props.history.replace("/login");
    } catch (err) {
      setErrors((errors) => ({
        ...errors,
        userExists: err.response.data.message,
      }));
    }

  };

  const radioYes = checked ? (
    <div>
      <TextField
        className={classes.textField}
        label="Vehicle Number"
        name="vehicleNumber"
        type="number"
        placeholder="Enter Vehicle Number"
        fullWidth
        onChange={handleChange}
      />
      {errors ? (
        <div className={classes.errorMessage}>{errors.vehicleNumber}</div>
      ) : null}
      <TextField
        className={classes.textField}
        label="Street Address"
        name="streetAddress"
        type="text"
        placeholder="Enter Street Adress"
        fullWidth
        onChange={handleChange}
      />
      {errors ? (
        <div className={classes.errorMessage}>{errors.streetAddress}</div>
      ) : null}
      <TextField
        className={classes.textField}
        label="Landmark"
        name="landMark"
        type="text"
        placeholder="Enter Landmark"
        fullWidth
        onChange={handleChange}
      />
      {errors ? (
        <div className={classes.errorMessage}>{errors.landMark}</div>
      ) : null}
      <TextField
        className={classes.textField}
        label="Area"
        name="area"
        type="text"
        placeholder="Enter Area"
        fullWidth
        onChange={handleChange}
      />
      {errors ? (
        <div className={classes.errorMessage}>{errors.area}</div>
      ) : null}

      <TextField
        className={classes.textField}
        label="City"
        name="city"
        type="text"
        placeholder="Enter City"
        fullWidth
        onChange={handleChange}
      />
      {errors ? (
        <div className={classes.errorMessage}>{errors.city}</div>
      ) : null}
      <TextField
        className={classes.textField}
        label="Zipcode"
        name="zip"
        type="tel"
        minlength="10"
        placeholder="Enter Zipcode"
        fullWidth
        onChange={handleChange}
      />
      {errors ? <div className={classes.errorMessage}>{errors.zip}</div> : null}
      <TextField
        className={classes.textField}
        label="State"
        name="state"
        type="text"
        placeholder="Enter State"
        fullWidth
        onChange={handleChange}
      />
      {errors ? (
        <div className={classes.errorMessage}>{errors.state}</div>
      ) : null}
      <TextField
        className={classes.textField}
        label="Country"
        name="country"
        type="text"
        placeholder="Enter Country"
        fullWidth
        onChange={handleChange}
      />
      {errors ? (
        <div className={classes.errorMessage}>{errors.country}</div>
      ) : null}
    </div>
  ) : null;

  return (
    <div>
      <NavAppBar />
      <Container className={classes.container}>
        <Grid spacing={2}>
          <Grid item container justify="center">
            <Paper className={classes.paper}>
              <div style={{ padding: 16, margin: "auto", width: "auto" }}>
                <Grid align="center">
                  <h4> Sign Up</h4>
                </Grid>

                <form
                  style={{ width: "500px", marginRight: "2%" }}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    label="FirstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    className={classes.textField}
                    onChange={handleChange}
                    fullWidth
                  />
                  {errors ? (
                    <div className={classes.errorMessage}>
                      {errors.firstName}
                    </div>
                  ) : null}

                  <TextField
                    className={classes.textField}
                    name="lastName"
                    label="LastName"
                    placeholder="Enter Last Name"
                    onChange={handleChange}
                    fullWidth
                  />
                  {errors ? (
                    <div className={classes.errorMessage}>
                      {errors.lastName}
                    </div>
                  ) : null}

                  <TextField
                    className={classes.textField}
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter Email"
                    fullWidth
                  />
                  {errors ? (
                    <div className={classes.errorMessage}>
                      {errors.email}
                      {errors.userExists}
                    </div>
                  ) : null}
                  <TextField
                    className={classes.textField}
                    name="mobileNumber"
                    onChange={handleChange}
                    label="Phone Number"
                    type="number"
                    placeholder="Enter Phone Number"
                    // inputProps={{ minLength: 10 }}
                    // maxlength="10"
                    // pattern="\d{10}"
                    fullWidth
                  />

                  {errors ? (
                    <div className={classes.errorMessage}>
                      {errors.mobileNumber}
                    </div>
                  ) : null}
                  <TextField
                    className={classes.textField}
                    name="password"
                    onChange={handleChange}
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    fullWidth
                  />
                  {errors ? (
                    <div className={classes.errorMessage}>
                      {errors.password}
                    </div>
                  ) : null}
                  <TextField
                    className={classes.textField}
                    label="Birthdate"
                    onChange={handleChange}
                    name="birthDate"
                    type="date"
                    style={{ paddingTop: "4%" }}
                    fullWidth
                  />
                  {errors ? (
                    <div className={classes.errorMessage}>
                      {errors.birthDate}
                    </div>
                  ) : null}

                  <Box>
                    <RadioGroup aria-label="gender" name="gender" row>
                      <span style={{ marginTop: "2%", marginRight: "2%" }}>
                        Gender:
                      </span>
                      <FormControlLabel
                        value="female"
                        onChange={handleChange}
                        control={<CustomRadio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        onChange={handleChange}
                        control={<CustomRadio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </Box>
                  {errors ? (
                    <div className={classes.errorMessage}>{errors.gender}</div>
                  ) : null}
                  <Box>
                    <span style={{ marginTop: "2%", marginRight: "2%" }}>
                      {" "}
                      Do you wish to work as Delivery Executive?
                    </span>
                    <FormControlLabel
                      control={
                        <CustomCheckbox
                          value="delivery"
                          checked={checked}
                          onChange={handleCheckboxChange}
                        />
                      }
                    />
                  </Box>

                  <div> {radioYes} </div>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    value="Submit"
                    fullWidth
                    style={{ backgroundColor: "#171a29", marginTop: "12%" }}
                  >
                    Sign Up
                  </Button>
                  <p className={classes.foodie}>
                    Already a Foodie?{" "}
                    <Link to="/login" className={classes.SignIn}>
                      Sign In.
                    </Link>
                  </p>
                </form>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <FooterGrid />
    </div>
  );
}
