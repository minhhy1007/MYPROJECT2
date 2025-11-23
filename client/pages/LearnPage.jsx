// LearnPage.jsx
import React from "react";
// Import Shared Components
import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
// Import Local Components/Sections
import LearnTipsCard from "../components/LearnTipsCard";
import LearnCoursesList from "../sections/LearnCoursesList";
import LearnSidebar from "../sections/LearnSidebar";
// Import Shared Hook
import { sharedStyles } from "../hooks/useSharedStyles";

function LearnPage() {
  // Index 1: Học từ mới
  const activeNav = 1;

  return (
    <div
      className="d-flex flex-column text-light"
      style={sharedStyles.pageBackground}
    >
      <AppHeader activeNav={activeNav} setActiveNav={() => {}} />

      {/* Main Content (3 Columns) */}
      <div
        className="container-fluid flex-grow-1 d-flex p-5"
        style={{ paddingTop: "80px" }} // Offset cho fixed header
      >
        {/* Left Sidebar (300px) */}
        <div style={{ width: "300px" }} className="pe-3">
          <LearnTipsCard />
        </div>

        {/* Center Content (Auto width) */}
        <div className="flex-grow-1 pe-3">
          <LearnCoursesList />
        </div>

        {/* Right Sidebar (350px) */}
        <div style={{ width: "350px" }}>
          <LearnSidebar />
        </div>
      </div>

      <AppFooter />
    </div>
  );
}

export default LearnPage; // ~35 dòng
