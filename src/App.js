import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Hello from App</h3>
        <Navbar />
        <Switch>
          <Route path="/" component={ProductList} />
          <Route path="/details" component={Details} />
        </Switch>
        <Cart />
        <Default />

      </React.Fragment>
    );
  }
}

export default App;
