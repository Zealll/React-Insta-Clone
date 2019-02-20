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
      likes: dummyData.likes
    }
  }

  addLikes = () => {
   this.setState({
     likes: this.state.likes + 1
   })
  }
  
  
  
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.data} likes={this.addLikes}/>
        
      </div>
    );
  }
}

export default App;
