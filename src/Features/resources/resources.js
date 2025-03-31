import React from 'react';
import { FiBook, FiDownload, FiExternalLink, FiVideo } from 'react-icons/fi';
import './resourses.css';

const Resources = () => {
  // Sample resources data
  const resourceCategories = [
    {
      title: "Documentation",
      icon: <FiBook className="category-icon" />,
      items: [
        {
          title: "Medical Lab Procedures",
          type: "PDF",
          link: "/resources/medical-procedures.pdf",
          description: "Step-by-step guide for all medical lab experiments"
        },
        {
          title: "Engineering Lab Manual",
          type: "PDF",
          link: "/resources/engineering-manual.pdf",
          description: "Complete reference for engineering equipment"
        }
      ]
    },
    {
      title: "Video Tutorials",
      icon: <FiVideo className="category-icon" />,
      items: [
        {
          title: "Cardiac Surgery Basics",
          type: "Video",
          link: "https://youtube.com/watch?v=example1",
          description: "30-minute tutorial on heart anatomy"
        },
        {
          title: "DNA Sequencing Demo",
          type: "Video",
          link: "https://youtube.com/watch?v=example2",
          description: "CRISPR techniques explained"
        }
      ]
    },
    {
      title: "External Links",
      icon: <FiExternalLink className="category-icon" />,
      items: [
        {
          title: "NIH Research Database",
          type: "Link",
          link: "https://www.nih.gov/research",
          description: "Official medical research materials"
        },
        {
          title: "MIT OpenCourseWare",
          type: "Link",
          link: "https://ocw.mit.edu",
          description: "Free STEM course materials"
        }
      ]
    }
  ];

  return (
    <div className="resources-container">
      <header className="resources-header">
        <h1><FiBook className="header-icon" /> Learning Resources</h1>
        <p>Access documentation, tutorials, and reference materials</p>
      </header>

      <div className="resource-grid">
        {resourceCategories.map((category, index) => (
          <div key={index} className="resource-category">
            <div className="category-header">
              {category.icon}
              <h2>{category.title}</h2>
            </div>
            <ul className="resource-list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="resource-item">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    <div className="resource-icon">
                      {item.type === 'PDF' && <FiDownload />}
                      {item.type === 'Video' && <FiVideo />}
                      {item.type === 'Link' && <FiExternalLink />}
                    </div>
                    <div className="resource-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <span className="resource-type">{item.type}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;