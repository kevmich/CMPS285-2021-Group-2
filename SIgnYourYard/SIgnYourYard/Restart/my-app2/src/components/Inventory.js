import React, { useState, Component } from 'react';
import axios from 'axios';

class Inventory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            id: 0
        }
    }

    signUpdater = (url = '/api/sign/UpdateSignStock?signId=') => {
        axios.put(url + this.state.id)
            .then(response => {
                console.log(response)
            })
    }

    increment1 = () =>  {
        axios.put('/api/sign/UpdateSignStock?signId=1',
            {stock: this.state.stock1 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    increment2 = () =>  {
         axios.put('/api/sign/UpdateSignStock?signId=2',
            {stock: this.state.stock2 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
             .then(response => {
                 this.signUpdate()
             })
    }

    increment3 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=3',
            {stock: this.state.stock3 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    increment4 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=4',
            {stock: this.state.stock4 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    increment5 = () =>  {
        axios.put('/api/sign/UpdateSignStock?signId=5',
            {stock: this.state.stock5 + 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    increment6 = () => {
       axios.put('/api/sign/UpdateSignStock?signId=6',
           {stock: this.state.stock6 + 1,
               emoji: true,
               color: 'red',
               content: 'A'})
           .then(response => {
               this.signUpdate()
           })
    }



    decrement1 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=1',
            {stock: this.state.stock1 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    decrement2 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=2',
            {stock: this.state.stock2 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    decrement3 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=3',
            {stock: this.state.stock3 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    decrement4 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=4',
            {stock: this.state.stock4 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    decrement5 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=5',
            {stock: this.state.stock5 - 1,
                emoji: true,
                color: 'red',
                content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    decrement6 = () => {
        axios.put('/api/sign/UpdateSignStock?signId=6',
            {stock: this.state.stock6 - 1,
            emoji: true,
            color: 'red',
            content: 'A'})
            .then(response => {
                this.signUpdate()
            })
    }

    signUpdate = () => {
        axios.get('api/sign/GetSignStock?signId=1')
            .then(response => {
                this.setState({stock1: response.data.stock})
            })
        axios.get('api/sign/GetSignStock?signId=2')
            .then(response => {
                this.setState({stock2: response.data.stock})
            })
        axios.get('api/sign/GetSignStock?signId=3')
            .then(response => {
                this.setState({stock3: response.data.stock})
            })
        axios.get('api/sign/GetSignStock?signId=4')
            .then(response => {
                this.setState({stock4: response.data.stock})
            })
        axios.get('api/sign/GetSignStock?signId=5')
            .then(response => {
                this.setState({stock5: response.data.stock})
            })
        axios.get('api/sign/GetSignStock?signId=6')
            .then(response => {
                this.setState({stock6: response.data.stock})
            })
    }

    componentDidMount() {
        axios.get('/api/sign/GetAllStock')
            .then(response => {
                console.log(response)
                this.setState({stocks: response.data.stock})
            })
  }

    render(){
    return(
      <div className= "padding">
          <div className= "inventory">
              <h1 className= "title">Inventory management</h1>
              {this.state.stocks}
              <button onCLick={this.decrement6}>DO IT</button>
          </div>
      </div>
    );
  }}

export default Inventory;