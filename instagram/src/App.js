import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      data: dummyData,
    }
  }
  
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
            
          </p>
        </header>
      </div>
    );
  }
}

export default App;
