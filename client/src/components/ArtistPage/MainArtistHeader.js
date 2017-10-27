import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import './css/MainArtistHeader.css';

const MainArtistHeader = props => {


  function handleFavoriteClick(e) {
    e.preventDefault();
      axios.post("/api/artist", {
        artist: props.artistName
      })
       console.log("favorite button clicked");
     }


   function handleUnfavoriteClick(e) {
     e.preventDefault();
     console.log('The link was UNCLICKED')
   }

  return (
    <div className="col-md-9 main-artist-container">
      <a href={props.artistUrl} target="_blank">
      <h1 className="artist-header">{props.artistName}</h1>
        <img className="main-artist-image" src={props.artistImage} alt={props.artistName}/>
      </a>

      <div className='bio'>
        <p className='bio-align'>{props.bio}...</p>
      </div>

        <br/>
        <br/>

      <div className='buttons'>
        <button onClick={handleFavoriteClick} className='fav-btn favs'><i className="fa fa-heart fa-1x" aria-hidden="true"></i> Favorite</button>
        <button type="button" className='tour-btn fav-btn favs' data-toggle='modal' data-target='#eventsModal'><i className="fa fa-calendar fa-1x" aria-hidden="true"></i> Tour Dates</button>
      </div>
    </div>
  )
}

export default MainArtistHeader;
