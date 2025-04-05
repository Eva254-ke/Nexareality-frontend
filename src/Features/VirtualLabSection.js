import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VirtualLabsSection.css'; // Import the CSS file

const VirtualLabsSection = () => {
  return (
    <div className="virtual-labs-section">
      <h2 className="section-title">Explore STEM Career Paths</h2>
      <div className="career-paths-grid">
        {/* Medical Career Path */}
        <div className="career-path">
          <h3 className="career-title">Medical Professional</h3>
          <p className="career-description">Explore labs in medical research, diagnostics, and treatment.</p>
          <Link to="/virtual-labs/medical" className="enter-lab">
            Enter Medical Labs
          </Link>
          <ul className="lab-list">
            <li>Human Anatomy</li>
            <li>Pharmacology</li>
            <li>Microbiology</li>
          </ul>
        </div>

        {/* Engineering Career Path */}
        <div className="career-path">
          <h3 className="career-title">Engineer</h3>
          <p className="career-description">Discover labs in mechanical, electrical, and civil engineering.</p>
          <Link to="/virtual-labs/engineering" className="enter-lab">
            Enter Engineering Labs
          </Link>
          <ul className="lab-list">
            <li>Structural Analysis</li>
            <li>Circuit Design</li>
            <li>Robotics</li>
          </ul>
        </div>

        {/* Biochemistry Career Path */}
        <div className="career-path">
          <h3 className="career-title">Biochemist</h3>
          <p className="career-description">Investigate labs in molecular biology and biochemical processes.</p>
          <Link to="/virtual-labs/biochem" className="enter-lab">
            Enter Biochemistry Labs
          </Link>
          <ul className="lab-list">
            <li>DNA Sequencing</li>
            <li>Protein Synthesis</li>
            <li>Metabolic Pathways</li>
          </ul>
        </div>

        {/* Physics Career Path */}
        <div className="career-path">
          <h3 className="career-title">Physicist</h3>
          <p className="career-description">Explore labs in mechanics, thermodynamics, and electromagnetism.</p>
          <Link to="/virtual-labs/physics" className="enter-lab">
            Enter Physics Labs
          </Link>
          <ul className="lab-list">
            <li>Gravitational Forces</li>
            <li>Energy Transfer</li>
            <li>Quantum Mechanics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VirtualLabsSection;
