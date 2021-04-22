import React, { useState, Component } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap'

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
                      <p>Red signs</p>
                      {this.state.stock1}
                  </div>
                  <div>
                      <Button color="success" size="sm" onClick={this.increment1}>+</Button>
                      <Button color="danger" size="sm" onClick={this.decrement1}>-</Button>
                  </div>
                  <div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p>Orange signs</p>
                          {this.state.stock2}
                      </div>
                      <div>
                          <Button color="success" size="sm" onClick={this.increment2}>+</Button>
                          <Button color="danger" size="sm" onClick={this.decrement2}>-</Button>
                      </div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p>Yellow signs</p>
                          {this.state.stock3}
                      </div>
                      <div>
                          <Button color="success" size="sm" onClick={this.increment3}>+</Button>
                          <Button color="danger" size="sm" onClick={this.decrement3}>-</Button>
                      </div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p>Green signs</p>
                          {this.state.stock4}
                      </div>
                      <div>
                          <Button color="success" size="sm" onClick={this.increment4}>+</Button>
                          <Button color="danger" size="sm" onClick={this.decrement4}>-</Button>
                      </div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p>Blue signs</p>
                          {this.state.stock5}
                      </div>
                      <div>
                          <Button color="success" size="sm" onClick={this.increment5}>+</Button>
                          <Button color="danger" size="sm" onClick={this.decrement5}>-</Button>
                      </div>
                      <h3>_________________________________________</h3>
                      <div>
                          <p>Purple signs</p>
                          {this.state.stock6}
                      </div>
                      <div>
                          <Button color="success" size="sm" onClick={this.increment6}>+</Button>
                          <Button color="danger" size="sm" onClick={this.decrement6}>-</Button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }}

export default Inventory;