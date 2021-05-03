import React, { useState, Component } from 'react';
import axios from 'axios';

class Inventory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            stocks: [],
            url: "/api/sign/UpdateSignStock?signId=",
            temp: 0,
            id: 0,
            updater: false
        }
    }

    upperdate = () => {
        this.setState({updater: true})
    }

    tempIncrement = () => {
        axios.get('/api/sign/GetAllStock')
            .then(response => {
                axios.put(this.state.url + this.state.id,
                    {stock: this.state.stocks[this.state.temp] + 1,
                        emoji: true,
                        color: 'red',
                        content: 'A'})
            })
    }

    tempDecrement = () => {
        axios.get('/api/sign/GetAllStock')
            .then(response => {
                axios.put(this.state.url + this.state.id,
                    {stock: this.state.stocks[this.state.temp] - 1,
                        emoji: true,
                        color: 'red',
                        content: 'A'})
            })
    }

    signIncrement = (stoof) => {
        this.setState({id: stoof})
        this.setState({temp: stoof - 1})
        this.tempIncrement()
    }

    signDecrement = (stoof) => {
        this.setState({id: stoof})
        this.setState({temp: stoof - 1})
        this.tempDecrement()
    }

    componentDidUpdate = () => {
        axios.get('/api/sign/GetAllStock')
            .then(response => {
                this.setState({stocks: response.data.stock})
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        axios.get('/api/sign/GetAllStock')
            .then(response => {
                this.setState({stocks: response.data.stock})
                console.log(this.state.stocks)
            })
  }

    render(){
    return(
      <div className= "padding">
          <div className= "inventory">
              <h1 className= "title">Inventory management</h1>
              { (this.state.updater === true) ? (
                  <div className= "invmarg">
                      <div className="invsidebyside">
                          <div>
                              <p className= "samecolorb">l</p>
                          </div>
                              <div className= "latitude-Letter">
                                  <div className= "stonksl">
                                     <p>A</p>
                                 </div>
                                  <div className= "stonksl">
                                    <p>B</p>
                                 </div>
                                 <div className= "stonksl">
                                     <p>C</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>D</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>E</p>
                                 </div>
                                  <div className= "stonksl">
                                      <p>F</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>G</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>H</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>I</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>J</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>K</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>L</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>M</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>N</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>O</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>P</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>Q</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>R</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>S</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>T</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>U</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>V</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>W</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>X</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>Y</p>
                                  </div>
                                  <div className= "stonksl">
                                      <p>Z</p>
                                  </div>
                              </div>
                          <div className= "latitude-Red">
                              <div>
                                  <p>Red</p>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[0]}
                                  <button onClick={() => this.signDecrement(1)}>-</button>
                                  <button onClick={() => this.signIncrement(1)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[1]}
                                  <button onClick={() => this.signDecrement(2)}>-</button>
                                  <button onClick={() => this.signIncrement(2)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[2]}
                                  <button onClick={() => this.signDecrement(3)}>-</button>
                                  <button onClick={() => this.signIncrement(3)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[3]}
                                  <button onClick={() => this.signDecrement(4)}>-</button>
                                  <button onClick={() => this.signIncrement(4)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[4]}
                                  <button onClick={() => this.signDecrement(5)}>-</button>
                                  <button onClick={() => this.signIncrement(5)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[5]}
                                  <button onClick={() => this.signDecrement(6)}>-</button>
                                  <button onClick={() => this.signIncrement(6)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[6]}
                                  <button onClick={() => this.signDecrement(7)}>-</button>
                                  <button onClick={() => this.signIncrement(7)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[7]}
                                  <button onClick={() => this.signDecrement(8)}>-</button>
                                  <button onClick={() => this.signIncrement(8)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[8]}
                                  <button onClick={() => this.signDecrement(9)}>-</button>
                                  <button onClick={() => this.signIncrement(9)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[9]}
                                  <button onClick={() => this.signDecrement(10)}>-</button>
                                  <button onClick={() => this.signIncrement(10)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[10]}
                                  <button onClick={() => this.signDecrement(11)}>-</button>
                                  <button onClick={() => this.signIncrement(11)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[11]}
                                  <button onClick={() => this.signDecrement(12)}>-</button>
                                  <button onClick={() => this.signIncrement(12)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[12]}
                                  <button onClick={() => this.signDecrement(13)}>-</button>
                                  <button onClick={() => this.signIncrement(13)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[13]}
                                  <button onClick={() => this.signDecrement(14)}>-</button>
                                  <button onClick={() => this.signIncrement(14)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[14]}
                                  <button onClick={() => this.signDecrement(15)}>-</button>
                                  <button onClick={() => this.signIncrement(15)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[15]}
                                  <button onClick={() => this.signDecrement(16)}>-</button>
                                  <button onClick={() => this.signIncrement(16)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[16]}
                                  <button onClick={() => this.signDecrement(17)}>-</button>
                                  <button onClick={() => this.signIncrement(17)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[17]}
                                  <button onClick={() => this.signDecrement(18)}>-</button>
                                  <button onClick={() => this.signIncrement(18)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[18]}
                                  <button onClick={() => this.signDecrement(19)}>-</button>
                                  <button onClick={() => this.signIncrement(19)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[19]}
                                  <button onClick={() => this.signDecrement(20)}>-</button>
                                  <button onClick={() => this.signIncrement(20)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[20]}
                                  <button onClick={() => this.signDecrement(21)}>-</button>
                                  <button onClick={() => this.signIncrement(21)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[21]}
                                  <button onClick={() => this.signDecrement(22)}>-</button>
                                  <button onClick={() => this.signIncrement(22)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[22]}
                                  <button onClick={() => this.signDecrement(23)}>-</button>
                                  <button onClick={() => this.signIncrement(23)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[23]}
                                  <button onClick={() => this.signDecrement(24)}>-</button>
                                  <button onClick={() => this.signIncrement(24)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[24]}
                                  <button onClick={() => this.signDecrement(25)}>-</button>
                                  <button onClick={() => this.signIncrement(25)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[25]}
                                  <button onClick={() => this.signDecrement(26)}>-</button>
                                  <button onClick={() => this.signIncrement(26)}>+</button>
                              </div>
                          </div>
                          <div className= "latitude-Orange">
                              <div>
                                  <p>Orange</p>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[26]}
                                  <button onClick={() => this.signDecrement(27)}>-</button>
                                  <button onClick={() => this.signIncrement(27)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[27]}
                                  <button onClick={() => this.signDecrement(28)}>-</button>
                                  <button onClick={() => this.signIncrement(28)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[28]}
                                  <button onClick={() => this.signDecrement(29)}>-</button>
                                  <button onClick={() => this.signIncrement(29)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[29]}
                                  <button onClick={() => this.signDecrement(30)}>-</button>
                                  <button onClick={() => this.signIncrement(30)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[30]}
                                  <button onClick={() => this.signDecrement(31)}>-</button>
                                  <button onClick={() => this.signIncrement(31)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[31]}
                                  <button onClick={() => this.signDecrement(32)}>-</button>
                                  <button onClick={() => this.signIncrement(32)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[32]}
                                  <button onClick={() => this.signDecrement(33)}>-</button>
                                  <button onClick={() => this.signIncrement(33)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[33]}
                                  <button onClick={() => this.signDecrement(34)}>-</button>
                                  <button onClick={() => this.signIncrement(34)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[34]}
                                  <button onClick={() => this.signDecrement(35)}>-</button>
                                  <button onClick={() => this.signIncrement(35)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[35]}
                                  <button onClick={() => this.signDecrement(36)}>-</button>
                                  <button onClick={() => this.signIncrement(36)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[36]}
                                  <button onClick={() => this.signDecrement(37)}>-</button>
                                  <button onClick={() => this.signIncrement(37)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[37]}
                                  <button onClick={() => this.signDecrement(38)}>-</button>
                                  <button onClick={() => this.signIncrement(38)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[38]}
                                  <button onClick={() => this.signDecrement(39)}>-</button>
                                  <button onClick={() => this.signIncrement(39)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[39]}
                                  <button onClick={() => this.signDecrement(40)}>-</button>
                                  <button onClick={() => this.signIncrement(40)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[40]}
                                  <button onClick={() => this.signDecrement(41)}>-</button>
                                  <button onClick={() => this.signIncrement(41)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[41]}
                                  <button onClick={() => this.signDecrement(42)}>-</button>
                                  <button onClick={() => this.signIncrement(42)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[42]}
                                  <button onClick={() => this.signDecrement(43)}>-</button>
                                  <button onClick={() => this.signIncrement(43)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[43]}
                                  <button onClick={() => this.signDecrement(44)}>-</button>
                                  <button onClick={() => this.signIncrement(44)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[44]}
                                  <button onClick={() => this.signDecrement(45)}>-</button>
                                  <button onClick={() => this.signIncrement(45)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[45]}
                                  <button onClick={() => this.signDecrement(46)}>-</button>
                                  <button onClick={() => this.signIncrement(46)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[46]}
                                  <button onClick={() => this.signDecrement(47)}>-</button>
                                  <button onClick={() => this.signIncrement(47)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[47]}
                                  <button onClick={() => this.signDecrement(48)}>-</button>
                                  <button onClick={() => this.signIncrement(48)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[48]}
                                  <button onClick={() => this.signDecrement(49)}>-</button>
                                  <button onClick={() => this.signIncrement(49)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[49]}
                                  <button onClick={() => this.signDecrement(50)}>-</button>
                                  <button onClick={() => this.signIncrement(50)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[50]}
                                  <button onClick={() => this.signDecrement(51)}>-</button>
                                  <button onClick={() => this.signIncrement(51)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[51]}
                                  <button onClick={() => this.signDecrement(52)}>-</button>
                                  <button onClick={() => this.signIncrement(52)}>+</button>
                              </div>
                          </div>
                          <div className= "latitude-Yellow">
                              <div>
                                  <p>Yellow</p>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[52]}
                                  <button onClick={() => this.signDecrement(53)}>-</button>
                                  <button onClick={() => this.signIncrement(53)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[53]}
                                  <button onClick={() => this.signDecrement(54)}>-</button>
                                  <button onClick={() => this.signIncrement(54)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[54]}
                                  <button onClick={() => this.signDecrement(55)}>-</button>
                                  <button onClick={() => this.signIncrement(55)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[55]}
                                  <button onClick={() => this.signDecrement(56)}>-</button>
                                  <button onClick={() => this.signIncrement(56)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[56]}
                                  <button onClick={() => this.signDecrement(57)}>-</button>
                                  <button onClick={() => this.signIncrement(57)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[57]}
                                  <button onClick={() => this.signDecrement(58)}>-</button>
                                  <button onClick={() => this.signIncrement(58)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[58]}
                                  <button onClick={() => this.signDecrement(59)}>-</button>
                                  <button onClick={() => this.signIncrement(59)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[59]}
                                  <button onClick={() => this.signDecrement(60)}>-</button>
                                  <button onClick={() => this.signIncrement(60)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[60]}
                                  <button onClick={() => this.signDecrement(61)}>-</button>
                                  <button onClick={() => this.signIncrement(61)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[61]}
                                  <button onClick={() => this.signDecrement(62)}>-</button>
                                  <button onClick={() => this.signIncrement(62)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[62]}
                                  <button onClick={() => this.signDecrement(63)}>-</button>
                                  <button onClick={() => this.signIncrement(63)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[63]}
                                  <button onClick={() => this.signDecrement(64)}>-</button>
                                  <button onClick={() => this.signIncrement(64)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[64]}
                                  <button onClick={() => this.signDecrement(65)}>-</button>
                                  <button onClick={() => this.signIncrement(65)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[65]}
                                  <button onClick={() => this.signDecrement(66)}>-</button>
                                  <button onClick={() => this.signIncrement(66)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[66]}
                                  <button onClick={() => this.signDecrement(67)}>-</button>
                                  <button onClick={() => this.signIncrement(67)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[67]}
                                  <button onClick={() => this.signDecrement(68)}>-</button>
                                  <button onClick={() => this.signIncrement(68)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[68]}
                                  <button onClick={() => this.signDecrement(69)}>-</button>
                                  <button onClick={() => this.signIncrement(69)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[69]}
                                  <button onClick={() => this.signDecrement(70)}>-</button>
                                  <button onClick={() => this.signIncrement(70)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[70]}
                                  <button onClick={() => this.signDecrement(71)}>-</button>
                                  <button onClick={() => this.signIncrement(71)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[71]}
                                  <button onClick={() => this.signDecrement(72)}>-</button>
                                  <button onClick={() => this.signIncrement(72)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[72]}
                                  <button onClick={() => this.signDecrement(73)}>-</button>
                                  <button onClick={() => this.signIncrement(73)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[73]}
                                  <button onClick={() => this.signDecrement(74)}>-</button>
                                  <button onClick={() => this.signIncrement(74)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[74]}
                                  <button onClick={() => this.signDecrement(75)}>-</button>
                                  <button onClick={() => this.signIncrement(75)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[75]}
                                  <button onClick={() => this.signDecrement(76)}>-</button>
                                  <button onClick={() => this.signIncrement(76)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[76]}
                                  <button onClick={() => this.signDecrement(77)}>-</button>
                                  <button onClick={() => this.signIncrement(77)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[77]}
                                  <button onClick={() => this.signDecrement(78)}>-</button>
                                  <button onClick={() => this.signIncrement(78)}>+</button>
                              </div>
                          </div>
                          <div className= "latitude-Green">
                              <div>
                                  <p>Green</p>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[78]}
                                  <button onClick={() => this.signDecrement(79)}>-</button>
                                  <button onClick={() => this.signIncrement(79)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[79]}
                                  <button onClick={() => this.signDecrement(80)}>-</button>
                                  <button onClick={() => this.signIncrement(80)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[80]}
                                  <button onClick={() => this.signDecrement(81)}>-</button>
                                  <button onClick={() => this.signIncrement(81)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[81]}
                                  <button onClick={() => this.signDecrement(82)}>-</button>
                                  <button onClick={() => this.signIncrement(82)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[82]}
                                  <button onClick={() => this.signDecrement(83)}>-</button>
                                  <button onClick={() => this.signIncrement(83)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[83]}
                                  <button onClick={() => this.signDecrement(84)}>-</button>
                                  <button onClick={() => this.signIncrement(84)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[84]}
                                  <button onClick={() => this.signDecrement(85)}>-</button>
                                  <button onClick={() => this.signIncrement(85)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[85]}
                                  <button onClick={() => this.signDecrement(86)}>-</button>
                                  <button onClick={() => this.signIncrement(86)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[86]}
                                  <button onClick={() => this.signDecrement(87)}>-</button>
                                  <button onClick={() => this.signIncrement(87)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[87]}
                                  <button onClick={() => this.signDecrement(88)}>-</button>
                                  <button onClick={() => this.signIncrement(88)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[88]}
                                  <button onClick={() => this.signDecrement(89)}>-</button>
                                  <button onClick={() => this.signIncrement(89)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[89]}
                                  <button onClick={() => this.signDecrement(90)}>-</button>
                                  <button onClick={() => this.signIncrement(90)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[90]}
                                  <button onClick={() => this.signDecrement(91)}>-</button>
                                  <button onClick={() => this.signIncrement(91)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[91]}
                                  <button onClick={() => this.signDecrement(92)}>-</button>
                                  <button onClick={() => this.signIncrement(92)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[92]}
                                  <button onClick={() => this.signDecrement(93)}>-</button>
                                  <button onClick={() => this.signIncrement(93)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[93]}
                                  <button onClick={() => this.signDecrement(94)}>-</button>
                                  <button onClick={() => this.signIncrement(94)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[94]}
                                  <button onClick={() => this.signDecrement(95)}>-</button>
                                  <button onClick={() => this.signIncrement(95)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[95]}
                                  <button onClick={() => this.signDecrement(96)}>-</button>
                                  <button onClick={() => this.signIncrement(96)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[96]}
                                  <button onClick={() => this.signDecrement(97)}>-</button>
                                  <button onClick={() => this.signIncrement(97)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[97]}
                                  <button onClick={() => this.signDecrement(98)}>-</button>
                                  <button onClick={() => this.signIncrement(98)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[98]}
                                  <button onClick={() => this.signDecrement(99)}>-</button>
                                  <button onClick={() => this.signIncrement(99)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[99]}
                                  <button onClick={() => this.signDecrement(100)}>-</button>
                                  <button onClick={() => this.signIncrement(100)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[100]}
                                  <button onClick={() => this.signDecrement(101)}>-</button>
                                  <button onClick={() => this.signIncrement(101)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[101]}
                                  <button onClick={() => this.signDecrement(102)}>-</button>
                                  <button onClick={() => this.signIncrement(102)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[102]}
                                  <button onClick={() => this.signDecrement(103)}>-</button>
                                  <button onClick={() => this.signIncrement(103)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[103]}
                                  <button onClick={() => this.signDecrement(104)}>-</button>
                                  <button onClick={() => this.signIncrement(104)}>+</button>
                              </div>
                          </div>
                          <div className= "latitude-Blue">
                              <div>
                                  <p>Blue</p>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[104]}
                                  <button onClick={() => this.signDecrement(105)}>-</button>
                                  <button onClick={() => this.signIncrement(105)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[105]}
                                  <button onClick={() => this.signDecrement(106)}>-</button>
                                  <button onClick={() => this.signIncrement(106)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[106]}
                                  <button onClick={() => this.signDecrement(107)}>-</button>
                                  <button onClick={() => this.signIncrement(107)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[107]}
                                  <button onClick={() => this.signDecrement(108)}>-</button>
                                  <button onClick={() => this.signIncrement(108)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[108]}
                                  <button onClick={() => this.signDecrement(109)}>-</button>
                                  <button onClick={() => this.signIncrement(109)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[109]}
                                  <button onClick={() => this.signDecrement(110)}>-</button>
                                  <button onClick={() => this.signIncrement(110)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[110]}
                                  <button onClick={() => this.signDecrement(111)}>-</button>
                                  <button onClick={() => this.signIncrement(111)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[111]}
                                  <button onClick={() => this.signDecrement(112)}>-</button>
                                  <button onClick={() => this.signIncrement(112)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[112]}
                                  <button onClick={() => this.signDecrement(113)}>-</button>
                                  <button onClick={() => this.signIncrement(113)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[113]}
                                  <button onClick={() => this.signDecrement(114)}>-</button>
                                  <button onClick={() => this.signIncrement(114)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[114]}
                                  <button onClick={() => this.signDecrement(115)}>-</button>
                                  <button onClick={() => this.signIncrement(115)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[115]}
                                  <button onClick={() => this.signDecrement(116)}>-</button>
                                  <button onClick={() => this.signIncrement(116)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[116]}
                                  <button onClick={() => this.signDecrement(117)}>-</button>
                                  <button onClick={() => this.signIncrement(117)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[117]}
                                  <button onClick={() => this.signDecrement(118)}>-</button>
                                  <button onClick={() => this.signIncrement(118)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[118]}
                                  <button onClick={() => this.signDecrement(119)}>-</button>
                                  <button onClick={() => this.signIncrement(119)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[119]}
                                  <button onClick={() => this.signDecrement(120)}>-</button>
                                  <button onClick={() => this.signIncrement(120)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[120]}
                                  <button onClick={() => this.signDecrement(121)}>-</button>
                                  <button onClick={() => this.signIncrement(121)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[121]}
                                  <button onClick={() => this.signDecrement(122)}>-</button>
                                  <button onClick={() => this.signIncrement(122)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[122]}
                                  <button onClick={() => this.signDecrement(123)}>-</button>
                                  <button onClick={() => this.signIncrement(123)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[123]}
                                  <button onClick={() => this.signDecrement(124)}>-</button>
                                  <button onClick={() => this.signIncrement(124)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[124]}
                                  <button onClick={() => this.signDecrement(125)}>-</button>
                                  <button onClick={() => this.signIncrement(125)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[125]}
                                  <button onClick={() => this.signDecrement(126)}>-</button>
                                  <button onClick={() => this.signIncrement(126)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[126]}
                                  <button onClick={() => this.signDecrement(127)}>-</button>
                                  <button onClick={() => this.signIncrement(127)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[127]}
                                  <button onClick={() => this.signDecrement(128)}>-</button>
                                  <button onClick={() => this.signIncrement(128)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[128]}
                                  <button onClick={() => this.signDecrement(129)}>-</button>
                                  <button onClick={() => this.signIncrement(129)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[129]}
                                  <button onClick={() => this.signDecrement(130)}>-</button>
                                  <button onClick={() => this.signIncrement(130)}>+</button>
                              </div>
                          </div>
                          <div className= "latitude-Purple">
                              <div>
                                  <p>Purple</p>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[130]}
                                  <button onClick={() => this.signDecrement(131)}>-</button>
                                  <button onClick={() => this.signIncrement(131)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[131]}
                                  <button onClick={() => this.signDecrement(132)}>-</button>
                                  <button onClick={() => this.signIncrement(132)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[132]}
                                  <button onClick={() => this.signDecrement(133)}>-</button>
                                  <button onClick={() => this.signIncrement(133)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[133]}
                                  <button onClick={() => this.signDecrement(134)}>-</button>
                                  <button onClick={() => this.signIncrement(134)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[134]}
                                  <button onClick={() => this.signDecrement(135)}>-</button>
                                  <button onClick={() => this.signIncrement(135)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[135]}
                                  <button onClick={() => this.signDecrement(136)}>-</button>
                                  <button onClick={() => this.signIncrement(136)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[136]}
                                  <button onClick={() => this.signDecrement(137)}>-</button>
                                  <button onClick={() => this.signIncrement(137)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[137]}
                                  <button onClick={() => this.signDecrement(138)}>-</button>
                                  <button onClick={() => this.signIncrement(138)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[138]}
                                  <button onClick={() => this.signDecrement(139)}>-</button>
                                  <button onClick={() => this.signIncrement(139)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[139]}
                                  <button onClick={() => this.signDecrement(140)}>-</button>
                                  <button onClick={() => this.signIncrement(140)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[140]}
                                  <button onClick={() => this.signDecrement(141)}>-</button>
                                  <button onClick={() => this.signIncrement(141)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[141]}
                                  <button onClick={() => this.signDecrement(142)}>-</button>
                                  <button onClick={() => this.signIncrement(142)}>+</button>
                             </div>
                              <div className= "stonks">
                                  {this.state.stocks[142]}
                                  <button onClick={() => this.signDecrement(143)}>-</button>
                                  <button onClick={() => this.signIncrement(143)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[143]}
                                  <button onClick={() => this.signDecrement(144)}>-</button>
                                  <button onClick={() => this.signIncrement(144)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[144]}
                                  <button onClick={() => this.signDecrement(145)}>-</button>
                                  <button onClick={() => this.signIncrement(145)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[145]}
                                  <button onClick={() => this.signDecrement(146)}>-</button>
                                  <button onClick={() => this.signIncrement(146)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[146]}
                                  <button onClick={() => this.signDecrement(147)}>-</button>
                                  <button onClick={() => this.signIncrement(147)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[147]}
                                  <button onClick={() => this.signDecrement(148)}>-</button>
                                  <button onClick={() => this.signIncrement(148)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[148]}
                                  <button onClick={() => this.signDecrement(149)}>-</button>
                                  <button onClick={() => this.signIncrement(149)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[149]}
                                  <button onClick={() => this.signDecrement(150)}>-</button>
                                  <button onClick={() => this.signIncrement(150)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[150]}
                                  <button onClick={() => this.signDecrement(151)}>-</button>
                                  <button onClick={() => this.signIncrement(151)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[151]}
                                  <button onClick={() => this.signDecrement(152)}>-</button>
                                  <button onClick={() => this.signIncrement(152)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[152]}
                                  <button onClick={() => this.signDecrement(153)}>-</button>
                                  <button onClick={() => this.signIncrement(153)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[153]}
                                  <button onClick={() => this.signDecrement(154)}>-</button>
                                  <button onClick={() => this.signIncrement(154)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[154]}
                                  <button onClick={() => this.signDecrement(155)}>-</button>
                                  <button onClick={() => this.signIncrement(155)}>+</button>
                              </div>
                              <div className= "stonks">
                                  {this.state.stocks[155]}
                                  <button onClick={() => this.signDecrement(156)}>-</button>
                                  <button onClick={() => this.signIncrement(156)}>+</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  ) : (<button className= "whitetext" onClick={this.upperdate}>Update Stock?</button>)}
          </div>
      </div>
    );
  }}

export default Inventory;