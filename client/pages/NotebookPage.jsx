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

  const styles = {
    pageBackground: {
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      fontFamily: "Segoe UI, Arial, sans-serif",
    },
    header: {
      background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
      boxShadow: "0 4px 25px rgba(0, 0, 0, 0.6)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      zIndex: 1000,
    },
    logo: {
      transition: "transform 0.3s ease",
      filter: "drop-shadow(0 0 12px #00d9ff)",
    },
    brandText: {
      color: "#00d9ff",
      textShadow: "0 0 12px rgba(0,217,255,0.6)",
    },
    navItem: (isActive) => ({
      fontWeight: "600",
      fontSize: "15px",
      color: isActive ? "#00d9ff" : "#b0b0b0",
      cursor: "pointer",
      textShadow: isActive
        ? "0 0 15px rgba(0,217,255,0.8)"
        : "0 0 5px rgba(255,255,255,0.2)",
      transition: "all 0.3s ease",
    }),
    activeUnderline: {
      position: "absolute",
      bottom: "-4px",
      left: 0,
      right: 0,
      height: "2px",
      background: "linear-gradient(90deg, transparent, #00d9ff, transparent)",
      boxShadow: "0 0 10px #00d9ff",
    },
    userGreeting: {
      color: "#00d9ff",
      textShadow: "0 0 10px rgba(0,217,255,0.5)",
    },
    mainContent: {
      background:
        "radial-gradient(circle at top, rgba(0,217,255,0.05), transparent 70%)",
    },
    pageTitle: {
      fontSize: "34px",
      background: "linear-gradient(90deg, #00d9ff, #38bdf8, #00d9ff, #0077ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 0 15px rgba(0,217,255,0.6)",
    },
    searchBar: {
      maxWidth: "520px",
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
      borderRadius: "50px",
      boxShadow: "0 0 25px rgba(0, 217, 255, 0.2)",
      border: "1px solid rgba(0,217,255,0.3)",
      backdropFilter: "blur(10px)",
    },
    searchInput: {
      border: "none",
      outline: "none",
      fontSize: "15px",
      color: "white",
      background: "transparent",
    },
    searchButton: {
      background: "linear-gradient(135deg, #00d9ff 0%, #007bff 100%)",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 20px rgba(0, 217, 255, 0.3)",
    },
    card: (color) => ({
      background: `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
      borderRadius: "20px",
      boxShadow: `0 0 40px ${color}40`,
      border: `1px solid ${color}50`,
      minWidth: "280px",
      transition: "all 0.3s ease",
      cursor: "pointer",
    }),
    cardCount: (color) => ({
      fontSize: "52px",
      color: color,
      textShadow: `0 0 25px ${color}99`,
    }),
    cardIcon: (color) => ({
      filter: `drop-shadow(0 5px 15px ${color}66)`,
    }),
    footer: {
      color: "#808080",
      fontSize: "13px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
    },
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column text-white"
      style={styles.pageBackground}
    >
      {/* HEADER */}
      <header
        className="fixed-top w-100 d-flex align-items-center justify-content-between px-5 py-3"
        style={styles.header}
      >
        {/* LOGO */}
        <div
          className="d-flex align-items-center gap-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/reviews")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="ACEVocab"
            height="40"
            style={styles.logo}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
          <h5 className="m-0 fw-bold" style={styles.brandText}>
            ACEENGLISH
          </h5>
        </div>

        {/* NAVIGATION */}
        <nav className="d-flex gap-4 align-items-center">
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                setActiveNav(index);
                navigate(item.path);
              }}
              className="position-relative"
              style={styles.navItem(index === activeNav)}
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
              {index === activeNav && <span style={styles.activeUnderline} />}
            </span>
          ))}
        </nav>

        <div className="fw-bold" style={styles.userGreeting}>
          Hi Guest!
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div
        className="flex-grow-1 d-flex flex-column align-items-center py-5"
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
          ...styles.mainContent,
        }}
      >
        <h2 className="fw-bold mb-5" style={styles.pageTitle}>
          SỔ TAY ACEENGLISH
        </h2>

        {/* SEARCH BAR */}
        <div
          className="d-flex align-items-center mb-5 w-90 overflow-hidden"
          style={styles.searchBar}
        >
          <input
            type="text"
            placeholder="🔍 Gõ vào đây từ bạn muốn tìm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow-1 px-4 py-3"
            style={styles.searchInput}
          />
          <button
            className="btn text-white fw-bold border-0 px-4 py-3"
            style={styles.searchButton}
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
          className="d-flex gap-4 justify-content-center flex-wrap px-3"
          style={{ maxWidth: "900px" }}
        >
          {[
            { count: 0, label: "từ ôn tập", color: "#00d9ff" },
            { count: 0, label: "từ ngủ đông", color: "#fbbf24" },
          ].map((card, i) => (
            <div
              key={i}
              className="text-center p-5"
              style={styles.card(card.color)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 0 60px ${card.color}99`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 0 40px ${card.color}40`;
              }}
            >
              <h3 className="fw-bold my-2" style={styles.cardCount(card.color)}>
                {card.count}
              </h3>
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                alt="icon"
                width="120"
                className="mb-3"
                style={styles.cardIcon(card.color)}
              />
              <p
                className="mb-0"
                style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)" }}
              >
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-2 px-3" style={styles.footer}>
        © ACEENGLISH ver5.0.1
      </footer>
    </div>
  );
}

export default NotebookPage;
