import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

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
        <SearchBar />
        <PostContainer data={this.state.data} likes={this.likes}/>
      </div>
      
    );
  }
}

export default App;
