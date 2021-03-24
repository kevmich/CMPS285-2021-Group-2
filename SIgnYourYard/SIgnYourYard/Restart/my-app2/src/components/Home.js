import React from 'react'

import YardsignOne from '../YardsignOne.jpg'

function Home() {
    return (
        <div className="gradient">
            <div className="buffer">
                    <div classname="home">
                    <h1 classname="home">Welcome to</h1>
                    <h1 classname="home">Sign Your Yard</h1>
                    </div>
               
                <img alt="yard sign #3" className="images" src={YardsignOne}/>
            </div>
        </div>
    )
}

export default Home