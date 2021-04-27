import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios"

function PurchaseHist() {

    let history = useHistory();

    const [customer, setCustomer] = useState({email: "", date: "", name: ""})

    const submitHandler = e => {
        e.preventDefault();
        console.log("customer")
        submitCustomer(customer);
    }

    const submitCustomer = customer => {
        axios.post('/api', {
            email: customer.email,
            name: customer.name,
            date: customer.date
        })
            .then(function (response) {
                console.log(response);
                checker()
            })
    }

    function checker(){
        axios.get('api/')
            .then(function (response) {
                console.log(response)
            })
    }

    return (
        <div className= "whitespace">
            <form className= "gradient" onSubmit={submitHandler}>
                <div className= "buffer">
                    <div className= "form-inner">
                        <h1 className= "title">Customer Purchase History</h1>
                        <div className= "form-group">
                            <p>Enter customer name: </p>
                            <input type="name" onChange={e => setCustomer({...customer, name: e.target.value})}/>
                        </div>
                        <div className= "form-group">
                            <p>Enter customer email: </p>
                            <input type="email" onChange={e => setCustomer({...customer, email: e.target.value})}/>
                        </div>
                        <div className= "form-group">
                            <p>Enter date of purchase: </p>
                            <input type="date" onChange={e => setCustomer({...customer, date: e.target.value})}/>
                        </div>
                        <input type="submit" value="Enter customer" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PurchaseHist
