import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AdminNav extends Component {
render(){
    return (
        <div>
            <nav>
                <ul className="navlinks2">
                    <div className= "navlink">
                        <Link className= "purple" to='/priceadjust'>
                            <li>Adjust Prices</li>
                        </Link>
                    </div>
                    <div className= "navlink">
                        <Link className= "purple" to='/inventory'>
                            <li>Inventory</li>
                        </Link>
                    </div>
                </ul>
            </nav>
        </div>
    )
}}

export default AdminNav