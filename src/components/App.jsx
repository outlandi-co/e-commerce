// App.jsx

/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
