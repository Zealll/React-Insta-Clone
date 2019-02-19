import React from 'react'

const SearchBar = props => {
    return (
        <div className='searchBar'>
            <img src='#' alt="instagram logo"></img>
            <form>
                <input placeholder='search'></input>
            </form>
            <div className='navigation'>
                <img src='#'alt='location'></img>
                <img src='#' alt='likes'></img>
                <img src='*' alt='profile'></img>
            </div>
        </div>
    )
}

export default SearchBar