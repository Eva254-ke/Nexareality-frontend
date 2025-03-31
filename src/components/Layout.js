import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children, isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-grow p-6 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
