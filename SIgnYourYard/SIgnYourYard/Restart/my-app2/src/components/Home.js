import React from 'react'
import Carousel from './Carousel';


function Home() {
    return (
        <div className="extend">
            <div className="home">
                <p className= "title1">Welcome to </p>
                <p className= "SYY">Sign Your Yard</p>
                <p className="label">Gallery</p>
                <div>
                        
                       <Carousel>
                       </Carousel>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;