// NotebookPage.jsx
import React, { useState } from "react";
// Import Shared Components
import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
// Import Local Components/Sections
import NotebookSearchBar from "../components/NotebookSearchBar";
import NotebookCards from "../sections/NotebookCards";
// Import Shared Hooks
import { sharedStyles } from "../hooks/useSharedStyles";

function NotebookPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNav, setActiveNav] = useState(2); // Index 2: Sổ tay

  return (
    <div
      className="min-vh-100 d-flex flex-column text-white"
      style={sharedStyles.pageBackground}
    >
      <AppHeader activeNav={activeNav} setActiveNav={setActiveNav} />

      <div
        className="flex-grow-1 d-flex flex-column align-items-center"
        style={{
          paddingTop: "8rem",
          paddingBottom: "3rem",
          marginTop: "70px", // Offset cho fixed header
          ...sharedStyles.mainContent,
        }}
      >
        {/* Page Title */}
        <h2 className="fw-bold mb-5" style={sharedStyles.pageTitle}>
          SỔ TAY ACEENGLISH
        </h2>

        {/* Search Bar Component */}
        <NotebookSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Cards Section */}
        <NotebookCards />
      </div>

      <AppFooter />
    </div>
  );
}

export default NotebookPage; // ~38 dòng
