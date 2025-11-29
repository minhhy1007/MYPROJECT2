// NotebookPage.jsx
import React, { useState } from "react";
import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
import NotebookSearchBar from "../components/NotebookSearchBar";
import NotebookCards from "../sections/NotebookCards";
import { sharedStyles } from "../hooks/useSharedStyles";

function NotebookPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNav, setActiveNav] = useState(2);

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
          marginTop: "70px",
          ...sharedStyles.mainContent,
        }}
      >
        {}
        <h2 className="fw-bold mb-5" style={sharedStyles.pageTitle}>
          SỔ TAY ACEENGLISH
        </h2>

        {}
        <NotebookSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {}
        <NotebookCards />
      </div>

      <AppFooter />
      {}
      <style>{`
                @media (max-width: 768px) {
                    /* Giảm padding trên mobile */
                    .notebook-main-content {
                        padding-top: 5rem !important;
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                    /* Giảm cỡ chữ tiêu đề */
                    .notebook-main-content h2 {
                        font-size: 28px !important;
                        margin-bottom: 3rem !important;
                    }
                }
            `}</style>
    </div>
  );
}

export default NotebookPage;
