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
      data : [] 
    }
  }

  componentDidMount(){
    this.setState({
      data: dummyData
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
  render() {
    return (
    <div className="App">
      <SearchBar/>
      <PostsContainer data = {this.state.data} addComment = {this.addComment} incLikes = {this.incrementLikes}/>
	  </div>
    );
  }
}

export default App;
