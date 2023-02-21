import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import Contact from "./component/layout/Contact/Contact";
import Products from "./component/Product/Products";
import ProductDetails from "./component/Product/ProductDetails";
import Search from "./component/Product/Search";
import LoginSignup from "./component/User/LoginSignup";
// {==loaduser==}
import store from "./store";
import { loadUser } from "./Redux/Actions/userAction";
import { useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {isAuthenticated && <UserOptions user={user} />}
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={LoginSignup} />
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        <Route exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/shipping" component={Shipping} />
        <ProtectedRoute  exact path="/order/confirm" component={ConfirmOrder} />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
