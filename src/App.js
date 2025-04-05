import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import MedicalLabs from './Features/labs/MedicalLab/MedicalLab';
import EngineeringLabs from './Features/labs/EngineeringLab/EngineeringLab';
import BioChemLabs from './Features/labs/BioChemLab/BioChemLab';
import PhysicsLabs from './Features/labs/PhysicsLab/PhysicsLab';
import VirtualLabsSection from './Features/VirtualLabSection';
import CollaborationSpace from './Features/collaboration/CollaborationSpace';
import StudentDashboard from './Features/analytics/StudentDashboard';
import Leaderboard from './components/UI/Leaderboard';
import Resources from './Features/resources/resources';
import Home from './components/Home';
import './App.css';
import './styles/sidebar.css';

// Simplified Babylon container without error boundaries
const BabylonViewport = ({ children }) => (
  <div 
    className="babylon-viewport"
    style={{
      width: '100%',
      height: 'calc(100vh - 60px)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {children}
  </div>
);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Layout isSidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)}>
          <Routes>
            {/* Home routes */}
            <Route path="/" element={
              <div className="home-background">
                <Home />
              </div>
            } />
            <Route path="/home" element={
              <div className="home-background">
                <Home />
              </div>
            } />
            
            {/* Virtual Labs Hub */}
            <Route path="/virtual-labs" element={<VirtualLabsSection />} />
            
            {/* Lab routes with simplified containers */}
            <Route path="/virtual-labs/medical" element={
              <BabylonViewport key="med-virt">
                <MedicalLabs />
              </BabylonViewport>
            } />
            <Route path="/virtual-labs/engineering" element={
              <BabylonViewport key="eng-virt">
                <EngineeringLabs />
              </BabylonViewport>
            } />
            <Route path="/virtual-labs/biochem" element={
              <BabylonViewport key="bio-virt">
                <BioChemLabs />
              </BabylonViewport>
            } />
            <Route path="/virtual-labs/physics" element={
              <BabylonViewport key="phy-virt">
                <PhysicsLabs />
              </BabylonViewport>
            } />
            
            {/* Direct lab routes */}
            <Route path="/medical" element={
              <BabylonViewport key="med-dir">
                <MedicalLabs />
              </BabylonViewport>
            } />
            <Route path="/engineering" element={
              <BabylonViewport key="eng-dir">
                <EngineeringLabs />
              </BabylonViewport>
            } />
            <Route path="/biochem" element={
              <BabylonViewport key="bio-dir">
                <BioChemLabs />
              </BabylonViewport>
            } />
            <Route path="/physics" element={
              <BabylonViewport key="phy-dir">
                <PhysicsLabs />
              </BabylonViewport>
            } />
            
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