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
            <source src="/songs/video2.mp4" type="video/mp4" />
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
            <p>Do you remember our first birthday together? Celebrating you felt magical, and sharing laughs with Siddhi made it even more special (you still owe me a party! 😉). That day, I realized how much I love seeing you happy your smile, your laughter, your sparkle. Your birthday became just as important to me as mine. You are my world, my happiness, my love forever, and I can't wait for many more. ❤️✨</p>
          </div>
          
          <div className="birthday-card">
            <h3>2024</h3>
            <p>Do you remember your last birthday? Being with you, celebrating you, made it unforgettable. I still cherish the fun, the laughter, and every little moment. And yes, I was late sorry for that but every second with you was perfect. You mean the world to me, and I just want to keep making you feel as special as you are. ❤️</p>
          </div>
          
          <div className="birthday-card">
            <h3>2025</h3>
            <p><center>Happy Birthday, my love! ❤️</center> <br/>We may not be together right now, but I’ll still make this moment special for you. We’ve had reasons to drift apart, yet you always chose us, and I’m so grateful for that. No matter what, I’ll always be here for you. Today is your day, and you deserve all the love and happiness in the world. 💖✨</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthdayWish;