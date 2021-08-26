import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export async function authUser(userData, props) {
  let decodedToken;
  try {
    const res = await axios.post(
      "http://localhost:5000/user/authenticate",
      userData
    );
    localStorage.setItem("token", res.data.token);

    //Decoding the token and fetching the roles of the loggedIn user.

    var token = localStorage.getItem("token", res.data.token);

    const decodedToken = decodeToken(token); //fetch the token

    // Rendering condition for User and Delivery Executive.
    if ("DE" == decodedToken.role) {
      props.history.push("/deliverypage");
    } else {
      props.history.replace("/");
    }
  } catch (err) {
    return err.response.data;
  }
  
}

export function decodeToken(token) {
  var token = localStorage.getItem("token", token);
  let decodedToken = jwt_decode(token);
  // localStorage.setItem("role", decodedToken.role);
  // localStorage.setItem("userId", decodedToken.userId);

  return decodedToken;
}

export function logout() {
  localStorage.clear();
}
