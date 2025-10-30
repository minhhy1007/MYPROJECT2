import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SpeakingPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(3);

  const navItems = [
    { label: "Ôn tập", path: "/StudyPage" },
    { label: "Học từ mới", path: "/learn" },
    { label: "Sổ tay", path: "/notebook" },
    { label: "IELTS Speaking", path: "/speaking" },
  ];

  const speakingTopics = [
    {
      title: "Luyện phát âm",
      subtitle: "Từ vựng chứa âm /e/ð/æ/",
      image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    },
    {
      title: "Luyện trả lời câu hỏi",
      subtitle: "Chủ đề Travel",
      image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    },
    {
      title: "IELTS Speaking part 1",
      subtitle: "Chủ đề Study",
      image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        color: "white",
        minHeight: "100vh",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
          padding: "12px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 25px rgba(0, 0, 0, 0.6)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/reviews")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="ACEENGLISH"
            height="40"
            style={{
              transition: "transform 0.3s ease",
              filter: "drop-shadow(0 0 12px #00d9ff)",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
          <h5
            style={{
              margin: 0,
              fontWeight: "bold",
              fontSize: "18px",
              color: "#00d9ff",
              textShadow: "0 0 12px rgba(0,217,255,0.6)",
            }}
          >
            ACEENGLISH
          </h5>
        </div>

        {/* NAV */}
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                setActiveNav(index);
                navigate(item.path);
              }}
              style={{
                fontWeight: "600",
                fontSize: "15px",
                color: index === activeNav ? "#00d9ff" : "#b0b0b0",
                cursor: "pointer",
                textShadow:
                  index === activeNav
                    ? "0 0 15px rgba(0,217,255,0.8)"
                    : "0 0 5px rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#00d9ff";
                e.target.style.textShadow =
                  "0 0 15px rgba(0,217,255,0.8), 0 0 25px rgba(0,217,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color =
                  index === activeNav ? "#00d9ff" : "#b0b0b0";
                e.target.style.textShadow =
                  index === activeNav
                    ? "0 0 15px rgba(0,217,255,0.8)"
                    : "0 0 5px rgba(255,255,255,0.2)";
              }}
            >
              {item.label}
              {index === activeNav && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent, #00d9ff, transparent)",
                    boxShadow: "0 0 10px #00d9ff",
                  }}
                />
              )}
            </span>
          ))}
        </nav>

        {/* Greeting */}
        <div
          style={{
            fontWeight: "bold",
            color: "#00d9ff",
            textShadow: "0 0 10px rgba(0,217,255,0.5)",
          }}
        >
          Hi Guest!
        </div>
      </header>

      {/* MAIN */}
      <div
        style={{
          flex: 1,
          paddingTop: "100px",
          padding: "80px 20px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background:
            "radial-gradient(circle at top, rgba(0,217,255,0.05), transparent 70%)",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "bold",
            marginBottom: "40px",
            background:
              "linear-gradient(90deg, #00d9ff, #38bdf8, #00d9ff, #0077ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 15px rgba(0,217,255,0.6)",
          }}
        >
          LUYỆN SPEAKING CÙNG ACEENGLISH
        </h2>

        {/* TOPICS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            maxWidth: "850px",
            width: "100%",
          }}
        >
          {speakingTopics.map((topic, i) => (
            <div
              key={i}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "2px solid rgba(0,217,255,0.4)",
                borderRadius: "20px",
                padding: "28px 40px",
                display: "flex",
                alignItems: "center",
                gap: "25px",
                boxShadow: "0 8px 25px rgba(0,217,255,0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(0,217,255,0.5)";
                e.currentTarget.style.borderColor = "rgba(0,217,255,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,217,255,0.2)";
                e.currentTarget.style.borderColor = "rgba(0,217,255,0.4)";
              }}
            >
              <img
                src={topic.image}
                alt={topic.title}
                style={{
                  width: "70px",
                  filter: "drop-shadow(0 5px 15px rgba(0,217,255,0.5))",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    margin: 0,
                    fontWeight: "bold",
                    fontSize: "22px",
                    color: "#ffffff",
                    textShadow: "0 0 10px rgba(0,217,255,0.4)",
                    marginBottom: "5px",
                  }}
                >
                  {topic.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {topic.subtitle}
                </p>
              </div>
              <div
                style={{
                  fontSize: "28px",
                  color: "#00d9ff",
                  textShadow: "0 0 12px rgba(0,217,255,0.6)",
                }}
              >
                →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FLOATING ICON */}
      <div
        style={{
          position: "fixed",
          bottom: "80px",
          right: "30px",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Mochi"
          width="80"
          style={{
            filter: "drop-shadow(0 5px 20px rgba(0,217,255,0.5))",
          }}
        />
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
        `}
      </style>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "10px 20px",
          color: "#808080",
          fontSize: "13px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        © ACEENGLISH ver5.0.1
      </footer>
    </div>
  );
}

export default SpeakingPage;
