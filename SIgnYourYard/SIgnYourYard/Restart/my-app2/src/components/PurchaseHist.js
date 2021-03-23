import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function PurchaseHist() {

    let history = useHistory();

    const hist = () => {
        history.push('/inventory');
    }

    const [user, getUser] = useState({email: "", orders: 0, name: ""})

    return (
        <div className= "gradient">
            <div className= "buffer">
                <div className= "ph">
                    <h1 className= "title">Customer Purchase History</h1>
                    <div className= "form-ph">
                    <p>Enter customer name: </p>
                    <input type="name"/>
                    </div>
                    <div className= "form-ph">
                    <p>Enter customer email: </p>
                    <input type="email"/>
                    </div>
                    <div className= "form-ph">
                    <p>Enter date of purchase: </p>
                    <input type="date"/>
                    </div>
                    <input type="submit" value="Enter customer"/>
                </div>
                <button onClick = {hist}>Inventory Management</button>
            </div>
        </div>
    )
}

export default PurchaseHist
