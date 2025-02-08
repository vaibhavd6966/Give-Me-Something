import React from 'react';
import './Memories.css';

const LoveCard = ({ text, className }) => {
  return (
    <div className={`love-card ${className}`}>
      <p className="love-text">{text}</p>
    </div>
  );
};

export default LoveCard;