import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LogoutButton from "./LogoutButton";

class AdminNav extends Component {
render(){
    return (
        <div>
        <nav>
            <ul className="navlinks">
                <Link className= "gold" to='/priceadjust'>
                    <li>Adjust Prices</li>
                </Link>
                <Link className= "gold" to='/inventory'>
                    <li>Inventory</li>
                </Link>
                <Link className= "gold" to='/purchasehist'>
                    <li>Purchase History</li>
                </Link>
            </ul>
            <LogoutButton/>
        </nav>
</div>
    )
}}

export default AdminNav