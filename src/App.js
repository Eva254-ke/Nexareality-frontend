import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import MedicalLabs from './Features/labs/MedicalLab/MedicalLab';
import EngineeringLabs from './Features/labs/EngineeringLab/EngineeringLab';
import BioChemLabs from './Features/labs/BioChemLab/BioChemLab';
import PhysicsLabs from './Features/labs/PhysicsLab/PhysicsLab';
import CollaborationSpace from './Features/collaboration/CollaborationSpace';
import StudentDashboard from './Features/analytics/StudentDashboard';
import Leaderboard from './components/UI/Leaderboard';
import Resources from './Features/resources/resources';
import Home from './components/Home';
import './App.css';
import './styles/sidebar.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Layout isSidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)}>
          <Routes>
            {/* Home route with background image */}
            <Route 
              path="/" 
              element={
                <div className="home-background">
                  <Home />
                </div>
              } 
            />
            <Route path="/home" element={
              <div className="home-background">
                <Home />
              </div>
            } />
            
            {/* Lab routes */}
            <Route path="/medical" element={<MedicalLabs />} />
            <Route path="/engineering" element={<EngineeringLabs />} />
            <Route path="/biochem" element={<BioChemLabs />} />
            <Route path="/physics" element={<PhysicsLabs />} />
            
            {/* Feature routes */}
            <Route path="/collab" element={<CollaborationSpace />} />
            <Route path="/analytics" element={<StudentDashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/resources" element={<Resources />} />
            
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;