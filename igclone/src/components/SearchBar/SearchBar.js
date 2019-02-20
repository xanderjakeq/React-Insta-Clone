import React, {Component} from 'react'

import * as Icons from 'react-feather'

class SearchBar extends Component {
    state = {
        searchVal: ''
    }

    /**
     * handle search bar input
     * Calls handle search from App component
     */
    handleChange = e => {
        this.setState({
            searchVal: e.target.value
        })

        this.props.handleSearch(e.target.value)
    }
    render(){
        return (
            <nav>
                <div>
                    <Icons.Instagram size = {30}/>
                </div>
                <div>
                    <input onChange ={this.handleChange} value = {this.state.searchVal}/>
                </div>
                <div className = "navIcons">
                    <Icons.Compass/>
                    <Icons.Heart/>
                    <Icons.User onClick = {() => this.props.logout()}/>
                </div>

            </nav>
        )
    }
}

export default SearchBar
