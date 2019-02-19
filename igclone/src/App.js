import React, { Component } from 'react';
import Proptypes from 'prop-types'
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar'
import PostsContainer from './components/PostsContainer/PostsContainer'

import dummyData from './dummy-data'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data : [] ,
      searchVal: '',
    }
  }

  componentDidMount(){
    this.setState({
      data: dummyData,
      prevData: dummyData
    })
  }

  /**
   * newComment is an object with username and text properties
   */
  addComment = (newComment,index) => {
    let updatePost = this.state.data[index]
    updatePost.comments.push(newComment)
    let updateData = this.state.data
    updateData.slice(index,1,updatePost)
    this.setState({
      data: updateData
    })
  }
  /**
   * takes index of a post and increment the number of likes
   */
  incrementLikes = (index) => {
    let post = this.state.data[index]
    post.likes = post.likes++
    post.likes = ++post.likes
    let updateData = this.state.data
    updateData.splice(index,1,post)
    this.setState({
      data: updateData
    })
  }

  handleSearch = (e) => {
    if(e.target.value !== ''){
      this.setState({
        data: this.state.data.filter(post => post.username.includes(e.target.value)),
        searchVal: e.target.value
      })
    }else{
      this.setState({
        data: this.state.prevData,
        searchVal: e.target.value
      })
    }
    
  }
  render() {
    return (
    <div className="App">
      <SearchBar handleSearch = {this.handleSearch} value = {this.state.searchVal}/>
      <PostsContainer data = {this.state.data} addComment = {this.addComment} incLikes = {this.incrementLikes}/>
	  </div>
    );
  }
}

export default App;
