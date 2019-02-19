import React from 'react'
import './SearchBar.css'
import Instagramlogo from './images/Instagramlogo.PNG'
import likebutton from './images/likebutton.PNG'
import profilebutton from './images/profilebutton.PNG'
import ftht from './images/ftht.PNG'

const SearchBar = props => {
    return (
        <div className='searchBar'>
            <img src={Instagramlogo} className='instagramLogo' alt="instagram logo"></img>
            <form>
                <input placeholder='search'></input>
            </form>
            <div className='navigation'>
                <img src={ftht} className='locationButton' alt='location'></img>
                <img src={likebutton} className='likeButton' alt='likes'></img>
                <img src={profilebutton} className='profileButton' alt='profile'></img>
            </div>
        </div>
    )
}

export default SearchBar