// src/components/analytics/StudentDashboard.js
import React from 'react';

export default function StudentDashboard() {
  const progressData = [
    { lab: 'Cardiac Surgery', score: 85 },
    { lab: 'DNA Sequencing', score: 92 }
  ];

  return (
    <div className="dashboard">
      <h2>Your Learning Progress</h2>
      <ul>
        {progressData.map((item, index) => (
          <li key={index}>
            <span>{item.lab}</span>
            <progress value={item.score} max="100"></progress>
            <span>{item.score}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}