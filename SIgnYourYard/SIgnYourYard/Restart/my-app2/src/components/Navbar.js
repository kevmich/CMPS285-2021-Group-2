import React from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function Navbar() {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>Sign Your Yard</h3>
            <ul className="navlinks">
                <Link style={navStyle} to='/information'>
                    <li>General Info</li>
                </Link>
                <Link style={navStyle} to='/paymentinfo'>
                    <li>Payment Info</li>
                </Link>
                <Link style={navStyle} to='/contactus'>
                    <li>Contact Us</li>
                </Link>
                <Link style={navStyle} to='/loginform'>
                    <li>Login</li>
                </Link>
            </ul>
           
        </nav>
    )
}

export default Navbar
