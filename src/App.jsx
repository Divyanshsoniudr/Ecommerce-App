import React from "react";
import { BrowserRouter} from "react-router-dom";
import {Switch} from "react-router-dom" ;
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import {Success} from "./pages/Success";
import { Route } from "react-router-dom";
import {Routes} from "react-router-dom"
import { Navigate } from "react-router-dom";

const App = () => {
  const  user = useSelector((state)=> state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          {user ? <Navigate to= "/"/> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Navigate to= "/"/> : <Register/>}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
