import React from 'react'
import louisianaServiceAreas from '../Pictures/louisianaServiceAreas.jpg'


function PaymentInfo() {
    return (
        <div>
            <div className= "topPad">
                <p className= "title">Payment</p>
            </div>
            <p className="samecolorb">l</p>
            <div className = "margins">
            <p className= "body">*Payment is required at the time of booking your request in order to confirm and hold your reservation*</p>
            <h3 className= "label">Location:</h3>
            <p className="samecolorb">l</p>
            <p className= "body">Sign Your yard serves many areas across Louisiana such as:</p>
            </div>
            <div className= "infowhitespace">
                <div className= "gradient">
                    <div className= "buffer2">
                        <div className="sidebyside">    
                            <div>
                                <p className= "purple">Denham Springs</p>
                                <p className= "purple">Watson</p>
                                <p className= "purple">Walker</p>
                            </div>
                            <div>
                                <p className= "purple">Satsuma</p>
                                <p className= "purple">Holden</p>
                                <p className= "purple">Livingston</p>
                            </div>
                            <div>
                                <p className= "purple">Port Vincent</p>
                                <p className= "purple">French Settlement</p>
                                <p className= "purple">St. Amant</p>
                            </div>
                            <div>
                                <p className= "purple">Prairieville</p>
                                <p className= "purple">Gonzales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div>
            <img src ={louisianaServiceAreas} height={200} width={200}></img>
        </div>  
            <div className = "margins">
                <h3 className= "label">Pricing per Package:</h3>
                <p className="samecolorb">l</p>
                <div className="sidebyside">
                    <div className="payinfo">
                        <p className="samecolorb">l</p>
                        <p className= "gold">Sign Your Yard Package</p>
                        <small className= "body">Personalized phrase + accessories</small>
                        <small className= "body"> up to 25 characters, for 24 hours</small>
                        <h3 className= "body">_________________________________________</h3>
                        <p className= "purple">Extra Characters</p>
                        <small className= "body">Add up to 10 characters</small>
                        <h3 className= "body">_________________________________________</h3>
                        <p className= "gold">Extra Day</p>
                        <small className= "body">Add an extra night to keep the signs longer</small>
                        <h3 className= "body">_________________________________________</h3>
                        <p className= "purple">Travel Fee</p>
                        <small className= "body">Additional fee depending on where you're location is</small>
                        </div>
                        <div>
                        <div className="pricing">
                            <p className="samecolorb">l</p>
                            <p className= "gold">$95</p>
                            <p className="samecolorb">l</p>
                            <p className="samecolorb">l</p>
                            <p className= "purple">$10</p>
                            <p className="samecolorb">m</p>
                            <p className="samecolorb">l</p>
                            <p className= "gold">$25</p>
                            <p className="samecolorb">a</p>
                            <p className="samecolorb">l</p>
                            <p className= "purple">$10-$25</p>
                            <p className="samecolorb">l</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentInfo