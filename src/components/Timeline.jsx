// components/Timeline.jsx
import React, { useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      date: "December 15, 2023",
      content: "The day we first met. Your smile lit up the entire room, and I knew something special was about to begin. Who knew a simple 'hello' would change everything? ✨"
    },
    {
      date: "December 25, 2023",
      content: "Our first Christmas together. The way your eyes sparkled when you opened my gift made my heart skip a beat. That moment when time stood still. 🎄"
    },
    {
      date: "January 1, 2024",
      content: "New Year's kiss under the stars. We made promises that night, dreams of forever that still make me smile every time I think about them. 🎆"
    },
    {
      date: "January 14, 2024",
      content: "Our first real date. That cute little café where we talked for hours, losing track of time. Coffee never tasted better. ☕"
    },
    {
      date: "January 28, 2024",
      content: "The day you called me your best friend. It's amazing how you can be both - my love and my closest friend. The perfect combination. 💝"
    },
    {
      date: "February 1, 2024",
      content: "That random Tuesday when we danced in the rain. No music needed, just us being silly and free. Some of the best moments are unplanned. 🌧️"
    },
    {
      date: "February 5, 2024",
      content: "Our first cooking disaster that turned into the best takeout dinner ever. Who knew burning pasta could lead to such a perfect evening? 🍝"
    },
    {
      date: "February 8, 2024",
      content: "The day we created our bucket list together. Each item a promise of future adventures and memories waiting to be made. 📝"
    },
    {
      date: "February 12, 2024",
      content: "When you surprised me with breakfast in bed. Simple moments like these remind me how lucky I am to have you in my life. 🥞"
    },
    {
      date: "February 14, 2024",
      content: "Our first Valentine's Day together. Every day with you feels like Valentine's Day, but this one was extra special. ❤️"
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