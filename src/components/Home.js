import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/Home.css';
import homeImage from '../assets/home.png'; // Import the local image

// Chart data
const progressData = [
  { name: 'Economics', hours: 100, target: 2000, percentage: 4.5 },
  { name: 'Physics', hours: 10, percentage: 20 },
  { name: 'Find Aid', hours: 40, percentage: 21 },
  { name: 'Literature', days: 30, percentage: 8 }
];

const performanceData = [
  { name: 'Sep', value: 85 },
  { name: 'Nov', value: 72 },
  { name: 'Aug', value: 90 },
  { name: 'Mar', value: 68 },
  { name: 'Sep', value: 82 }
];

const Home = () => {
  return (
    <div className="vr-dashboard">
      {/* Hero Section with VR Image */}
      <div className="vr-hero">
        <img 
          src={homeImage} 
          alt="VR Learning Platform" 
          className="hero-image"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = homeImage;
          }}
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>The study of the structure of matter.</h1>
          <p>Immersive virtual reality learning platform</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="vr-content">
        {/* Courses Section with Bar Chart */}
        <div className="vr-card">
          <h2>Course you're taking</h2>
          
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="percentage" fill="#8884d8" name="Completion %" />
                <Bar dataKey="hours" fill="#82ca9d" name="Hours spent" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="course-details">
            {progressData.map((course, index) => (
              <div key={index} className="course-item">
                <h3>{course.name}</h3>
                <div className="progress-info">
                  {course.hours && <span>{course.hours} hours spent</span>}
                  {course.days && <span>{course.days} days spent</span>}
                  <span>{course.percentage}% completed</span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${course.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="vr-card">
          <h2>History</h2>
          
          <div className="history-content">
            <div className="progress-chart">
              <h3>My Progress</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#ffc658" name="Performance" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="metrics-box">
              <h3>Science complex</h3>
              <div className="metric-value">36</div>
              <div className="metric-label">Performance</div>
              <div className="metric-value">124</div>
            </div>
          </div>
        </div>

        {/* Literature Section */}
        <div className="vr-card">
          <h2>Literature</h2>
          <div className="metrics-box large">
            <h3>Science complex</h3>
            <div className="metric-value">36</div>
            <div className="metric-label">Performance</div>
            <div className="metric-value">124</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;