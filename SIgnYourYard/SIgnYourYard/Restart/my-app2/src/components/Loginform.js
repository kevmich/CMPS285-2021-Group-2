import React, {useState, Component } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Loginform() {

    let history = useHistory();
    
    const [error, setError] = useState("");
    
    const Login = details => {
        axios.post('/api/auth/login', {
            username: details.email,
            password: details.password
          })
          .then(function (response) {
            history.push('/inventory')
              window.location.reload()
          })
            .catch (err => {
        if (err.response) {
            setError('Email and/or Password is incorrect!')
        } 
          });
    }

    const [details, setDetails] = useState({email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();
        console.log("details")
        Login(details);
    }

    return (
        <div className= "whitespace">
            <form onSubmit={submitHandler} className= "gradient">
                <div className= "bufferlog">
                    <div className= "form-inner">
                        <h1 className= "logtitle">Login</h1>
                        <p className="samecolors">l</p>
                        {(error != "") ? ( <div className="error">{error}</div>) : ""}
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value ={details.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value ={details.password} />
                        </div>
                        <input type="submit" value="Login"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Loginform;