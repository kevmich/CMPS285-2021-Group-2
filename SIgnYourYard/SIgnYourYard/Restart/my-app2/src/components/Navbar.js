import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import AdminNav from "./AdminNav";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    LoggingOut = () => {
        axios.post('./api/auth/Logout').then(response => {
            this.setState({isLoggedIn: false})
        })
    }

    componentDidMount() {
        axios.get('./api/auth/Check').then(response => {
            if(response.data.username === "admin@admin.com")
            this.setState({isLoggedIn: true})
            else(this.setState({isLoggedIn: false}))
        })
    }

    render() {
    return (
        <nav className= "nav">
            <div className= "syygr">
                <div className= "samecolorbg">
                    <h3 className= "goldNav">Sign Your Yard</h3>
                </div>
            </div>
            <ul>
                <div className="navlinks">
                    {
                        (this.state.isLoggedIn === true) ? (<AdminNav/>) : ""
                    }
                    <div className= "navlink">
                        <Link className= "purple" to='/information'>
                            <li>General Info</li>
                        </Link>
                    </div>
                    <div className= "navlink">
                        <Link className= "purple" to='/paymentinfo'>
                            <li>Payment Info</li>
                        </Link>
                    </div>
                    <div className= "navlink">
                        <Link className= "purple" to='/contactus'>
                            <li>Contact Us</li>
                        </Link>
                    </div>
                    <div className= "navlink">
                        <Link className= "purple" to='/loginform'>
                            <li>Login</li>
                        </Link>
                    </div>
                    {
                        (this.state.isLoggedIn === true) ? (
                            <div className="padTop">
                                <button className="purple" onClick={this.LoggingOut}>Logout</button>
                            </div>
                        ) : ""
                    }
                </div>
            </ul>
        </nav>
    )
}}

export default Navbar
