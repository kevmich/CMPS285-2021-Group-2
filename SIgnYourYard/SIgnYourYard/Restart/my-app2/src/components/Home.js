import React from 'react'
import Carousel from './Carousel';


function Home() {
    return (
        <div className="extend">
            <div classname="home">
                <p className= "title">Welcome to </p>
                <p className= "title">Sign Your Yard</p>
                <p className="label">Gallery</p>
                <div className= "pad">
                        
                       <Carousel className= "images"> 
                       </Carousel>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;