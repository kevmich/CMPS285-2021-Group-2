import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import AdminNav from "./AdminNav";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    componentDidMount() {
        axios.get('./api/auth/Check?id=1').then(response => {
            this.setState({isLoggedIn: true})
        })
    }

    render() {
    return (
        <nav className= "nav">
            <h3 className= "purple">Sign Your Yard</h3>
            <ul>
                <div className="navlinks">
                    {
                        (this.state.isLoggedIn === true) ? (<AdminNav/>) : ""
                    }
                    <div className= "navlink">
                        <Link className= "gold" to='/information'>
                            <li>General Info</li>
                        </Link>
                    </div>
                    <div className= "navlink">
                        <Link className= "gold" to='/paymentinfo'>
                            <li>Payment Info</li>
                        </Link>
                    </div>
                    <div className= "navlink">
                        <Link className= "gold" to='/contactus'>
                            <li>Contact Us</li>
                        </Link>
                    </div>
                    <div className= "navlink">
                        <Link className= "gold" to='/loginform'>
                            <li>Login</li>
                        </Link>
                    </div>
                </div>
            </ul>
        </nav>
    )
}}

export default Navbar
