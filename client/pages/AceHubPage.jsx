import React, { useState } from "react";

import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
import FloatingIcon from "../components/Shared/FloatingIcon";

import FeaturedCarousel from "../sections/FeaturedCarousel";
import VideoCard from "../components/VideoCard";
import ReferenceCard from "../components/ReferenceCard";

import { sharedStyles } from "../hooks/useSharedStyles";
import { youtubeVideos, referenceMaterials } from "../hooks/useAceHubStyles";

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
        {/* FEATURED SECTION */}
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

        {/* YOUTUBE VIDEOS SECTION */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginTop: "80px",
            marginBottom: "60px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "32px" }}>🎥</span>
              <h2 style={sharedStyles.pageTitle}>VIDEO HỌC TẬP</h2>
            </div>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "8px",
              }}
            >
              Khám phá các video hướng dẫn chất lượng cao từ YouTube
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "24px",
              justifyItems: "center",
            }}
          >
            {youtubeVideos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>

        {/* REFERENCE MATERIALS SECTION */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginTop: "40px",
            marginBottom: "60px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "32px" }}>📚</span>
              <h2 style={sharedStyles.pageTitle}>TÀI LIỆU THAM KHẢO</h2>
            </div>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "8px",
              }}
            >
              Tải miễn phí các tài liệu học tập chất lượng cao
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "24px",
              justifyItems: "center",
            }}
          >
            {referenceMaterials.map((reference, index) => (
              <ReferenceCard key={index} reference={reference} />
            ))}
          </div>
        </div>
      </div>

      <FloatingIcon />
      <AppFooter />
    </div>
  );
}

export default AceHubPage;

