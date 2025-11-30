import React, { useState } from "react";
import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
import LearnCoursesList from "../sections/LearnCoursesList";
import LearnSidebar from "../sections/LearnSidebar";
import { sharedStyles } from "../hooks/useSharedStyles";
import { coursesData } from "../hooks/useLearnStyles";

function VocabularyList({ course }) {
  if (!course) {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
          borderRadius: "20px",
          padding: "24px",
          border: "2px solid rgba(0,217,255,0.3)",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#00d9ff", marginBottom: "16px" }}>
          📚 Chọn khóa học để xem từ vựng
        </h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
          Click vào một khóa học bên phải để hiển thị danh sách từ vựng
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
        borderRadius: "20px",
        padding: "24px",
        border: "2px solid rgba(0,217,255,0.3)",
      }}
    >
      <h3
        style={{
          color: "#00d9ff",
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        📖 {course.title} - Từ vựng
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {course.vocabulary.map((item, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
              borderRadius: "16px",
              padding: "16px 20px",
              borderLeft: "4px solid #00d9ff",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(8px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,217,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "12px",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                {item.word}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  fontStyle: "italic",
                }}
              >
                {item.phonetic}
              </span>
            </div>
            <div
              style={{
                fontSize: "15px",
                color: "#00d9ff",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              {item.meaning}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
                fontStyle: "italic",
              }}
            >
              "{item.example}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LearnPage() {
  const activeNav = 1;
  const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div
      className="d-flex flex-column text-light"
      style={sharedStyles.pageBackground}
    >
      <AppHeader activeNav={activeNav} setActiveNav={() => {}} />
      <div
        className="container-fluid flex-grow-1 d-flex p-5"
        style={{ paddingTop: "80px" }}
      >
        <div style={{ width: "400px" }} className="pe-3">
          <VocabularyList course={selectedCourse} />
        </div>

        {}
        <div className="flex-grow-1 pe-3">
          <LearnCoursesList
            selectedCourse={selectedCourse}
            onCourseSelect={handleCourseSelect}
          />
        </div>

        {}
        <div style={{ width: "350px" }}>
          <LearnSidebar />
        </div>
      </div>

      <AppFooter />
    </div>
  );
}

export default LearnPage;

