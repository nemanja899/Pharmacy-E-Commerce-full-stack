import React from "react";
import "./App.css"
import "./responsive.css"
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import SigngleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartPage from "./screens/CartPage";
import ShippingPage from "./screens/ShipmentPage";
import ProfilePage from "./screens/ProfilePage";
import PaymentPage from "./screens/PaymentPage";
import PlaceOrderPage from "./screens/PlaceOrderPage";
import OrderPage from "./screens/OrderPage";
import NotFound from "./screens/NotFound";

const App = ()=>{
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/product/:id" component={SigngleProduct} />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={ProfilePage}/>
                <Route path="/cart/:id?" component={CartPage}/>
                <Route path="/shipping" component={ShippingPage}/>
                <Route path="/payment" component={PaymentPage}/>
                <Route path="/placeorder" component={PlaceOrderPage}/>
                <Route path="/order" component={OrderPage}/>
                <Route path="*" component={NotFound}/>

            </Switch>
        </Router>
    );
};
export default App;