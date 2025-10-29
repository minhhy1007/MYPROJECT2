import React from "react";

function FeatureSection() {
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

  return (
    <section
      style={{
        padding: "80px 0",
        background: "#0a0a0a",
        color: "white",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2
          className="fw-bold text-center mb-5"
          style={{
            fontSize: "36px",
            color: "white",
            letterSpacing: "1px",
          }}
        >
          Tính năng nổi bật của{" "}
          <span style={{ color: "#00d9ff" }}>ACEENGLISH</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            padding: "0 20px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                borderRadius: "20px",
                padding: "35px 30px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0, 217, 255, 0.2)";
                e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  marginBottom: "20px",
                  boxShadow: "0 5px 15px rgba(102, 126, 234, 0.3)",
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h5
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: "15px",
                }}
              >
                {feature.title}
              </h5>

              {/* Description */}
              <p
                style={{
                  color: "#b0b0b0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  transition: "color 0.2s ease",
                }}
              >
                {feature.desc}
              </p>

              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(102, 126, 234, 0.05) 100%)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  borderRadius: "20px",
                }}
                className="hover-overlay"
              ></div>
            </div>
          ))}
        </div>

        {/* Nút hành động */}
        <div className="text-center mt-5">
          <button
            style={{
              background: "linear-gradient(135deg, #00d9ff 0%, #667eea 100%)",
              border: "none",
              padding: "12px 30px",
              color: "white",
              fontSize: "16px",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.5)";
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

      <style>
        {`
          .hover-overlay:hover {
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
}

export default FeatureSection;
