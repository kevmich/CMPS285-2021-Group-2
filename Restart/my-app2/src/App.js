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

  const [user, setUser] = useState({home: true})

  const leaveHome = () => {
    setUser({home: false})
  }

  const backHome = () => {
    setUser({home: true})
  }

  return (
    <Router>
      <div className="App">
        <ul className="list">
            <li className="inner">
              {(user.home === false) ? (<Link onClick={() => backHome()} to="/">Home</Link>) : ""}
            </li>
            <li className="inner">
              {(user.home === true) ? (<Link onClick={() => leaveHome()} to="/loginform">Login</Link>) : ""}
            </li>
            <li className="inner">
              {(user.home === true) ? (<Link onClick={() => leaveHome()} to="/information">Information</Link>) : ""}
            </li>
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
