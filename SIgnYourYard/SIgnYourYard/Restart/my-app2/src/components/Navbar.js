import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
render() {
    return (
        <nav>
            <h3 className= "purple">Sign Your Yard</h3>
            <ul className="navlinks">
                <Link className= "gold" to='/information'>
                    <li>General Info</li>
                </Link>
                <Link className= "gold" to='/paymentinfo'>
                    <li>Payment Info</li>
                </Link>
                <Link className= "gold" to='/contactus'>
                    <li>Contact Us</li>
                </Link>
                <Link className= "gold" to='/loginform'>
                    <li>Login</li>
                </Link>
            </ul>
           
        </nav>
    )
}}

export default Navbar
