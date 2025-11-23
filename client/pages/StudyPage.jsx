// StudyPage.jsx
import React from "react";
// Import Shared Components
import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
// Import Local Section
import StudyMainContent from "../sections/StudyMainContent";
// Import Shared Hook
import { sharedStyles } from "../hooks/useSharedStyles";

function StudyPage() {
  // Không cần useState vì StudyPage luôn là activeNav 0 ("Ôn tập")
  const activeNav = 0;

  return (
    <div
      className="vh-100 d-flex flex-column text-light"
      style={sharedStyles.pageBackground}
    >
      {/* activeNav 0 là "Ôn tập" */}
      <AppHeader activeNav={activeNav} setActiveNav={() => {}} />

      {/* Main Content */}
      <StudyMainContent />

      <AppFooter />
    </div>
  );
}

export default StudyPage; // ~25 dòng
