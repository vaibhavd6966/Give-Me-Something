// components/LoveLetter.jsx
import React, { useState } from 'react';
import './LoveLetter.css';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="letter-page">
      <div className={`letter-wrapper ${isOpen ? 'opened' : ''}`}>
        <div className="envelope-container">
          <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(true)}>
            {!isOpen && <div className="click-text">Click to Open ❤️</div>}
            <div className="front flap"></div>
            <div className="front pocket"></div>
          </div>
        </div>
        
        <div className="full-letter">
          <div className="paper">
            <div className="letter-content">
              <h1>My Dearest Love,</h1>
              
              <p>In the quiet moments when I think of you, my heart fills with a warmth that words can barely describe. You've become not just my girlfriend, but my best friend - the person who makes every day brighter just by being in it.</p>
              
              <p>Remember when we first met? It feels like yesterday and forever ago all at once. Since then, you've colored my world in shades I never knew existed. Your laugh has become my favorite melody, and your smile lights up even my darkest days.</p>
              
              <p>With you, even the simplest moments become magical. Whether we're sharing coffee in comfortable silence, laughing at our inside jokes, or dreaming about our future together - every moment with you feels like a gift.</p>
              
              <p>You understand me in ways I never thought possible, support my dreams as if they were your own, and love me despite all my quirks (and maybe even because of them). You're the first person I want to share good news with, and the only one I need when times are tough.</p>
              
              <p>I love how you scrunch your nose when you laugh, how passionate you get about the things you care about, and how you always know exactly what to say to make everything better. You're not just my partner - you're my home, my peace, my favorite person.</p>
              
              <p>Thank you for being you, for choosing me, for making every day an adventure. I love you more than yesterday and less than tomorrow.</p>

              <div className="signature">
                <p>~Yours</p>
                <p>Your Love Pujari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;