import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const AnnouncementCard = ({ title, content, date, urgent }) => {
  return (
    <div className={`announcement-card ${urgent ? 'urgent' : ''}`}>
      {urgent && <FiAlertTriangle className="urgent-icon" />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <span className="announcement-date">{date}</span>
      </div>
    </div>
  );
};

export default AnnouncementCard;