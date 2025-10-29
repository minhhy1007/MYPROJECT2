import React from "react";
import { useNavigate } from "react-router-dom";

function StudyPage() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Ôn tập", path: "/study" },
    { label: "Học từ mới", path: "/learn" },
    { label: "Sổ tay", path: "/notebook" },
    { label: "IELTS Speaking", path: "/speaking" },
  ];

  return (
    <div
      className="vh-100 d-flex flex-column text-light"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
          padding: "12px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Logo Section */}
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
            alt="AceVocab"
            height="40"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
          <h5
            style={{
              margin: 0,
              fontWeight: "bold",
              fontSize: "18px",
              color: "#00d9ff",
              textShadow: "0 0 12px rgba(0, 217, 255, 0.6)",
            }}
          >
            ACEENGLISH
          </h5>
        </div>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => navigate(item.path)}
              style={{
                fontWeight: "600",
                fontSize: "15px",
                color: index === 0 ? "#00d9ff" : "#b0b0b0",
                cursor: "pointer",
                textShadow:
                  index === 0
                    ? "0 0 15px rgba(0, 217, 255, 0.8)"
                    : "0 0 5px rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#00d9ff";
                e.target.style.textShadow =
                  "0 0 15px rgba(0, 217, 255, 0.8), 0 0 25px rgba(0, 217, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = index === 0 ? "#00d9ff" : "#b0b0b0";
                e.target.style.textShadow =
                  index === 0
                    ? "0 0 15px rgba(0, 217, 255, 0.8)"
                    : "0 0 5px rgba(255,255,255,0.2)";
              }}
            >
              {item.label}
              {index === 0 && (
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

        {/* User Greeting */}
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

      {/* Main Content */}
      <div
        className="container-fluid flex-grow-1 d-flex justify-content-center align-items-center"
        style={{
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Mascot"
          width="140"
          className="mb-3"
          style={{
            filter: "drop-shadow(0 10px 25px rgba(0, 217, 255, 0.3))",
            animation: "float 3s ease-in-out infinite",
          }}
        />
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}
        </style>

        <p
          className="fw-bold fs-5 mb-4"
          style={{
            color: "#e0e0e0",
          }}
        >
          Để kích hoạt tính năng{" "}
          <span
            style={{
              color: "#00d9ff",
              textShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
            }}
          >
            "Thời điểm vàng"
          </span>{" "}
          hãy học 1 bài học từ mới
        </p>

        <button
          className="px-5 py-2 fw-bold text-dark shadow"
          onClick={() => navigate("/learn")}
          style={{
            transition: "all 0.3s ease",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
            color: "white",
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
          }}
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
      </div>

      {/* Footer */}
      <footer
        className="text-start px-4 py-2 bg-transparent text-light small border-top"
        style={{
          borderColor: "rgba(255, 255, 255, 0.1)",
          color: "#808080",
          fontSize: "13px",
        }}
      >
        © ACEVocab ver5.0.1
      </footer>
    </div>
  );
}

export default StudyPage;
