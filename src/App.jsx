import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";


const App = () => {
  const  user = true
  return (
    <BrowserRouter>
      <Switch>
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
        <Route path="/login">
        {user ? <Redirect to= "/"/> : <Login/>}
        </Route>
        <Route path="register">
        {user ? <Redirect to= "/"/> : <Register/>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
