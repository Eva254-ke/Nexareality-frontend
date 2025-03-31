import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiActivity,
  FiUsers,
  FiBarChart2,
  FiBookmark,
} from "react-icons/fi";
import "../styles/sidebar.css";

const Sidebar = ({ isOpen }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle("open", isOpen);
      sidebarRef.current.classList.toggle("collapsed", !isOpen);
    }
  }, [isOpen]);

  return (
    <div className="sidebar-container">
      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {[
              { to: "/home", icon: <FiHome />, text: "Home" },
              { to: "/virtual-labs", icon: <FiActivity />, text: "Virtual Labs" },
              { to: "/collaboration", icon: <FiUsers />, text: "Collaboration" },
              { to: "/analytics", icon: <FiBarChart2 />, text: "Analytics" },
              { to: "/resources", icon: <FiBookmark />, text: "Resources" },
            ].map((item, index) => (
              <li className="menu-item" key={index}>
                <NavLink
                  to={item.to}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="link-content">
                    <span className="icon-wrapper">{item.icon}</span>
                    {isOpen && <span className="link-text">{item.text}</span>}
                  </div>
                  <div className="active-indicator" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;