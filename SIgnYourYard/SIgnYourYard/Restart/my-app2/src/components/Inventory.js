import React, { useState } from 'react';
import Counter from "./Counter";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Inventory(){

  let history = useHistory();

    const hist = () => {
        history.push('/purchasehist');
    }

    const countSetter = () => {
        axios.get('/api/sign/GetSignStock', {
            id:1
        })
        .then(function (response) {
          console.log(response);
        })}

    const [signcount, setSigncount] = 
      useState({
      sign1: 0,
      sign2: 0,
      sign3: 0,
      sign4: 0,
      sign5: 0,
      sign6: 0,
      sign7: 0,
      sign8: 0,
      })

    return(
      <div className= "extend">
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
          <button onClick = { () => countSetter()}>countsetter</button>
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
    );
  }

export default Inventory;