import React, {Component} from 'react'
import styled from 'styled-components'

import * as Icons from 'react-feather'

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: @navHeight;
`;

const NavIcons = styled.div`
// I don't know how to style the icons... hmm
`;
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
            <Nav>           
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

            </Nav>
        )
    }
}

export default SearchBar
