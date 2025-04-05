import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Simple Error Boundary without potential conflicts
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          background: '#1e1e1e',
          color: 'white',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2>3D Viewer Error</h2>
          <p>Please refresh the page</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '8px 16px',
              marginTop: '12px',
              background: '#6e48aa',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const container = document.getElementById('root');
const root = createRoot(container);

// Render without StrictMode to prevent Babylon.js conflicts
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);