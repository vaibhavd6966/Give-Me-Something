import React from 'react';
import LoveCard from './LoveCard';
import './Memories.css';

const Memories = () => {
  const loveQuotes = [
    "Every moment with you feels like magic ✨",
    "Your smile is my favorite kind of magic 💫",
    "In your eyes, I found my home 🏡",
    "You're the missing piece to my puzzle ❤️",
    "Together is my favorite place to be 🌟",
    "You make my heart skip a beat 💝",
    "Our love story is my favorite 📖",
    "Forever isn't long enough with you 💑"
  ];

  return (
    <div className="memories-container">
      <h1 className="memories-title">Our Magical Moments</h1>
      <div className="bento-grid">
        {loveQuotes.map((quote, index) => (
          <LoveCard 
            key={index} 
            text={quote} 
            className={`card-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Memories;

