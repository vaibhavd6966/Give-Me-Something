// components/Timeline.jsx
import React, { useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      date: "February 14, 2022",
      content: "The moment I saw you, your lovely eyes made me believe in love at first sight. I asked my friends your name, not knowing that was the start of everything. ✨💙"
    },
    {
      date: "March 26, 2022",
      content: "On this day, I sent you my first message a simple \"Hii\" we never thought would mean so much. But that one \"Hii\" was enough to color my black-and-white life forever. ❤️✨"
    },
    {
      date: "April 1, 2022",
      content: "On this day, I gathered the courage to confess my feelings for you. You smiled and said, \"We can be good friends forever.\" Back then, I didn\’t believe those words, but now I truly understand their meaning. None of this was planned, yet here we are just as it was meant to be. And this day also marks the first time we talked in person, a moment I’ll cherish forever. ❤️✨"
    },
    {
      date: "May 5, 2022",
      content: "On this day, you took the first step and messaged me for the first time. That simple message meant more than you know—it made me feel the warmth of our growing friendship. From that moment, talking to you felt natural, comfortable, and special. ❤️✨"
    },
    {
      date: "September 10, 2022",
      content: "The day you called me your best friend. It's amazing how you can be both - my love and my closest friend. The perfect combination. 💝"
    },
    {
      date: "February 10, 2023",
      content: "Our first birthday together—one of the most special days for me. Celebrating with you and Siddhi made it unforgettable. But hey, I’m still waiting for that birthday party you owe me! 😏🎉❤️"
    },
    {
      date: "February 24, 2023",
      content: "One of our best and most unexpected memories our sudden plan to hang out at Band Stand instead of heading to VJTI. That unplanned day, filled with laughter, endless conversations, and the best company, will always be one of my favorites. Perfect moments aren’t planned, and that day proved it. ❤️✨"
    },
    {
      date: "January 20, 2024",
      content: "Do you remember my last birthday? The way we had so much fun, and how you made me feel so special? Your wishes, your presence I still remember it all. That day, you made me feel like both a king and a prince at the same time. ❤️👑✨"
    },
    {
      date: "February 10, 2024",
      content: "Do you remember your last birthday when I came to your hostel, and we had so much fun together? That day was so special, and I’m glad I got to be a part of it. Sorry for arriving late, but I hope I made it up to you. Just know that I love you very much. ❤️✨"
    },
    {
      date: "October 19-20, 2024",
      content: "Do you remember the first time I held your hand and let my tears fall in front of you? That night was different it was special. Our first night out together, filled with endless conversations, laughter, and love. That moment, that night, will always have a place in my heart. ❤️✨"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Our Love Story</h1>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="date">{item.date}</div>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;