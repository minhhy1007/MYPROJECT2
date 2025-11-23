import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/StudyPage");
  };

  const styles = {
    heroSection: {
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
    },
    heroTitle: {
      fontSize: "48px",
      background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    heroDescription: {
      fontSize: "18px",
      color: "#b0b0b0",
      lineHeight: "1.7",
    },
    highlightText: {
      color: "#00d9ff",
    },
    heroBtn: {
      background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
      borderRadius: "12px",
      fontSize: "18px",
      transition: "all 0.3s ease",
    },
    heroRating: {
      fontSize: "18px",
      color: "#facc15",
    },
    ratingText: {
      color: "#b0b0b0",
    },
  };

  return (
    <section
      className=" text-white text-center"
      style={{ ...styles.heroSection, paddingTop: "5rem" }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        <h1 className="fw-bold mb-3" style={styles.heroTitle}>
          Ghi nhớ 1000 từ vựng trong 1 tháng 🎯
        </h1>

        <p className="lead mb-4" style={styles.heroDescription}>
          Học đúng thời điểm vàng, ghi nhớ lâu, tiết kiệm thời gian – phương
          pháp học hiệu quả nhất của{" "}
          <span style={styles.highlightText}>ACEENGLISH</span>.
        </p>

        <button
          onClick={handleStart}
          className="btn btn-lg text-white fw-bold px-5 py-3 border-0"
          style={styles.heroBtn}
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

        <div className="mt-4" style={styles.heroRating}>
          ⭐⭐⭐⭐☆{" "}
          <span style={styles.ratingText}>(4.7/5 từ 2.000+ học viên)</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
