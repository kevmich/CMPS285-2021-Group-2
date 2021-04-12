import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Inventory(){

    const [sign1, setSign1] = useState(0)
    const [sign2, setSign2] = useState(0)
    const [sign3, setSign3] = useState(0)
    const [sign4, setSign4] = useState(0)
    const [sign5, setSign5] = useState(0)
    const [sign6, setSign6] = useState(0)

    const increment1 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=1',
            {stock: sign1 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
        setSign1(sign1 + 1)
            })
    }

    const increment2 = () => {
         axios.put('/api/sign/UpdateSignStock?signId=2',
            {stock: sign2 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
             .then(function(response){
                 setSign2(sign2 + 1)
             })
    }

    const increment3 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=3',
            {stock: sign3 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
                setSign3(sign3 + 1)
            })
    }

    const increment4 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=4',
            {stock: sign4 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
                setSign4(sign4 + 1)
            })
    }

    const increment5 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=5',
            {stock: sign5 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
                setSign5(sign5 + 1)
            })
    }

    const increment6 = () => {
       axios.put('/api/sign/UpdateSignStock?signId=6',
           {stock: sign6 + 1,
               emoji: true,
               color: 'red',
               content: 'A'})
           .then(function(response){
               setSign6(sign6 + 1)
           })
    }



    const decrement1 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=1',
            {stock: sign1 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
                setSign1(sign1 - 1)
            })
    }

    const decrement2 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=2',
            {stock: sign2 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
                setSign2(sign2 - 1)
            })
    }

    const decrement3 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=3',
            {stock: sign3 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
                setSign3(sign3 - 1)
            })
    }

    const decrement4 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=4',
            {stock: sign4 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
                setSign4(sign4 - 1)
            })
    }

    const decrement5 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=5',
            {stock: sign5 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
                setSign5(sign5 - 1)
            })
    }

    const decrement6 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=6',
            {stock: sign6 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(function(response){
                setSign6(sign6 - 1)
            })
    }



  async function Stock() {
    await axios.get('api/sign/GetSignStock?signId=1')
        .then(function (response) {
            setSign1(response.data.stock)
        })
      await axios.get('api/sign/GetSignStock?signId=2')
          .then(function (response) {
              setSign2(response.data.stock)

          })
      await axios.get('api/sign/GetSignStock?signId=3')
          .then(function (response) {
              setSign3(response.data.stock)
          })
      await axios.get('api/sign/GetSignStock?signId=4')
          .then(function (response) {
              setSign4(response.data.stock)
          })
      await axios.get('api/sign/GetSignStock?signId=5')
          .then(function (response) {
              setSign5(response.data.stock)
          })
      await axios.get('api/sign/GetSignStock?signId=6')
          .then(function (response) {
              setSign6(response.data.stock)
          })
  }

  let history = useHistory();

    const hist = () => {
        history.push('/purchasehist');
    }

    return(
      <div className= "extend">
        <div>
          <h1 className= "title">Inventory management</h1>
          <h3 className= "label">In Stock:</h3>
            <button onClick={() => Stock()}>Sign Update</button>
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
                <div>{sign1}</div>
                <button onClick={() => increment1()}>+</button>
                <button onClick={() => decrement1()}>-</button>
                <div>{sign2}</div>
                <button onClick={() => increment2()}>+</button>
                <button onClick={() => decrement2()}>-</button>
                <div>{sign3}</div>
                <button onClick={() => increment3()}>+</button>
                <button onClick={() => decrement3()}>-</button>
                <div>{sign4}</div>
                <button onClick={() => increment4()}>+</button>
                <button onClick={() => decrement4()}>-</button>
                <div>{sign5}</div>
                <button onClick={() => increment5()}>+</button>
                <button onClick={() => decrement5()}>-</button>
                <div>{sign6}</div>
                <button onClick={() => increment6()}>+</button>
                <button onClick={() => decrement6()}>-</button>
            </div>
        </div>
        <button onClick = {hist}>Purchase History</button>
      </div>
    );
  }

export default Inventory;