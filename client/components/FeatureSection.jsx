import React from "react";
import { useNavigate } from "react-router-dom";

function FeatureSection() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/StudyPage");
  };

  const features = [
    {
      icon: "🔥",
      title: "Duy trì thói quen học",
      desc: "10 phút mỗi ngày giúp bạn hình thành thói quen học tiếng Anh bền vững.",
    },
    {
      icon: "🤖",
      title: "Cá nhân hóa lộ trình học",
      desc: "Học theo trình độ và mục tiêu cá nhân của bạn với hệ thống AI thông minh.",
    },
    {
      icon: "💡",
      title: "Giao diện trực quan",
      desc: "Thiết kế thân thiện trên điện thoại và máy tính, dễ dàng học mọi lúc mọi nơi.",
    },
  ];

  const styles = {
    section: {
      background: "#0a0a0a",
    },
    title: {
      fontSize: "36px",
      color: "white",
      letterSpacing: "1px",
    },
    highlight: {
      color: "#00d9ff",
    },
    featureCard: {
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
      borderRadius: "20px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    iconBox: {
      width: "70px",
      height: "70px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "15px",
      fontSize: "32px",
      boxShadow: "0 5px 15px rgba(102, 126, 234, 0.3)",
    },
    featureTitle: {
      fontSize: "20px",
      color: "white",
    },
    featureDesc: {
      color: "#b0b0b0",
      fontSize: "15px",
      lineHeight: "1.6",
      transition: "color 0.2s ease",
    },
    hoverOverlay: {
      background:
        "linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(102, 126, 234, 0.05) 100%)",
      opacity: 0,
      transition: "opacity 0.3s ease",
      borderRadius: "20px",
    },
    ctaButton: {
      background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
      borderRadius: "12px",
      fontSize: "18px",
      transition: "all 0.3s ease",
    },
  };

  return (
    <section className="py-5 text-white" style={styles.section}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2 className="fw-bold text-center mb-5" style={styles.title}>
          Tính năng nổi bật của <span style={styles.highlight}>ACEENGLISH</span>
        </h2>

        <div className="row g-4 px-3">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className="p-4 position-relative overflow-hidden"
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0, 217, 255, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.3)";
                  const overlay =
                    e.currentTarget.querySelector(".hover-overlay");
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  const overlay =
                    e.currentTarget.querySelector(".hover-overlay");
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                {/* Icon */}
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={styles.iconBox}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h5 className="fw-bold mb-3" style={styles.featureTitle}>
                  {feature.title}
                </h5>

                {/* Description */}
                <p className="mb-0" style={styles.featureDesc}>
                  {feature.desc}
                </p>

                {/* Hover overlay */}
                <div
                  className="position-absolute top-0 start-0 end-0 bottom-0 hover-overlay"
                  style={styles.hoverOverlay}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Nút hành động */}
        <div className="text-center mt-5">
          <button
            onClick={handleStart}
            className="btn text-white fw-bold px-5 py-3 border-0"
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 25px rgba(0, 217, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Bắt đầu học ngay
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
