import React, { useState, Component } from 'react'
import {Button} from "reactstrap";
import axios from 'axios';

class PriceAdjust extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price1: 0,
            price2: 0,
            price3: 0,
            price4: 0
        }
    }

submitHandler = e => {
    e.preventDefault();
    console.log("details")
    this.submitPrices();
}

submitPrices = () => {
    axios.put('',
        )
        .then(response => {

        })
}

render(){
    return(
        <div className= "extend">
            <form className="gradient" onSubmit={this.submitPrices}>
                <div className="buffer">
                    <div className="form-inner">
                        <a className= "title">Price Adjustment:</a>
                        <div className= "form-group">
                            <p>Sign Your Yard Package (ex: $95): </p>
                            <input type="price" onChange={this.submitPrices({})}/>
                        </div>
                        <div className= "form-group">
                            <p>Extra Characters: </p>
                            <input type="price" onChange={this.submitHandler}/>
                        </div>
                        <div className= "form-group">
                            <p>Extra Day: </p>
                            <input type="price"/>
                        </div>
                        <div className= "form-group">
                            <p>Travel Fee (ex: $10-$25):</p>
                            <input type="price"/>
                        </div>
                        <input type="submit" value="Adjust Prices"/>
                        <p>{}</p>
                    </div>
                </div>
            </form>
        </div>
    );
}}

export default PriceAdjust
