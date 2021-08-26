import LandingPage from './pages/LandingPage/LandingPage';
import { Route, Switch } from "react-router-dom";
import ProfileSection from "./pages/ProfileSectionPage/ProfileSection";
import AllRestaurants from './pages/AllRestaurantsPage/AllRestaurants';
import Cart from "./pages/Cart/Cart";
import OrderSummaryPage from "./pages/OrderSummaryPage/OrderSummaryPage"
import RestaurantContainer from "./pages/RestaurantContainer/RestaurantContainer";
import DeliveryPage from './pages/DeliveryPage/DeliveryPage'
import AcceptedOrders from './pages/AcceptedOrdersPage/AcceptedOrders';
import { AuthRoute, DeliveryExecutiveRoute, UserRoute } from "./routes/route";
import SignUp from './components/SignUp/SignUp'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import MyOrders from './pages/MyOrders/MyOrders';
import SignIn from './components/SignIn/SignIn';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';


require('dotenv').config();

function App() {

  return (
    <div className="App">

      {/* <HomeComponent /> */}

      <Switch>
        
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/aboutus" exact component={AboutUsPage} />
        <Route
          path="/restaurant/:restaurantId"
          exact
          component={RestaurantContainer}
        ></Route>
        <Route path="/allrestaurants" exact component={AllRestaurants}></Route>

        <AuthRoute
          path="/ordersummary/:orderId"
          exact
          component={OrderSummaryPage}
        ></AuthRoute>
        <AuthRoute path="/profile" exact component={ProfileSection}></AuthRoute>
        <UserRoute path="/myorders" exact component={MyOrders}></UserRoute>
        <UserRoute path="/cart" exact component={Cart}></UserRoute>

        <DeliveryExecutiveRoute
          path="/deliverypage"
          exact
          component={DeliveryPage}
        ></DeliveryExecutiveRoute>
        <DeliveryExecutiveRoute
          path="/acceptedOrders"
          exact
          component={AcceptedOrders}
        ></DeliveryExecutiveRoute>

     </Switch> 


    </div>
  );
}

export default App;

