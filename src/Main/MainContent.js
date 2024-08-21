import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Widget from '../components/Widget';
import { useNavigate } from 'react-router-dom';
import RetroIcon from '../assets/w2k-computer Large.png'

function App() {
    const navigate = useNavigate();

    const handleAboutClick = () => {
      navigate('/about');
    };
  return (
    <React.Fragment>
      <Header />
      <div className="about__icon" onClick={handleAboutClick}>
        <img src={RetroIcon} alt="About Me" width={50} height={50} />
        <div>About Me</div>
      </div>
      <div className='background__main'></div>
      
      <Widget />

    </React.Fragment>
  );
}

export default App;
