import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ActivityCalendar = ({ data }) => {
  return (
    <div className="activity-calendar">
      {data.map((day, index) => (
        <div key={index} className="activity-day">
          <h4>{day.date}</h4>
          <ul>
            {day.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <FiCheckCircle className="activity-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ActivityCalendar;