import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="images-container">
        <img src="/path/to/image1.jpg" alt="Item 1" className="welcome-image" />
        <img src="/path/to/image2.jpg" alt="Item 2" className="welcome-image" />
        <img src="/path/to/image3.jpg" alt="Item 3" className="welcome-image" />
        <img src="/path/to/image4.jpg" alt="Item 4" className="welcome-image" />
        <img src="/path/to/image5.jpg" alt="Item 5" className="welcome-image" />
      </div>
      <div className="content-container">
        <h1 className="app-title">Mercato</h1>
        <p className="description">Your Marketplace, Your Community!</p>
        <p className="description">Mercato!

Discover a world of endless possibilities! Connect with a diverse community to buy and sell electronics, furniture, properties, autos, and more. Embrace the market where everyone finds what they need!</p>
        <button className="login-button">Log In</button>
        <button className="signup-button">Create Account</button>
      </div>
    </div>
  );
};

export default Welcome;
