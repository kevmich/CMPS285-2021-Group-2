import React from 'reactimport'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
import Information from './components/Information';
import Paymentinfo from './components/Paymentinfo';
import Contactus from './components/Contactus';
import Home from './components/Home';
import Loginform from './components/Loginform';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/information">About us</Link>
                </li>
                <li>
                    <Link to="/paymentinfo">Payment and Location</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact us</Link>
                </li>
                <li>
                    <Link to="/loginform">Login</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/information" exact component={Information} />
                <Route path="/paymentinfo" exact component={Paymentinfo} />
                <Route path="/contactus" exact component={Contactus} />
                <Route path="/loginform" exact component={Loginform} />
            </Switch>
        </div>
    )
}

export default Navbar