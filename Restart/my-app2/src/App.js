import './App.css';
import React, {useState} from 'react';
import Loginform from "./components/Loginform";
import Information from './components/Information';
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <ul>
          <div className="inner">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/loginform">Login</Link>
            </li>
            <li>
              <Link to="/information">Information</Link>
            </li>
          </div>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/loginForm" component={Loginform}/>
          <Route path="/information" component={Information}/>
          <Route path="/inventory" component={Inventory}/>
        </Switch>
      </div>
    </Router>
    );
}
  
export default App;
