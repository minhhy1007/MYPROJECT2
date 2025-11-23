// SpeakingPage.jsx
import React, { useState } from "react";
// Import Shared Components
import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
import FloatingIcon from "../components/Shared/FloatingIcon";
// Import Local Section
import SpeakingTopicsList from "../sections/SpeakingTopicsList";
// Import Shared Hook
import { sharedStyles } from "../hooks/useSharedStyles";

function SpeakingPage() {
  const [activeNav, setActiveNav] = useState(3); // Index 3: IELTS Speaking

  return (
    <div
      className="min-vh-100 d-flex flex-column text-white"
      style={sharedStyles.pageBackground}
    >
      <AppHeader activeNav={activeNav} setActiveNav={setActiveNav} />

      <div
        className="flex-grow-1 d-flex flex-column align-items-center px-3"
        style={{
          paddingTop: "100px",
          paddingBottom: "60px",
          marginTop: "70px", // Offset cho fixed header
          ...sharedStyles.mainContent,
        }}
      >
        {/* Page Title */}
        <h2 className="fw-bold mb-4 text-center" style={sharedStyles.pageTitle}>
          LUYỆN SPEAKING CÙNG ACEENGLISH
        </h2>

        <SpeakingTopicsList />
      </div>

      <FloatingIcon />
      <AppFooter />
    </div>
  );
}

export default SpeakingPage; // ~38 dòng
