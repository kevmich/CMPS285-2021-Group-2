import './App.css';
import React, {useState} from 'react';
import Loginform from "./components/Loginform";
import Information from './components/Information';
import Home from "./components/Home";
import Inv from "./components/Inv";
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
    }
  

  const [user, setUser] = useState({email: ""});

  const [error, setError] = useState("");

  const Login = details => {

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({email: details.email});
      } else { 
        setError("Details do not match!")
    }
  }

  const Logout = () => {
    setGuest({master: false, info: false})
    }

    const [guest, setGuest] = useState({info: false, master: false})

  const wantInfo = User => {
    console.log("wantInfo")
        setGuest({info: true})
  }

  const wantMaster = User => {
    console.log("wantMaster")
        setGuest({master: true})
  }

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
          <Route path="/inv" component={Inv}/>
        </Switch>
      </div>
    </Router>
    );
}
  
export default App;
