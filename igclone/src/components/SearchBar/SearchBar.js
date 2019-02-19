import React from 'react'

import * as Icons from 'react-feather'

const SearchBar = () => {
    return (
        <nav>
            <div>
                <Icons.Instagram size = {30}/>
            </div>
            <div>
                <input/>
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