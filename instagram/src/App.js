import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {}
  }


  
  
   render() {
     console.log(this.state.data)
    return (
      <div className="App">
      <PostsPage />
        
      </div>
      
    );
  }
}

export default App;
