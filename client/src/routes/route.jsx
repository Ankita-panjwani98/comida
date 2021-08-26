import React from "react";
import { Route, Redirect } from "react-router-dom";

const currentUser = localStorage.getItem("token");
const role = localStorage.getItem("role");

export const AuthRoute = ({ component: Component, ...rest }) => {
  //   const { authenticated } = useSelector((state) => state.auth);
  const currentUser = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser == null) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props}></Component>;
        }
      }}
    />
  );
};

export const UserRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser == null) {
          return <Redirect to="/" />;
        } else {
          if (role === "DE") {
            return <Redirect to="/deliverypage" />;
          } else {
            return <Component {...props}></Component>;
          }
        }
      }}
    />
  );
};

export const DeliveryExecutiveRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser == null) {
          return <Redirect to="/" />;
        } else {
          if (role === "NU") {
            return <Redirect to="/" />;
          } else {
            return <Component {...props}></Component>;
          }
        }
      }}
    />
  );
};
