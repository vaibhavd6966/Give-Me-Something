// components/BirthdayWish.jsx
import React from 'react';
import './BirthdayWish.css';

const BirthdayWish = () => {
  return (
    <div className="birthday-container">
      {/* First Section */}
      <section className="wish-section">
        <div className="content-side">
          <div className="wish-text">
            <h1>Happy Birthday My Love!</h1>
            <p>
              To the one who makes my world brighter with every smile, 
              who turns ordinary moments into extraordinary memories, 
              and whose love makes every day feel like a celebration. 
              On your special day, I want you to know that you're not 
              just my girlfriend, but my best friend, my confidante, 
              and my greatest blessing.
            </p>
            <p>
              Your presence in my life has brought colors I never knew 
              existed, joy I never thought possible, and love that grows 
              deeper with each passing day. You deserve all the happiness 
              in the world, and I promise to spend every day trying to 
              give you just that.
            </p>
          </div>
        </div>
        <div className="video-side">
          {/* Replace src with your video URL */}
          <video autoPlay loop muted>
            <source src="/api/placeholder/video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Second Section */}
      <section className="journey-section">
        <h2>Birthday Journey with me</h2>
        <div className="birthday-cards">
          <div className="birthday-card">
            <h3>2023</h3>
            <p>Our first birthday celebration together. Remember how we danced under 
              the stars? That makeshift picnic in the park was perfect, just like 
              your smile when you saw the surprise. It was the beginning of our 
              beautiful journey of celebrating each other.</p>
          </div>
          
          <div className="birthday-card">
            <h3>2024</h3>
            <p>This year made us stronger and closer. From midnight surprises to 
              weekend getaways, every moment was magical. Your birthday brought us 
              even closer, and seeing your eyes light up with joy made my heart 
              skip a beat. Here's to growing together.</p>
          </div>
          
          <div className="birthday-card">
            <h3>2025</h3>
            <p>Looking forward to making this your most special birthday yet. 
              With each passing year, my love for you grows stronger. I promise 
              to make every birthday better than the last, filling your life with 
              endless joy, surprises, and countless reasons to smile.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthdayWish;