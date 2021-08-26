import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Route, Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PastOrders from "../../components/PastOrders/PastOrders";
import MyProfile from "../../components/MyProfile/MyProfile";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import SvgIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import NavAppBar from "../../components/Navbar/Navbar";
import FooterGrid from "../../components/Footer/Footer";
import { decodeToken } from "../../services/authUser";
import { useStyles } from "./ProfileSectionPage.style";
import Chart from "../../components/Chart/Chart";

export default function ProfileSection() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);
  var token = localStorage.getItem("token");
  const decodedToken = decodeToken(token);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={classes.root}>
      <NavAppBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={12} md={12}>
          <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                >


            <Paper className={classes.root}>
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="#171a29"
                centered
              >
                <Tab className={classes.tabtext} label="Profile" />

                {decodedToken.role == "DE" ? (
                  <Tab className={classes.tabtext} label="Completed Orders" />
                ) : (
                  <Tab className={classes.tabtext} label="Past Orders" />
                )}

                <Tab
                  className={classes.tabtext}
                  classes={{
                    wrapper: classes.iconLabelWrapper,
                    labelContainer: classes.labelContainer,
                  }}
                  label="Insights"
                />
              </Tabs>
            </Paper>
            </Grid>
            <Grid item sm={12} xs={12} lg={12} md={12}>
              {selectedTab === 0 && <MyProfile />}
              {selectedTab === 1 && <PastOrders />}
              {selectedTab === 2 && <Chart />}
            </Grid>
          </Grid>
          
          </Paper>
          </Grid>
          
        </Grid>
      </Container>
      {/* <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                >
                  <Paper >
                    <Tabs
                      variant="scrollable"
                      value={selectedTab}
                      onChange={handleChange}
                      aria-label="Vertical tabs example"
                      centered
                    >
                      <Tab
                        className={classes.tabtext}
                        // classes={{
                        //   wrapper: classes.iconLabelWrapper,
                        //   labelContainer: classes.labelContainer,
                        // }}
                        // icon={<PersonIcon />}
                        label="Profile"
                      />

                      {decodedToken.role == "DE" ? (
                        <Tab
                          className={classes.tabtext}
                          // classes={{
                          //   wrapper: classes.iconLabelWrapper,
                          //   labelContainer: classes.labelContainer,
                          // }}
                          // icon={<ShoppingBasketIcon />}
                          label="Completed Orders"
                        />
                      ) : (
                        <Tab
                          className={classes.tabtext}
                          // classes={{
                          //   wrapper: classes.iconLabelWrapper,
                          //   labelContainer: classes.labelContainer,
                          // }}
                          // icon={<ShoppingBasketIcon />}
                          label="Past Orders"
                        />
                      )}

                      <Tab
                        className={classes.tabtext}
                        classes={{
                          wrapper: classes.iconLabelWrapper,
                          labelContainer: classes.labelContainer,
                        }}
                        // icon={<PersonIcon />}
                        label="Insights"
                      />
                    </Tabs>
                  </Paper>
                </Grid>

                <Grid item sm={12} xs={12} lg={12} md={12}>
                  {selectedTab === 0 && <MyProfile />}
                  {selectedTab === 1 && <PastOrders />}
                  {selectedTab === 2 && <Chart />}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container> */}
      <FooterGrid />
    </div>
  );
}
