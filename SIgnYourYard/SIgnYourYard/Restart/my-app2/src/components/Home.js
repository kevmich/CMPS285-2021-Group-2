import React from 'react'
import Yardsign1 from '../Yardsign1.jpg'

function Home() {
    return (
        <div className="gradient">
            <div className="buffer">
                <div classname="home">
                <h1 classname="home">Welcome to</h1>
                <h1 classname="home">Sign Your Yard</h1>
                </div>
                <img src={Yardsign1}/>
            </div>
        </div>
    )
}

export default Home