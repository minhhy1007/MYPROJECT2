import React from "react";
// Import Shared Components
import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
// Thay thế StudyMainContent bằng FlashcardSection
import FlashcardSection from "../sections/FlashcardSection";
// Import Shared Hook
import { sharedStyles } from "../hooks/useSharedStyles";

function StudyPage() {
  const activeNav = 0;

  return (
    <div
      className="vh-100 d-flex flex-column text-light"
      style={sharedStyles.pageBackground}
    >
      <AppHeader activeNav={activeNav} setActiveNav={() => {}} />

      {/* Main Content: Thêm margin-top cho fixed header */}
      <div
        style={{ marginTop: "70px", flexGrow: 1 }}
        className="d-flex align-items-center"
      >
        <FlashcardSection />
      </div>

      <AppFooter />
    </div>
  );
}

export default StudyPage;
