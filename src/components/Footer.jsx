import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="valentine-footer">
      <div className="footer-content">
        <div className="hearts-decorator">
          ❤️ ❤️ ❤️
        </div>
        
        <div className="love-messages">
          <p className="message">Please Talk to Me</p>
          <p className="message">And please appreciate this small effort for you</p>
          <p className="message">You will be my Love Forever</p>
          <p className="message">You are my World</p>
          <p className="message">Stay Healthy My Love</p>
          <p className="message">Every moment with you is precious</p>
          <p className="message">You make my heart smile</p>
          <p className="message">Forever yours</p>
        </div>

        <div className="footer-bottom">
          <p>Made with ❤️ and lots of love</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;