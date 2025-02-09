import { useState } from 'react';
import './Home.css';

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/img/bg1.jpg',
    '/img/bg22.jpg',
    '/img/bg3.jpg',
    '/img/bg4.jpg',
    '/img/bg5.jpg',
    '/img/bg6.jpg',
    '/img/bg7.jpeg'

  ];

  const handleImageChange = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <div className="home-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`
        }}
      />
      
      <div className="overlay" />
      
      <div className="content-container">
        <div className="text-container">
          <h1 className="romantic-text">
            You must be a magician,
          </h1>
          <h1 className="romantic-text">
            because whenever I look at you, everyone else disappears.
          </h1>
        </div>
        
        <button
          onClick={handleImageChange}
          className="change-button"
        >
          Change Background
        </button>
      </div>
    </div>
  );
};

export default HomePage;