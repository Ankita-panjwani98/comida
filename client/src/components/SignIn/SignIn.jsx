import React from "react";
import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  Grid,
  TextField,
  Box,
  Container,
  Paper,
} from "@material-ui/core";
import { useState } from "react";
import FooterGrid from "../Footer/Footer";
import { authUser } from "../../services/authUser";

import NavAppBar from './../Navbar/Navbar';
import { useStyles } from "./SignIn.style";

const avatarStyle = { backgroundColor: "black", fontsize: "large" };

const initialState = {
  email: "",
  password: "",
};

export default function SignIn(props) {
  const classes = useStyles();

  const { visible, onClose, Transition } = props;

  const [userData, setUserData] = useState(initialState);
  const [errors, setErrors] = useState();

  const changeEmail = (event) => {
    var data1 = { ...userData };
    data1.email = event.target.value;
    setUserData(data1);
  };

  const changePassword = (event) => {
    var data1 = { ...userData };
    data1.password = event.target.value;
    setUserData(data1);
  };

  //  Login Validations
  const validate = (userData) => {
    const errors = {};

    if (!userData.email) {
      errors.email = "Email cant be empty!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)
    ) {
      errors.email = "Invalid email address";
    }

    //Password Errors
    if (!userData.password) {
      errors.password = "Password can't be empty!";
    } else if (userData.password.length < 6) {
      errors.password = "Password length must be 6 characters.";
    }

    // return errors;
    setErrors(errors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validate(userData);


    if (errors === {}) {
      return errors;
    } else {
      //axios call
      loginUser(userData);
    }
  };

  const loginUser = async (userData) => {
    //Posting Data to the Server.

    const response = await authUser(userData, props);
    if (response != null) {
      setErrors((errors) => ({ ...errors, authError: response.message }));
    }
  };

  return (
    <div>
      <NavAppBar />
      <Container className={classes.container}>
        <Grid spacing={2}>
          <Grid item container justify="center">
            <Paper className={classes.paper}>
              <div
                style={{ padding: 16, margin: "auto", width: "auto" }}
                className="loginStyle"
              >
                <Box>
                  <Grid align="center">
                    <h4> Sign In</h4>
                  </Grid>

                  <form
                    style={{ width: "500px", marginRight: "2%" }}
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      label="Email"
                      value={userData.email}
                      name="email"
                      placeholder="Enter Email Name"
                      className={classes.textField}
                      onChange={changeEmail}
                      fullWidth
                    />
                    {errors ? (
                      <div className={classes.errorMessage}>{errors.email}</div>
                    ) : null}
                    <TextField
                      className={classes.textField}
                      name="password"
                      value={userData.password}
                      onChange={changePassword}
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
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value="Submit"
                      fullWidth
                      className={classes.submitButton}
                    >
                      Sign In
                    </Button>
                    <Grid item justify="space-between">
                      <p className={classes.foodie}>
                        Forgot Password?
                        <Link
                          to="/forgotpassword"
                          className={classes.forgetpassword}
                        >
                          Change Password.
                        </Link>
                        <div className={classes.wantToregister}>
                          Want to register?
                          <Link to="/signup" className={classes.forgetpassword}>
                            Sign Up
                          </Link>
                        </div>
                      </p>
                    </Grid>
                  </form>
                  {errors?.authError ? (
                    <div className={classes.errorMessageAuth}>
                      {errors.authError}
                    </div>
                  ) : null}
                </Box>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <FooterGrid />
    </div>
  );
}
