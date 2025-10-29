import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
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
        backdropFilter: "blur(10px)",
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
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="AceEnglish"
          height="40"
          style={{
            transition: "transform 0.3s ease",
            filter: "drop-shadow(0 0 10px #00d9ff)",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#00d9ff",
            textShadow: "0 0 12px rgba(0,217,255,0.6)",
            transition: "all 0.3s ease",
          }}
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
      <nav style={{ display: "flex", alignItems: "center", gap: "35px" }}>
        <NavLink label="Trang chủ" to="/" active />
        <NavLink label="Đánh giá" to="/reviews" />
        <NavLink label="Gói học" to="/pricing" />
        <Link
          to="/signup"
          style={{
            background: "linear-gradient(135deg, #00d9ff 0%, #007bff 100%)",
            color: "white",
            padding: "8px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0 0 15px rgba(0,217,255,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 0 25px rgba(0,217,255,0.7)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
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
  return (
    <Link
      to={to}
      style={{
        color: active ? "#00d9ff" : "#b0b0b0",
        fontWeight: "600",
        fontSize: "15px",
        textDecoration: "none",
        textShadow: active
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
        e.target.style.color = active ? "#00d9ff" : "#b0b0b0";
        e.target.style.textShadow = active
          ? "0 0 15px rgba(0,217,255,0.8)"
          : "0 0 5px rgba(255,255,255,0.2)";
      }}
    >
      {label}
      {active && (
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
    </Link>
  );
}

export default Header;
