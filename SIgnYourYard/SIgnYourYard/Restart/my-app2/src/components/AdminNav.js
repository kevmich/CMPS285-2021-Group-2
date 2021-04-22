import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AdminNav extends Component {
render(){
    return (
        <nav>
            <ul className="navlinks">
                <Link to='/priceadjust'>
                    <li>Adjust Prices</li>
                </Link>
                <Link to='/inventory'>
                    <li>Inventory</li>
                </Link>
                <Link to='/purchasehist'>
                    <li>Purchase History</li>
                </Link>
            </ul>
        </nav>
    )
}}

export default AdminNav