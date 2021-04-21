import React from 'react'

function PaymentInfo() {
    return (
        <div className="gradient">
            <div className="buffer">
                <a className= "title">Payment:</a>
                <div className="center">
                <p>*Payment is required at the time of booking your request in order to confirm and hold your</p>
                <p>reservation*</p>
                </div>
                <h3 className= "label">Location:</h3>
                <p>Sign Your yard serves many areas across Louisiana such as:</p>
                <div className="sidebyside">    
                    <div>
                        <p className= "purple">Denham Springs</p>
                        <p className= "gold">Watson</p>
                        <p className= "purple">Walker</p>
                    </div>
                    <div>
                        <p className= "gold">Satsuma</p>
                        <p className= "purple">Holden</p>
                        <p className= "gold">Livingston</p>
                    </div>
                    <div>
                        <p className= "purple">Port Vincent</p>
                        <p className= "gold">French Settlement</p>
                        <p className= "purple">St. Amant</p>
                    </div>
                    <div>
                        <p className= "gold">Prairieville</p>
                        <p className= "purple">Gonzales</p>
                    </div>
                </div>
                <h3 className= "label">Pricing per Package:</h3>
                <div className="sidebyside">
                    <div className="payinfo">
                        <p>Sign Your Yard Package</p>
                        <small>Personalized phrase + accessories</small>
                        <small> up to 25 characters, for 24 hours</small>
                        <h3>_________________________________________</h3>
                        <p>Extra Characters</p>
                        <small>Add up to 10 characters</small>
                        <h3>_________________________________________</h3>
                        <p>Extra Day</p>
                        <small>Add an extra night to keep the signs longer</small>
                        <h3>_________________________________________</h3>
                        <p>Travel Fee</p>
                        <small>Additional fee depending on where you're location is</small>
                    </div>
                    <div className="pricing">
                        <p className="samecolor">l</p>
                        <p className= "gold">$95</p>
                        <p className="samecolor">l</p>
                        <p className="samecolor">l</p>
                        <p className= "purple">$10</p>
                        <p className="samecolor">m</p>
                        <p className="samecolor">l</p>
                        <p className= "gold">$25</p>
                        <p className="samecolor">a</p>
                        <p className="samecolor">l</p>
                        <p className= "purple">$10-$25</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentInfo