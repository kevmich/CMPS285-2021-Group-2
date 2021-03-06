import React from 'react';
import Counter from "./Counter";
import { useHistory } from 'react-router-dom';

function Inventory(){

  let history = useHistory();

  const Logout = () => {
      history.push('/');
  }
    return(
      <div className = "App">
        <button onClick={() => Logout()}>Logout?</button>
        <div className = "counters">
          <h1>Inventory management</h1>
            <div className = "counterSize">
        <h3>Red signs</h3>
        <Counter/>
        <h3>Orange signs</h3>
        <Counter/>
        <h3>Yellow signs</h3>
        <Counter/>
        <h3>Green signs</h3>
        <Counter/>
        <h3>Blue signs</h3>
        <Counter/>
        <h3>Purple signs</h3>
        <Counter/>
      </div>
      </div>
      </div>
    );
  }

export default Inventory;