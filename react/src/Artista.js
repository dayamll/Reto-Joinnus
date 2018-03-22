import React, { Component } from 'react';
import './Artista.css';

class Artista extends Component {
  render() {

    const {img,artista,fecha} = this.props.user;

    return (
      <div className="music-card"> 
            <div className="music-card-image">
                <img src={img} alt={artista} />
            </div>
            <div className="music-card-content">   
                <h3 className = "music-title-artist">{artista}</h3> 
                <p>{fecha}</p>
            </div>
        </div>
    );
  }
}

export default Artista;
