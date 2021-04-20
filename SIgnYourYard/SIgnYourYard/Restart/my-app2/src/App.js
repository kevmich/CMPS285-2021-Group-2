import './App.css';
import React, { useState } from 'react';
import Information from './components/Information';
import Loginform from './components/Loginform';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Paymentinfo from './components/Paymentinfo';
import Inventory from './components/Inventory';
import Navbar from './components/Navbar';
import PurchaseHist from './components/PurchaseHist';
import PriceAdjust from './components/PriceAdjust';
import AdminNav from './components/AdminNav';
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {


  return (
    <div>
        <Router>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/contactus" component={Contactus}/>
              <Route path="/paymentinfo" component={Paymentinfo}/>
              <Route path="/loginform" component={Loginform}/>
              <Route path="/information" component={Information}/>
              <Route path="/inventory" component={Inventory}/>
              <Route path="/purchasehist" component={PurchaseHist}/>
              <Route path="/priceadjust" component={PriceAdjust}/>
            </Switch>
          </div>
        </Router>
    </div>
    );
}
  
export default App;