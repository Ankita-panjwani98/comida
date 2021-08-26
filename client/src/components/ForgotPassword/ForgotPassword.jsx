import React from "react";
import {
  Avatar,
  Button,
  Grid,
  TextField,
  Box,
  Container,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import NavAppBar from "../Navbar/Navbar";
import FooterGrid from "../Footer/Footer";
import { useStyles } from "./ForgotPassword.style";

const avatarStyle = { backgroundColor: "black", fontsize: "large" };

const initialState = {
  email: "",
  newPassword: "",
  otp: "",
  confirmPassword: "",
};

export default function ForgotPassword(props) {
  const classes = useStyles();

  const [userData, setUserData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState(false);
  const [newPass, setnewPass] = useState(false);
  const [flag, setFlag] = useState(0);
  const [resOtp, setResOtp] = useState();

  const handleChange = (event) => {
    event.persist();
    const key = event.target.name;
    const value = event.target.value;
    setUserData((inputs) => ({
      ...inputs,
      [key]: value,
    }));
  };

  //set otp feild true
  const handleOtpAndPassword = async (event) => {
    event.preventDefault();
    let res;

    //send otp to email
    if (flag === 0) {
      setOtp(true);
      setFlag((flag) => flag + 1);
      res = await axios.post(
        "http://localhost:5000/user/sendotpforforgotpassword",
        { email: userData.email }
      );

      if (res.data.forgotPasswordOtp) {
        setResOtp(res.data.forgotPasswordOtp);
        setErrors((error) => ({
          ...error,
          otpSent: "Otp has been sent succesfully to your email!",
          errorOtp: null,
          success: null,
          errorPassword: null,
        }));
      }
    }

    //if otp matched then
    if (userData.newPassword !== "" && userData.confirmPassword !== "") {
      if (userData.newPassword == userData.confirmPassword) {
        try {
          let resetPassword = await axios.post(
            "http://localhost:5000/user/resetPassword",
            { email: userData.email, newPassword: userData.newPassword }
          );

          setErrors((error) => ({
            ...error,
            success: "Password has been reseted successfully!",
            errorOtp: null,
            otpSent: null,
            errorPassword: null,
          }));
          props.history.push("/");
        } catch (e) {
          if (e.response && e.response.data) {
          }
        }
      } else {
        setErrors((error) => ({
          ...error,
          errorPassword: "Password did not matched",
          errorOtp: null,
          otpSent: null,
          success: null,
        }));
      }
    }
  };

  //open new feilds for changing password
  const handleNewPassword = (event) => {
    event.preventDefault();

    if (userData.otp == resOtp) {
      setErrors((error) => ({
        ...error,
        errorOtp: null,
        otpSent: null,
        success: null,
        errorPassword: null,
      }));

      setOtp(false);
      setnewPass(true);
    } else {
      setErrors((error) => ({
        ...error,
        errorOtp: "Otp did not matched",
        otpSent: null,
        success: null,
        errorPassword: null,
      }));
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
                    <h4>Change Password</h4>
                  </Grid>

                  <form
                    style={{ width: "500px", marginRight: "2%" }}
                    onSubmit={handleOtpAndPassword}
                  >
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter Email to get OTP."
                      className={classes.textField}
                      onChange={handleChange}
                      disabled={otp ? true : false}
                      fullWidth
                      required
                    />
                    {errors && errors.otpSent ? (
                      <div style={{ color: "green", marginTop: "1%" }}>
                        {errors.otpSent}
                      </div>
                    ) : null}

                    {otp ? (
                      <Box display="flex" flexDirection="row">
                        <TextField
                          label="OTP"
                          value={userData.Otp}
                          name="otp"
                          type="text"
                          placeholder="Enter Otp to get OTP."
                          className={classes.textField}
                          onChange={handleChange}
                        />

                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          value="Submit"
                          onClick={handleNewPassword}
                          className={classes.checkOtp}
                        >
                          check
                        </Button>
                      </Box>
                    ) : null}
                    {errors && errors.errorOtp ? (
                      <div style={{ color: "red", marginTop: "1%" }}>
                        {errors.errorOtp}
                      </div>
                    ) : null}
                    {newPass ? (
                      <>
                        <TextField
                          label="New Password"
                          name="newPassword"
                          type="password"
                          placeholder="Enter New Password"
                          className={classes.textField}
                          onChange={handleChange}
                          fullWidth
                          required
                        />
                        <TextField
                          label="Confirm Password"
                          name="confirmPassword"
                          type="password"
                          placeholder="Enter Confirm Password"
                          className={classes.textField}
                          onChange={handleChange}
                          fullWidth
                          required
                        />
                        {errors && errors.errorPassword ? (
                          <div style={{ color: "red", marginTop: "1%" }}>
                            {errors.errorPassword}
                          </div>
                        ) : null}
                      </>
                    ) : null}

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value="Submit"
                      fullWidth
                      className={classes.submitButton}
                    >
                      {flag === 0 ? "Send OTP" : "Change Password"}
                    </Button>

                    {errors && errors.success ? (
                      <div style={{ color: "green", marginTop: "1%" }}>
                        {errors.success}
                      </div>
                    ) : null}
                  </form>
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
