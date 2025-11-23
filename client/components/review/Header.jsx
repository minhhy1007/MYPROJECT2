import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const styles = {
    header: {
      background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
      boxShadow: "0 4px 25px rgba(0, 0, 0, 0.6)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
    },
    logo: {
      transition: "transform 0.3s ease",
      filter: "drop-shadow(0 0 10px #00d9ff)",
    },
    brandText: {
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "18px",
      color: "#00d9ff",
      textShadow: "0 0 12px rgba(0,217,255,0.6)",
      transition: "all 0.3s ease",
    },
    ctaButton: {
      background: "linear-gradient(135deg, #00d9ff 0%, #007bff 100%)",
      borderRadius: "8px",
      boxShadow: "0 0 15px rgba(0,217,255,0.4)",
      transition: "all 0.3s ease",
    },
  };

  return (
    <header
      className="fixed-top w-100 d-flex align-items-center justify-content-between px-5 py-3"
      style={styles.header}
    >
      {/* Logo */}
      <div
        className="d-flex align-items-center gap-3"
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="AceEnglish"
          height="40"
          style={styles.logo}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
        <Link
          to="/"
          style={styles.brandText}
          onMouseEnter={(e) => {
            e.target.style.textShadow =
              "0 0 18px rgba(0,217,255,0.8), 0 0 28px rgba(0,217,255,0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.textShadow = "0 0 12px rgba(0,217,255,0.6)";
          }}
        >
          ACEVOCAB
        </Link>
      </div>

      {/* Navigation */}
      <nav className="d-flex align-items-center gap-4">
        <NavLink label="Trang chủ" to="/" active />
        <NavLink label="Đánh giá" to="/reviews" />
        <NavLink label="Gói học" to="/pricing" />
        <Link
          to="/login"
          className="btn text-white fw-semibold text-decoration-none px-4 py-2"
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 0 25px rgba(0,217,255,0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 0 15px rgba(0,217,255,0.4)";
          }}
        >
          Tham gia ngay
        </Link>
      </nav>
    </header>
  );
}

// Subcomponent cho nav link
function NavLink({ label, to, active }) {
  const styles = {
    navLink: {
      color: active ? "#00d9ff" : "#b0b0b0",
      fontSize: "15px",
      textShadow: active
        ? "0 0 15px rgba(0,217,255,0.8)"
        : "0 0 5px rgba(255,255,255,0.2)",
      transition: "all 0.3s ease",
    },
    activeUnderline: {
      position: "absolute",
      bottom: "-4px",
      left: 0,
      right: 0,
      height: "2px",
      background: "linear-gradient(90deg, transparent, #00d9ff, transparent)",
      boxShadow: "0 0 10px #00d9ff",
    },
  };

  return (
    <Link
      to={to}
      className="text-decoration-none fw-semibold position-relative"
      style={styles.navLink}
      onMouseEnter={(e) => {
        e.target.style.color = "#00d9ff";
        e.target.style.textShadow =
          "0 0 15px rgba(0,217,255,0.8), 0 0 25px rgba(0,217,255,0.5)";
      }}
      onMouseLeave={(e) => {
        e.target.style.color = active ? "#00d9ff" : "#b0b0b0";
        e.target.style.textShadow = active
          ? "0 0 15px rgba(0,217,255,0.8)"
          : "0 0 5px rgba(255,255,255,0.2)";
      }}
    >
      {label}
      {active && <span style={styles.activeUnderline} />}
    </Link>
  );
}

export default Header;
