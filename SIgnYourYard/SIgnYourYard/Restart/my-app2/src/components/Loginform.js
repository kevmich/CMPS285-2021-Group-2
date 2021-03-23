import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Loginform() {

    let history = useHistory();

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
        }
      
    
    const [user, setUser] = useState({email: ""});
    
    const [error, setError] = useState("");
    
    const Login = details => {
    
        if (details.email == adminUser.email && details.password == adminUser.password){
          console.log("Logged in");
          setUser({email: details.email});
          history.push('/Inventory');
          } else {
            setError("Username or Password is not correct!")
        }
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
    )
}

export default Loginform;