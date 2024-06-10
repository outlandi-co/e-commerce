import { createRoot } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div> {/* Wrap the Route components inside a root component */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  </BrowserRouter>
);
