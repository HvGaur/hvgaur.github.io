import React from 'react';
import './Widget.css';
import Smiley from '../assets/w98_utopia_smiley.png';
import AlbumArt from '../assets/cheatcodes.jpg';

const Widget = () => {
    


  return (
    <div className="widget">
      <div className="widget__icon">
      <img src={Smiley} alt="Smiley" width={40} height={40} className='smiley__icon' />
      </div>
      <div className='widget-text'>Hello!<br />this is my portfolio(kinda)</div>

      <div className="widget__content">
        cpu
        <div className="widget__progress-bar">
          <div className="widget__progress cpu" style={{ width: '15%' }}></div>
        </div>
      </div>
      <div className="widget__content">
        ram
        <div className="widget__progress-bar">
          <div className="widget__progress ram" style={{ width: '13%' }}></div>
        </div>
      </div>
      <div className="widget__content">
        vol
        <div className="widget__progress-bar">
          <div className="widget__progress vol" style={{ width: '77%' }}></div>
        </div>
      </div>


      <a href='https://open.spotify.com/album/4TPi1tGDVXCdQOjn4NSRaB' target="_blank" rel="noopener noreferrer">
      <div className="widget__now-playing">
        <img src={AlbumArt} alt="Album Art" className="album-art" />
        <div className="now-playing__info">
          <div className="track-name" style={{color: 'black'}}>Cheat Codes</div>
          <div className="artist-name">Black Thought</div>
        </div>
      </div>
        </a>
    </div>
  );
};

export default Widget;
