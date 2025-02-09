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
              <h1>My Dearest Love❤️,</h1>
              
              <p>From the moment I first saw you, something inside me changed. Your beautiful eyes made me believe in love at first sight, and that one glance became the beginning of everything. I still remember asking my friends about your name, hoping to turn that fleeting moment into something more. Who knew that a simple "hi" would be the spark that colored my black-and-white life forever?</p>
              
              <p>I cherish every memory we’ve made together the first time I messaged you, our first real conversation, the day I confessed my feelings, and even when you said, "We can be good friends forever." Back then, I didn't fully understand the depth of those words, but now I do. Our bond was never planned, yet it turned into something more beautiful than I could have ever imagined.</p>
              
              <p>Our journey has been filled with special moments the time you took the first step and messaged me, making me feel the warmth of our friendship, our unexpected hangout at Band Stand, and our first birthday together. You made my last birthday unforgettable, making me feel like both a king and a prince at the same time. And your birthday? I loved being there, celebrating you, even though I was late (sorry for that again!). But most of all, I loved just being with you.</p>
              
              <p>I can never forget the night I held your hand and let my emotions flow in front of you. That night was different it was the first time we spent the night together, laughing, talking, and just being us. It was a moment that made me realize how truly special you are to me. Every moment with you is precious, and every second spent by your side is a treasure I hold close to my heart.</p>
              
              <p>You are my world, my happiness, and the one who makes my heart smile. No matter what happens, you will always be my love forever. I promise to stand by your side, to cherish you, and to love you endlessly. Your presence in my life is the most beautiful blessing, and I thank the universe every day for bringing you into my life.</p>
              
              <p>Stay healthy, my love. Take care of yourself because you mean everything to me. I love you beyond words, beyond time, beyond everything. Forever yours. ❤️✨</p>

              <div className="signature">
                <p>With all my love,</p>
                <p>Vaibhav</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;