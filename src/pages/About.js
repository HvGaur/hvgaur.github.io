import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <header className="headerr">
                <nav>
                    <ul>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </header>

            <div className="main-content">
                <div className="intro">
                    <h1>HI <span>THERE</span></h1>
                    <p>My friend. Welcome to my website. You can call me hv..</p>
                </div>

                <div className="image">
                    <img src="path_to_image" alt="hv" />
                </div>

                <div className="description">
                    <h2>[WHO I AM]</h2>
                    <p>Master Procrastinator. Daddy Joke Connoisseur...</p>
                    
                    <h2>[WHAT I OFFER]</h2>
                    <p>Bad Jokes. Fancy Art. Dope Photoshoots...</p>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-left">
                    <p>[EMAIL]</p>
                    <p>[SOCIAL]</p>
                    <p>[DEV BY]</p>
                </div>
                <div className="footer-right">
                    <p>2002</p>
                    <p>STILL ALIVE</p>
                </div>
            </footer>
        </div>
    );
}

export default About;
