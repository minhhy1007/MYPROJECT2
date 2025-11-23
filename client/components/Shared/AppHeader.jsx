// ../components/Shared/AppHeader.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../ProfileMenu"; // Đảm bảo ProfileMenu nằm ở components/

import { navItems } from "../../hooks/useSharedData";
import { sharedStyles } from "../../hooks/useSharedStyles";

function AppHeader({ activeNav, setActiveNav }) {
  const navigate = useNavigate();

  const handleNavClick = (index, path) => {
    if (setActiveNav) {
      setActiveNav(index);
    }
    navigate(path);
  };

  return (
    <header
      className="fixed-top w-100 d-flex align-items-center justify-content-between px-4 py-2"
      style={sharedStyles.header}
    >
      {/* Logo */}
      <div
        className="d-flex align-items-center gap-3"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/reviews")} // Hoặc "/home"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="ACEENGLISH"
          height="40"
          style={sharedStyles.logo}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
        <h5 style={sharedStyles.brandText}>ACEENGLISH</h5>
      </div>

      {/* NAV */}
      <nav className="d-flex gap-4 align-items-center">
        {navItems.map((item, index) => (
          <span
            key={index}
            onClick={() => handleNavClick(index, item.path)}
            className="fw-semibold position-relative"
            style={sharedStyles.navItem(index === activeNav)}
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
              <span style={sharedStyles.activeUnderline} />
            )}
          </span>
        ))}
      </nav>

      {/* User Greeting/Profile */}
      <ProfileMenu />
    </header>
  );
}

export default AppHeader;
