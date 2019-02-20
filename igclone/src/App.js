import React, { Component } from 'react';
import Fuse from 'fuse.js'
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
      results : []
    }
  }

  componentDidMount(){
      let options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "username",
        ]
      };
    this.setState({
      data: dummyData,
      fuse: new Fuse(dummyData, options)
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
    post.likes = ++post.likes
    let updateData = this.state.data
    updateData.splice(index,1,post)
    this.setState({
      data: updateData
    })
  }
  /**
   * search the posts 
   * will setState 
   *  results - render the search results
   *  searchLen - to indicate searching
   */
  handleSearch = (searchTerm) => {
      this.setState({
        results : this.state.fuse.search(searchTerm),
        searchLen : searchTerm.length
      })
  }
  render() {
    return (
    <div className="App">
      <SearchBar handleSearch = {this.handleSearch} value = {this.state.searchVal}/>
      <PostsContainer data = {this.state.searchLen ? this.state.results : this.state.data} addComment = {this.addComment} incLikes = {this.incrementLikes}/>
	  </div>
    );
  }
}

export default App;
