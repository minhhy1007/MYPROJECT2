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
    { label: "AceHub", path: "/hub" },
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
      className="min-vh-100 d-flex flex-column text-white"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      }}
    >
      {/* HEADER */}
      <header
        className="fixed-top d-flex align-items-center justify-content-between px-4 py-2 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <div
          className="d-flex align-items-center gap-2"
          onClick={() => navigate("/reviews")}
          style={{ cursor: "pointer" }}
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
            className="m-0 fw-bold"
            style={{
              fontSize: "18px",
              color: "#00d9ff",
              textShadow: "0 0 12px rgba(0,217,255,0.6)",
            }}
          >
            ACEENGLISH
          </h5>
        </div>

        {/* NAV */}
        <nav className="d-flex gap-4 align-items-center">
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                setActiveNav(index);
                navigate(item.path);
              }}
              className="fw-semibold position-relative"
              style={{
                fontSize: "15px",
                color: index === activeNav ? "#00d9ff" : "#b0b0b0",
                cursor: "pointer",
                textShadow:
                  index === activeNav
                    ? "0 0 15px rgba(0,217,255,0.8)"
                    : "0 0 5px rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
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
                  className="position-absolute"
                  style={{
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
          className="fw-bold"
          style={{
            color: "#00d9ff",
            textShadow: "0 0 10px rgba(0,217,255,0.5)",
          }}
        >
          Hi Guest!
        </div>
      </header>

      {/* MAIN */}
      <div
        className="flex-grow-1 d-flex flex-column align-items-center px-3"
        style={{
          paddingTop: "100px",
          paddingBottom: "60px",
          background:
            "radial-gradient(circle at top, rgba(0,217,255,0.05), transparent 70%)",
        }}
      >
        <h2
          className="fw-bold mb-4 text-center"
          style={{
            fontSize: "34px",
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
          className="d-flex flex-column gap-4 w-100"
          style={{ maxWidth: "850px" }}
        >
          {speakingTopics.map((topic, i) => (
            <div
              key={i}
              className="d-flex align-items-center gap-3 p-4 rounded-4 shadow"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "2px solid rgba(0,217,255,0.4)",
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
                className="flex-shrink-0"
                style={{
                  width: "70px",
                  filter: "drop-shadow(0 5px 15px rgba(0,217,255,0.5))",
                }}
              />
              <div className="flex-grow-1">
                <h3
                  className="m-0 fw-bold mb-1"
                  style={{
                    fontSize: "22px",
                    color: "#ffffff",
                    textShadow: "0 0 10px rgba(0,217,255,0.4)",
                  }}
                >
                  {topic.title}
                </h3>
                <p
                  className="m-0"
                  style={{
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
        className="position-fixed"
        style={{
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
        className="text-center py-2 px-3 border-top small"
        style={{
          color: "#808080",
          fontSize: "13px",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        © ACEENGLISH ver5.0.1
      </footer>
    </div>
  );
}

export default SpeakingPage;
