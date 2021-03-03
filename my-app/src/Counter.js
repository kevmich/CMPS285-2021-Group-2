import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
    super(props);
    this.state = {
        count: 0
    };
}

increment = () => {
    this.setState({
        count: this.state.count + 1
    });
};

decrement = () => {
    this.setState({
        count: this.state.count - 1
    });
};

render() {
    return(
        <div>
            <div className = "buttonWrapper">
            <p>{this.state.count}</p>
           <button onClick={this.increment}>+</button>
           <button onClick={this.decrement}>-</button> 
            </div>
        </div>
        );
    }
}

export default Counter;