import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NotebookPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNav, setActiveNav] = useState(2);

  const navItems = [
    { label: "Ôn tập", path: "/StudyPage" },
    { label: "Học từ mới", path: "/learn" },
    { label: "Sổ tay", path: "/notebook" },
    { label: "IELTS Speaking", path: "/speaking" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        color: "white",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
          padding: "14px 40px",
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
        {/* LOGO */}
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
            alt="ACEVocab"
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
            ACEVOCAB
          </h5>
        </div>

        {/* NAVIGATION */}
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

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          paddingTop: "120px",
          paddingBottom: "60px",
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
          SỔ TAY ACEVOCAB
        </h2>

        {/* SEARCH BAR */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "60px",
            maxWidth: "520px",
            width: "90%",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
            borderRadius: "50px",
            overflow: "hidden",
            boxShadow: "0 0 25px rgba(0, 217, 255, 0.2)",
            border: "1px solid rgba(0,217,255,0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <input
            type="text"
            placeholder="🔍 Gõ vào đây từ bạn muốn tìm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "14px 24px",
              fontSize: "15px",
              color: "white",
              background: "transparent",
            }}
          />
          <button
            style={{
              background: "linear-gradient(135deg, #00d9ff 0%, #007bff 100%)",
              color: "white",
              border: "none",
              padding: "14px 32px",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0, 217, 255, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 8px 25px rgba(0,217,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 20px rgba(0,217,255,0.3)";
            }}
          >
            Search
          </button>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "900px",
            padding: "0 20px",
          }}
        >
          {[
            { count: 0, label: "từ ôn tập", color: "#00d9ff" },
            { count: 0, label: "từ ngủ đông", color: "#fbbf24" },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
                borderRadius: "20px",
                padding: "40px 60px",
                textAlign: "center",
                boxShadow: `0 0 40px ${card.color}40`,
                border: `1px solid ${card.color}50`,
                minWidth: "280px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 0 60px ${card.color}99`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 0 40px ${card.color}40`;
              }}
            >
              <h3
                style={{
                  fontSize: "52px",
                  fontWeight: "bold",
                  color: card.color,
                  margin: "10px 0",
                  textShadow: `0 0 25px ${card.color}99`,
                }}
              >
                {card.count}
              </h3>
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                alt="icon"
                width="120"
                style={{
                  marginBottom: "20px",
                  filter: `drop-shadow(0 5px 15px ${card.color}66)`,
                }}
              />
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)" }}>
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>

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
        © ACEVOCAB ver5.0.1
      </footer>
    </div>
  );
}

export default NotebookPage;
