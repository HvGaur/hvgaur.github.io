import React, { useState, useEffect } from 'react';
import './header.css';




const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

    return (
        <div className="header">


          <div className="wrapper__left">

            <div className="myname">HV</div>

            <div className="header__start">
            <a href="https://www.linkedin.com/in/harshvardhangaur11/" className="links" target="_blank" rel="noopener noreferrer">
          LinkedIn
            </a>
            </div>
            <div className="header__start">
            <a href="https://github.com/HvGaur" className="links" target="_blank" rel="noopener noreferrer">
          GitHub
            </a>
            </div>
            <div className="header__start">
            <a href="https://leetcode.com/u/vxrdhxn/" className="links" target="_blank" rel="noopener noreferrer">
          LeetCode
            </a>
            </div>

          </div>


        <div className="header__time">{formatTime(time)}</div>
      </div>
    );
};

export default Header; 