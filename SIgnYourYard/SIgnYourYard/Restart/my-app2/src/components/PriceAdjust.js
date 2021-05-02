import React, { useState, Component } from 'react'
import {Button} from "reactstrap";
import axios from 'axios';

function PriceAdjust() {

    const [details, setDetails] = useState({price1:0.0, price2:0.0, price3:0.0, price4:0.0})

    const submitHandler1 = e => {
        e.preventDefault();
        put1(details);
    }
    const submitHandler2 = e => {
        e.preventDefault();
        put2(details);
    }
    const submitHandler3 = e => {
        e.preventDefault();
        put3(details);
    }
    const submitHandler4 = e => {
        e.preventDefault();
        put4(details);
    }

     const put1 = (details) => {
        axios.put('/api/salesPackage/UpdateSalesPackage?id=1', {
            price: details.price1
          })
        .then(response=>{console.log(response)})
      }
      const put2= (details) => {
        axios.put('/api/salesPackage/UpdateSalesPackage?id=2', {
            price: details.price2
          })
      }
      const put3= (details) => {
        axios.put('/api/salesPackage/UpdateSalesPackage?id=3', {
            price: details.price3
          })
      }
      const put4= (details) => {
        axios.put('/api/salesPackage/UpdateSalesPackage?id=4', {
            price: details.price4
          })
      }
    
        return (
            <div className= "extend">
                <div className="buffer">
                    <div className="form-inner"></div>
                     <form onSubmit={submitHandler1}>
                      <label>
                        Price:
                        <input type="int" onChange={e => setDetails({...details, price1: e.target.value})} />
                    </label>
                    <input type="submit" value="Submit" />
                   </form>
                   <form onSubmit={submitHandler2}>
                      <label>
                        Price:
                        <input type="int" onChange={e => setDetails({...details, price2: e.target.value})} />
                    </label>
                    <input type="submit" value="Submit" />
                   </form>
                   <form onSubmit={submitHandler3}>
                      <label>
                        Price:
                        <input type="int" onChange={e => setDetails({...details, price3: e.target.value})} />
                    </label>
                    <input type="submit" value="Submit" />
                   </form>
                   <form onSubmit={submitHandler4}>
                      <label>
                        Price:
                        <input type="int" onChange={e => setDetails({...details, price4: e.target.value})} />
                    </label>
                    <input type="submit" value="Submit" />
                   </form>
                </div>
            </div>
        );
      }
    

export default PriceAdjust
