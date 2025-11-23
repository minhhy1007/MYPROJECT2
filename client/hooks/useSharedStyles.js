// ../hooks/useSharedStyles.js

export const sharedStyles = {
  // Styles cho cấu trúc trang
  pageBackground: {
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
    minHeight: "100vh",
  },
  mainContent: {
    background:
      "radial-gradient(circle at top, rgba(0,217,255,0.05), transparent 70%)",
  },

  // Styles cho Header
  header: {
    background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
    boxShadow: "0 4px 25px rgba(0,0,0,0.6)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    zIndex: 1000,
    padding: "12px 32px",
    position: "fixed", // Fixed header
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    transition: "transform 0.3s ease",
    filter: "drop-shadow(0 0 12px #00d9ff)",
  },
  brandText: {
    color: "#00d9ff",
    textShadow: "0 0 12px rgba(0,217,255,0.6)",
    fontSize: "18px",
    fontWeight: "bold",
    margin: 0,
  },

  // Styles cho Navigation
  navItem: (isActive) => ({
    fontWeight: "600",
    fontSize: "15px",
    color: isActive ? "#00d9ff" : "#b0b0b0",
    cursor: "pointer",
    textShadow: isActive
      ? "0 0 15px rgba(0, 217, 255, 0.8)"
      : "0 0 5px rgba(255,255,255,0.2)",
    transition: "all 0.3s ease",
    position: "relative",
    padding: "8px 0",
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

  // Styles cho Page Title (AceHub, Notebook, Speaking)
  pageTitle: {
    fontSize: "34px",
    background: "linear-gradient(90deg, #00d9ff, #38bdf8, #00d9ff, #0077ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 15px rgba(0,217,255,0.6)",
    fontWeight: "bold",
    margin: 0,
  },

  // Styles cho Floating Icon
  floatingMochi: {
    position: "fixed",
    bottom: "80px",
    right: "30px",
    animation: "float 3s ease-in-out infinite",
    zIndex: 999,
  },

  // Styles cho Footer
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    color: "#808080",
    fontSize: "13px",
    textAlign: "center",
    padding: "12px 24px",
  },

  // Styles cho nút Navigation (AceHub)
  navButton: {
    width: "50px",
    height: "50px",
    background: "rgba(255,255,255,0.1)",
    border: "2px solid rgba(0,217,255,0.5)",
    color: "#00d9ff",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
