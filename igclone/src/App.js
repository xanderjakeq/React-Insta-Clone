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
      data : dummyData
    }
  }
  render() {
    return (
    <div className="App">
      <SearchBar/>
      <PostsContainer data = {this.state.data}/>
	  </div>
    );
  }
}

export default App;
