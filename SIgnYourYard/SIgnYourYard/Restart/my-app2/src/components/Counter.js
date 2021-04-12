import React, { Component } from "react";
import axios from 'axios'


function Counter() {





    const decrement = () => {
        axios.put('/api/sign/UpdateSignStock', {})
    }
    return (
        <div className="sidebyside">
            <button onClick={() => decrement()}>-</button>
        </div>
    )
}

export default Counter;