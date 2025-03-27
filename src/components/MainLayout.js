// src/components/layout/MainLayout.js
import React from 'react';
import './MainLayout.css';

export default function MainLayout({ children }) {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>NexaReality STEM Labs</h1>
      </header>
      <main className="app-content">
        {children}
      </main>
    </div>
  );
}