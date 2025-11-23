import React, { useState } from "react";

import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
import FloatingIcon from "../components/Shared/FloatingIcon";

import FeaturedCarousel from "../sections/FeaturedCarousel";

import { sharedStyles } from "../hooks/useSharedStyles";

function AceHubPage() {
  const [activeNav, setActiveNav] = useState(4);

  return (
    <div style={sharedStyles.pageBackground}>
      <AppHeader activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* MAIN CONTENT */}
      <div
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
          marginTop: "70px",
          ...sharedStyles.mainContent,
        }}
        className="d-flex flex-column align-items-center"
      >
        {/* TITLE */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <span style={{ fontSize: "32px" }}>⭐</span>
            <h2 style={sharedStyles.pageTitle}>ĐANG DIỄN RA</h2>
          </div>
        </div>

        <FeaturedCarousel />
      </div>

      <FloatingIcon />
      <AppFooter />
    </div>
  );
}

export default AceHubPage;
