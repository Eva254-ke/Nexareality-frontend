import React from 'react';
import { Link } from 'react-router-dom';

const QuickAccessCard = ({ icon, title, target, action, color }) => {
  const content = (
    <div className="quick-access-card" style={{ '--card-color': color }}>
      <div className="card-icon" style={{ backgroundColor: `${color}20` }}>
        {React.cloneElement(icon, { color: color })}
      </div>
      <h3>{title}</h3>
    </div>
  );

  return target ? (
    <Link to={target} className="card-link">
      {content}
    </Link>
  ) : (
    <button onClick={action} className="card-button">
      {content}
    </button>
  );
};

export default QuickAccessCard;