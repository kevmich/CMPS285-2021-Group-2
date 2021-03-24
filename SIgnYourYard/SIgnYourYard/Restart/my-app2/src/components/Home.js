import React from 'react'
import YardsignOne from '../Pictures/YardsignOne.jpg'
import YardsignTwo from '../Pictures/YardsignTwo.jpg'
import YardsignThree from '../Pictures/YardsignThree.jpg'
import YardsignFour from '../Pictures/YardsignFour.jpg'

function Home() {
    return (
        <div className="gradient">
            <div className="buffer">
                <div classname="home">
                    <p className= "title">Welcome to </p>
                    <p className= "title">Sign Your Yard</p>
                    <p className="label">Gallery</p>
                    <div className= "pad">
                        <div>
                            <img alt="yard sign #1" className="images" src={YardsignOne}/>
                            <img alt="yard sign #2" className="images" src={YardsignTwo}/>
                            <img alt="yard sign #3" className="images" src={YardsignThree}/>
                            <img alt="yard sign #4" className="images" src={YardsignFour}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home