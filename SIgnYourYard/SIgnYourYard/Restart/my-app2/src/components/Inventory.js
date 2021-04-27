import React, { useState, Component } from 'react';
import axios from 'axios';

class Inventory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            stock1: 0,
            stock2: 0,
            stock3: 0,
            stock4: 0,
            stock5: 0,
            stock6: 0,
        }

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

  //let history = useHistory();

    //const hist = () => {
    //    history.push('/purchasehist');
   // }
    render(){
    return(
      <div className= "padding">
          <div className= "inventory">
              <h1>Inventory management</h1>
              <div>
                  <div>
                      <p className= "redSign">Red signs</p>
                      {this.state.stock1}
                  </div>
                  <div className= "signs">
                      <div>
                          <button className= "redSign" onClick={this.increment1}>+</button>
                      </div>
                      <div>
                          <button className= "redSign" onClick={this.decrement1}>-</button>
                      </div>
                  </div>
                  <div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p className= "orangeSign">Orange signs</p>
                          {this.state.stock2}
                      </div>
                      <div className= "signs">
                          <button className= "orangeSign" onClick={this.increment2}>+</button>
                          <button className= "orangeSign" onClick={this.decrement2}>-</button>
                      </div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p className= "yellowSign">Yellow signs</p>
                          {this.state.stock3}
                      </div>
                      <div>
                          <button className= "yellowSign" onClick={this.increment3}>+</button>
                          <button className= "yellowSign" onClick={this.decrement3}>-</button>
                      </div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p className= "greenSign">Green signs</p>
                          {this.state.stock4}
                      </div>
                      <div className= "signs">
                          <button className= "greenSign" onClick={this.increment4}>+</button>
                          <button className= "greenSign" onClick={this.decrement4}>-</button>
                      </div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p className= "blueSign">Blue signs</p>
                          {this.state.stock5}
                      </div>
                      <div className= "signs">
                          <button className= "blueSign" onClick={this.increment5}>+</button>
                          <button className= "blueSign" onClick={this.decrement5}>-</button>
                      </div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p className= "purpleSign">Purple signs</p>
                          {this.state.stock6}
                      </div>
                      <div className= "signs">
                          <button className= "purpleSign" onClick={this.increment6}>+</button>
                          <button className= "purpleSign" onClick={this.decrement6}>-</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }}

export default Inventory;