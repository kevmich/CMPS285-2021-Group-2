import React, { useState } from 'react'

function PriceAdjust() {
    const [prices, setPrices] = useState({price1: "", price2: "", price3: "", price4: ""})

    const submitHandler = e => {
        e.preventDefault();
        console.log("details")
        submitPrices(prices);
    }

    const submitPrices = prices => {

    }
    return (
        <form className="gradient" onSubmit={submitHandler}>
            <div className="buffer">
                <div className="form-inner">
                <a className= "title">Price Adjustment:</a>
                <div className= "form-group">
                    <p>Sign Your Yard Package (ex: $95): </p>
                    <input type="price" onChange={e => setPrices({...prices, price1: e.target.value})}/>
                </div>
                <div className= "form-group">
                    <p>Extra Characters: </p>
                    <input type="price" onChange={e => setPrices({...prices, price2: e.target.value})}/>
                </div>
                <div className= "form-group">
                    <p>Extra Day: </p>
                    <input type="price" onChange={e => setPrices({...prices, price3: e.target.value})}/>
                </div>
                <div className= "form-group">
                    <p>Travel Fee (ex: $10-$25):</p>
                    <input type="price" onChange={e => setPrices({...prices, price4: e.target.value})}/>
                </div>
                <input type="submit" value="Adjust Prices"/>
                <p>{prices.price1}</p>
                </div>
            </div>
        </form>
    )
}

export default PriceAdjust
