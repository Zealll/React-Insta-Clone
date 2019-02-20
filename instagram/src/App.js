import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor() {
    super();
    this.state ={
      data: [],
      filteredUsers: [],
      searchInput: [],
    }
  }

  componentDidMount(){
    this.setState({
      data: dummyData
    })
  }

  
   render() {
     console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.data}/>
      </div>
      
    );
  }
}

export default App;
