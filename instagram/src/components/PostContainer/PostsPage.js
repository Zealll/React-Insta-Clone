import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'

class PostsPage extends Component {
  constructor() {
    super();
    this.state ={
      data: [],
      filteredUsers: [],
      searchInput: '',
    }
  }

  componentDidMount() {
    this.setState({data: dummyData})
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchHandler = e => {
    this.changeHandler(e)
    this.setState((prevState) => {
      const filteredUsersArray =  prevState.data.filter(post => post.username.includes(prevState.searchInput))
      return {filteredUsers: filteredUsersArray}
    })
  }

  
   render() {
     console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler} searchInput={this.state.searchInput}/>
        <PostContainer data={this.state.filteredUsers.length > 0 ? this.state.filteredUsers : this.state.data}/>
      </div>
      
    );
  }
}

export default PostsPage;