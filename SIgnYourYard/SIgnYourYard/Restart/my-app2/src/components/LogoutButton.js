import React, { Component } from 'react'

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: true};
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

render(){
        const isLoggedIn = this.state.isLoggedIn;
            console.log(this.state.isLoggedIn)

    return (
       <div>
           {(isLoggedIn) ? (<button className= "gold" onClick={this.handleLogoutClick}> Logout </button>) : ("")}
       </div>
    )
}}

export default LogoutButton