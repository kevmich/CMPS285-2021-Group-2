import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Inv() {

    let history = useHistory();

    const Logout = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>Inv</h1>
            <button onClick={() => Logout()}>Logout?</button>
        </div>
    )
}

export default Inv
