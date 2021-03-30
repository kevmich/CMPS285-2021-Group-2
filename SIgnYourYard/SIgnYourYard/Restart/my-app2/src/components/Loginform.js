import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Loginform() {

    let history = useHistory();
    
    const [error, setError] = useState("");
    
    const Login = details =>  {
        axios.post('/api/auth/login', {
            username: 'admin',
            password: 'Password123!'
          })
          .then(function (response) {
            console.log(response);
            history.push('/inventory')
          })
          .catch(function (err) {
              console.log(err)
          });
          console.log('Shane is the goat')
    }

    const [details, setDetails] = useState({email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();
        console.log("details")
        Login(details);
    }

    return (
        
        <form className="gradient" onSubmit={submitHandler}>
            <div className="buffer">
                <div className= "form-inner">
                    <h1 className= "title">Login:</h1>
                    {(error != "") ? ( <div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="username" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value ={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value ={details.password} />
                    </div>
                    <input type="submit" value="Login"/>
                </div>
            </div>
        </form>
    )
}

export default Loginform;