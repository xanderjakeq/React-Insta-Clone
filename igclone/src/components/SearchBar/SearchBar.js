import React from 'react'

import * as Icons from 'react-feather'

const SearchBar = (props) => {
    return (
        <nav>
            <div>
                <Icons.Instagram size = {30}/>
            </div>
            <div>
                <input onChange ={props.handleSearch} value = {props.value}/>
            </div>
            <div className = "navIcons">
                <Icons.Compass/>
                <Icons.Heart/>
                <Icons.User/>
            </div>

        </nav>
    )
}

export default SearchBar
