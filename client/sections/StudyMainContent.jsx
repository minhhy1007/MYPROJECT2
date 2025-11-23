// ../sections/StudyMainContent.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function StudyMainContent() {
  const navigate = useNavigate();

  // Style riêng của StudyMainContent
  const styles = {
    mascotIcon: {
      filter: "drop-shadow(0 10px 25px rgba(0, 217, 255, 0.3))",
      animation: "float 3s ease-in-out infinite",
    },
    highlightText: {
      color: "#00d9ff",
      textShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
    },
    learnButton: {
      transition: "all 0.3s ease",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
      color: "white",
      boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
    },
  };

  return (
    <div
      className="container-fluid flex-grow-1 d-flex justify-content-center align-items-center"
      style={{ flexDirection: "column", textAlign: "center" }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
        alt="Mascot"
        width="140"
        className="mb-3"
        style={styles.mascotIcon}
      />

      <p className="fw-bold fs-5 mb-4" style={{ color: "#e0e0e0" }}>
        Để kích hoạt tính năng{" "}
        <span style={styles.highlightText}>"Thời điểm vàng"</span> hãy học 1 bài
        học từ mới
      </p>

      <button
        className="px-5 py-2 fw-bold text-dark shadow"
        onClick={() => navigate("/learn")}
        style={styles.learnButton}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-3px)";
          e.target.style.boxShadow = "0 0 30px rgba(0, 217, 255, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.3)";
        }}
      >
        Học từ mới
      </button>
      <style>
        {/* Keyframes cho hiệu ứng float của mascot */}
        {`@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }`}
      </style>
    </div>
  );
}
export default StudyMainContent;
