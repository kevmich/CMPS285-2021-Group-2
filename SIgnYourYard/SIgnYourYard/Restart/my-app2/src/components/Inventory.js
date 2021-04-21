import React from 'react';
import Counter from "./Counter";

import { useHistory } from 'react-router-dom';

function Inventory(){

  let history = useHistory();

    const hist = () => {
        history.push('/purchasehist');
    }
    return(
      <div className= "gradient">
        <div className= "buffer">
          <div>
            <h1 className= "title">Inventory management</h1>
            <h3 className= "label">In Stock:</h3>
          </div>
          <div className= "counters">
            <div>
              <p>Red signs</p>
              <h3>_________________________________________</h3>
              <p>Orange signs</p>
              <h3>_________________________________________</h3>
              <p>Yellow signs</p>
              <h3>_________________________________________</h3>
              <p>Green signs</p>
              <h3>_________________________________________</h3>
              <p>Blue signs</p>
              <h3>_________________________________________</h3>
              <p>Purple signs</p>
            </div>
            <div>
              <Counter/>
              <Counter/>
              <Counter/>
              <Counter/>
              <Counter/>
              <Counter/>
            </div>
          </div>
          <button onClick = {hist}>Purchase History</button>
        </div>
      </div>
    );
  }

export default Inventory;