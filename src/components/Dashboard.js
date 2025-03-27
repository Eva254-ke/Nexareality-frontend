import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AITutor from '@/components/AITutor';
import VRThumbnail from '@/components/VRThumbnail';
import '@/styles/student-dashboard.css';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [experiments, setExperiments] = useState([]);
  const [activeTutor, setActiveTutor] = useState(null);
  const navigate = useNavigate();

  // Mock data fetch - replace with actual API call
  useEffect(() => {
    const fetchLabs = async () => {
      const response = await fetch('/api/vr-labs');
      const data = await response.json();
      setExperiments(data.filter(lab => 
        user.unlockedLabs.includes(lab.id)
      ));
    };
    fetchLabs();
  }, [user]);

  const startLab = (labId) => {
    navigate(`/vr-lab/${labId}`);
  };

  return (
    <div className="student-dashboard">
      {/* Header */}
      <header>
        <h1>Your VR Science Labs</h1>
        <div className="ai-tutor-toggle" onClick={() => setActiveTutor(!activeTutor)}>
          {activeTutor ? 'Hide' : 'Show'} AI Tutor
        </div>
      </header>

      {/* AI Tutor Panel */}
      {activeTutor && (
        <AITutor 
          context="dashboard" 
          onClose={() => setActiveTutor(false)} 
        />
      )}

      {/* Labs Grid */}
      <div className="labs-grid">
        {experiments.map((lab) => (
          <div key={lab.id} className="lab-card">
            <VRThumbnail 
              modelUrl={lab.thumbnail} 
              interactive={true}
            />
            
            <div className="lab-info">
              <h3>{lab.title}</h3>
              <div className="lab-meta">
                <span className="category">{lab.category}</span>
                <span className="duration">{lab.duration} mins</span>
                <span className="difficulty">{lab.difficulty}</span>
              </div>
              
              <p className="description">{lab.description}</p>
              
              <div className="lab-actions">
                <button 
                  className="start-lab"
                  onClick={() => startLab(lab.id)}
                >
                  Enter VR Lab
                </button>
                <button 
                  className="ask-tutor"
                  onClick={() => setActiveTutor(lab.id)}
                >
                  Ask Tutor About This
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;