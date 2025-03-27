import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import MedicalLabs from './Features/labs/MedicalLab/MedicalLab';
import EngineeringLabs from './Features/labs/EngineeringLab/EngineeringLab';
import BioChemLabs from './Features/labs/BioChemLab/BioChemLab';
import PhysicsLabs from './Features/labs/PhysicsLab/PhysicsLab';
import CollaborationSpace from './Features/collaboration/CollaborationSpace';
import StudentDashboard from './Features/analytics/StudentDashboard';
import AITutorPortal from './Features/tutor/AITutor';

function App() {
  return (
    <AuthProvider>
      <div>
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li><Link to="/medical">Medical Labs</Link></li>
            <li><Link to="/engineering">Engineering Labs</Link></li>
            <li><Link to="/biochem">BioChem Labs</Link></li>
            <li><Link to="/physics">Physics Labs</Link></li>
            <li><Link to="/collab/1">Collaboration Space</Link></li>
            <li><Link to="/analytics">Student Dashboard</Link></li>
            <li><Link to="/tutor">AI Tutor Portal</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          
          {/* Labs */}
          <Route path="/medical" element={<MedicalLabs />} />
          <Route path="/engineering" element={<EngineeringLabs />} />
          <Route path="/biochem" element={<BioChemLabs />} />
          <Route path="/physics" element={<PhysicsLabs />} />

          {/* Features */}
          <Route path="/collab/:labId" element={<CollaborationSpace />} />
          <Route path="/analytics" element={<StudentDashboard />} />
          <Route path="/tutor" element={<AITutorPortal />} />

          {/* Fallback Route */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;