import React,{Component} from 'react';
import Counter from "./Counter";
import './App.css';

class App extends Component {
  render() {
    return(
      <div className = "App">
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
}

export default App;
