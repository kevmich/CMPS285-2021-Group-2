import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
faTwitter,
    faInstagram,
    faFacebook
} from  "@fortawesome/free-brands-svg-icons"

function Contactus() {
    return (
        <div className= "extend">
            <p className= "title">Contact Us</p>
            <h3 className= "label">Hours:</h3>
            <p className= "whitetext">Mon-Fri: 9:00-5:00</p>
            <p className= "whitetext">Closed on Saturday and Sunday</p>
            <h3 className= "label">Call us for reservations:</h3>
            <p className= "whitetext">(255)-773-4470</p>
            <h3 className= "label">Follow us on Social Media!</h3>
            <p className= "whitetext">Click the icons to take you to our social media accounts:</p>
            <div className="social-container">
            <a href="https://www.twitter.com/signyouryard" className="twitter icon" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="3x"/>
            </a>
            <a href="https://www.instagram.com/signyouryard/" className="insta icon" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="3x"/>
            </a>
            <a href="https://www.facebook.com/Sign-Your-Yard-105081981193735/" className="fb icon" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="3x"/>
            </a>
            </div>
        </div>
    )
}

export default Contactus
