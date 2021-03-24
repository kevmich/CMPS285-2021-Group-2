import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function PurchaseHist() {

    let history = useHistory();

    const hist = () => {
        history.push('/inventory');
    }

    const [customer, setCustomer] = useState({email: "", date: "", name: ""})

    const submitHandler = e => {
        e.preventDefault();
        console.log("customer")
        submitCustomer(customer);
    }

    const submitCustomer = customer => {

    }

    const [user, getUser] = useState({email: "", orders: 0, name: ""})

    return (
        <form className= "gradient" onSubmit={submitHandler}>
            <div className= "buffer">
                <div className= "ph">
                    <h1 className= "title">Customer Purchase History</h1>
                    <div className= "form-ph">
                        <p>Enter customer name: </p>
                        <input type="name" onChange={e => setCustomer({...customer, name: e.target.value})}/>
                    </div>
                    <div className= "form-ph">
                        <p>Enter customer email: </p>
                        <input type="email" onChange={e => setCustomer({...customer, email: e.target.value})}/>
                    </div>
                    <div className= "form-ph">
                        <p>Enter date of purchase: </p>
                        <input type="date" onChange={e => setCustomer({...customer, date: e.target.value})}/>
                    </div>
                    <input type="submit" value="Enter customer" />
                </div>
                <button onClick = {hist}>Inventory Management</button>
            </div>
        </form>
    )
}

export default PurchaseHist
