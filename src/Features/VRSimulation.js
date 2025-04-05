import React from 'react';

const VRSimulation = ({ title, description, icon }) => {
  return (
    <div className="vr-simulation">
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="start-simulation">Start Simulation</button>
    </div>
  );
};

export default VRSimulation;
