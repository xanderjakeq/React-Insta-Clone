import React, {Component} from 'react'
import Fuse from 'fuse.js'
import '../App.css';

import SearchBar from './SearchBar/SearchBar'
import PostsContainer from './PostsContainer/PostsContainer'

import dummyData from '../dummy-data'

class PostsPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      data : [] ,
      results : [],
      currentUser : window.localStorage.getItem('username')
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
    updatePost.comments.push({username: this.state.currentUser, text: newComment})
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
   *  isSearching - to indicate searching
   */
  handleSearch = (searchTerm) => {
      this.setState({
        results : this.state.fuse.search(searchTerm),
        isSearching: searchTerm.length > 0
      })
  }
  handleLogOut = () => {
      window.localStorage.removeItem('username')
      window.location.reload()
  }
  render() {
    return (
    <div className="App">
      <SearchBar logout = {this.handleLogOut} handleSearch = {this.handleSearch} value = {this.state.searchVal}/>
      <PostsContainer data = {this.state.isSearching ? this.state.results : this.state.data} addComment = {this.addComment} incLikes = {this.incrementLikes}/>
	  </div>
    );
  }
}

export default PostsPage