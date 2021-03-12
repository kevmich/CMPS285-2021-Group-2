import './App.css';
import React, {useState} from 'react';
import Information from './components/Information';
import Loginform from './components/Loginform';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Paymentinfo from './components/Paymentinfo';
import Inventory from './components/Inventory';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [loggedIn, setLogin] = useState({login: false})

  const login = () => {
    setLogin= ({login: true})
  }

  return (
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
        </Switch>
      </div>
    </Router>
    );
}
  
export default App;