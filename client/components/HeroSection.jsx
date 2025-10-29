import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/StudyPage");
  };

  return (
    <section
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        <h1
          className="fw-bold"
          style={{
            fontSize: "48px",
            background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
          }}
        >
          Ghi nhớ 1000 từ vựng trong 1 tháng 🎯
        </h1>

        <p
          className="lead"
          style={{
            fontSize: "18px",
            color: "#b0b0b0",
            marginBottom: "40px",
            lineHeight: "1.7",
          }}
        >
          Học đúng thời điểm vàng, ghi nhớ lâu, tiết kiệm thời gian – phương
          pháp học hiệu quả nhất của{" "}
          <span style={{ color: "#00d9ff" }}>ACEENGLISH</span>.
        </p>

        <button
          onClick={handleStart}
          style={{
            background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
            color: "white",
            fontWeight: "bold",
            padding: "14px 40px",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 25px rgba(0, 217, 255, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          HỌC THỬ NGAY
        </button>

        <div
          style={{
            marginTop: "40px",
            fontSize: "18px",
            color: "#facc15",
          }}
        >
          ⭐⭐⭐⭐☆{" "}
          <span style={{ color: "#b0b0b0" }}>(4.7/5 từ 2.000+ học viên)</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
