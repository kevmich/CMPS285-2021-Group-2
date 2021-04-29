import React, { useState, Component } from 'react';
import axios from 'axios';

const stocks = []

class Inventory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            url: "/api/sign/UpdateSignStock?signId=",
            temp: 0
        }
    }

    signIncrement = (id) => {
        this.setState({temp: id - 1})
        axios.put(this.state.url + id,
            {stock: this.state.stocks[this.state.temp] + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    signDecrement = (id) => {
        this.setState({temp: id - 1})
        axios.put(this.state.url + id,
            {stock: this.state.stocks[this.state.temp] - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    signUpdate = () => {
        axios.get('/api/sign/GetAllStock')
            .then(response => {
                this.setState({stocks: response.data.stock})
            })
    }

    componentDidMount() {
        axios.get('/api/sign/GetAllStock')
            .then(response => {
                console.log(response.data.stock)
                this.setState({stocks: response.data.stock})
                console.log(this.state.stocks)
            })
  }

    render(){
    return(
      <div className= "padding">
          <div className= "inventory">
              <h1 className= "title">Inventory management</h1>
              <div>
                  <div>
                      {this.state.stocks[0]}
                      <button onClick={() => this.signDecrement(1)}>-</button>
                      <button onClick={() => this.signIncrement(1)}>+</button>
                  </div>
                  <div>
                      {this.state.stocks[0]}
                      <button onClick={() => this.signDecrement(1)}>-</button>
                      <button onClick={() => this.signIncrement(1)}>+</button>
                  </div>
              </div>

          </div>
      </div>
    );
  }}

export default Inventory;