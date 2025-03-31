import React, { useState } from 'react';
import { FiSearch, FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';
import '../styles/navbar.css';

const Navbar = ({ toggleSidebar, isSidebarCollapsed }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button 
          className="menu-button" 
          onClick={toggleSidebar}
          aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <FiMenu className={`menu-icon ${isSidebarCollapsed ? 'collapsed' : ''}`} />
        </button>

        <div className="search-container">
          <form onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search STEM Science Lab and Resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="navbar-right">
        <div className="notification-bell">
          <FiBell className="notification-icon" />
          <span className="notification-badge">3</span>
        </div>

        <div 
          className="user-profile-container"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="user-profile">
            <div className="avatar">JD</div>
            <span className="username">John Doe</span>
            <FiChevronDown className={`dropdown-arrow ${showDropdown ? 'open' : ''}`} />
          </div>

          {showDropdown && (
            <div className="profile-dropdown">
              <div className="dropdown-item">My Profile</div>
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item logout-text">Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
