import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function AceHubPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navItems = [
    { label: "Ôn tập", path: "/StudyPage" },
    { label: "Học từ mới", path: "/learn" },
    { label: "Sổ tay", path: "/notebook" },
    { label: "IELTS Speaking", path: "/speaking" },
    { label: "AceHub", path: "/hub" },
  ];

  const featuredItems = [
    {
      tag: "Mới",
      date: "10-09-2024",
      title: "COMBO TÌNH BẠN GIẢM GIÁ 40% - BEST FRIENDS, PERFECT STUDY",
      image: "YOUR_IMAGE_URL_1", // Thêm URL hình ảnh của bạn tại đây
      buttonText: "Nhận ưu đãi ngay",
      buttonColor: "#22c55e",
    },
    {
      tag: "Mới",
      date: "01-11-2025",
      title:
        "Cách học từ vựng tiếng Anh hiệu quả và nhớ lâu (từ giỏi Nhì QG tiếng Anh)",
      image: "YOUR_IMAGE_URL_2", // Thêm URL hình ảnh của bạn tại đây
      buttonText: "XEM NGAY",
      buttonColor: "#22c55e",
    },
    {
      tag: "Hot",
      date: "15-10-2024",
      title: "Adaptive Learning - Phương pháp học thích ứng cá nhân hóa",
      image: "YOUR_IMAGE_URL_3", // Thêm URL hình ảnh của bạn tại đây
      buttonText: "KHÁM PHÁ",
      buttonColor: "#22c55e",
    },
    {
      tag: "Mới",
      date: "20-10-2024",
      title: "TẶNG TÀI LIỆU NÂNG CẤP TỪ VỰNG - Combo học tập đặc biệt",
      image: "YOUR_IMAGE_URL_4", // Thêm URL hình ảnh của bạn tại đây
      buttonText: "NHẬN QUÀ",
      buttonColor: "#22c55e",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.max(1, featuredItems.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.max(1, featuredItems.length - 1)) %
        Math.max(1, featuredItems.length - 1)
    );
  };

  const styles = {
    pageBackground: {
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      minHeight: "100vh",
    },
    header: {
      background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
      boxShadow: "0 4px 25px rgba(0,0,0,0.6)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      padding: "12px 32px",
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
    userGreeting: {
      color: "#00d9ff",
      textShadow: "0 0 10px rgba(0,217,255,0.5)",
      fontWeight: "bold",
    },
    mainContent: {
      paddingTop: "120px",
      paddingBottom: "60px",
      background:
        "radial-gradient(circle at top, rgba(0,217,255,0.05), transparent 70%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "120px 24px 60px",
    },
    titleSection: {
      fontSize: "34px",
      background: "linear-gradient(90deg, #00d9ff, #38bdf8, #00d9ff, #0077ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 0 15px rgba(0,217,255,0.6)",
      fontWeight: "bold",
      margin: 0,
    },
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
    featuredCard: {
      width: "48%",
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
      border: "2px solid rgba(0,217,255,0.3)",
      borderRadius: "24px",
      overflow: "hidden",
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      flexShrink: 0,
    },
    cardImage: {
      height: "250px",
      width: "100%",
      objectFit: "cover",
      backgroundColor: "#2a2a2a",
    },
    tagBadge: {
      background: "#3b82f6",
      color: "white",
      fontSize: "13px",
      fontWeight: "bold",
      padding: "6px 16px",
      borderRadius: "20px",
      boxShadow: "0 4px 15px rgba(59,130,246,0.5)",
      position: "absolute",
      top: "15px",
      left: "15px",
    },
    cardButton: (color) => ({
      background: color,
      color: "white",
      border: "none",
      padding: "12px",
      fontSize: "15px",
      fontWeight: "bold",
      borderRadius: "25px",
      width: "100%",
      boxShadow: `0 5px 20px ${color}80`,
      transition: "all 0.3s ease",
      cursor: "pointer",
    }),
    floatingMochi: {
      position: "fixed",
      bottom: "80px",
      right: "30px",
      animation: "float 3s ease-in-out infinite",
      zIndex: 999,
    },
    footer: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      color: "#808080",
      fontSize: "13px",
      textAlign: "center",
      padding: "12px 24px",
    },
  };

  return (
    <div style={styles.pageBackground}>
      {/* HEADER */}
      <header style={styles.header}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
              alt="ACEENGLISH"
              height="40"
              style={styles.logo}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
            <h5 style={styles.brandText}>ACEENGLISH</h5>
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

          {/* User Greeting */}
          <div style={styles.userGreeting}>Hi Guest!</div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div style={styles.mainContent}>
        {/* TITLE */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <span style={{ fontSize: "32px" }}>⭐</span>
            <h2 style={styles.titleSection}>ĐANG DIỄN RA</h2>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          style={{ position: "relative", width: "100%", maxWidth: "1200px" }}
        >
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            style={{
              ...styles.navButton,
              position: "absolute",
              left: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,217,255,0.2)";
              e.currentTarget.style.borderColor = "#00d9ff";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,217,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.borderColor = "rgba(0,217,255,0.5)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            style={{
              ...styles.navButton,
              position: "absolute",
              right: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,217,255,0.2)";
              e.currentTarget.style.borderColor = "#00d9ff";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,217,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.borderColor = "rgba(0,217,255,0.5)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                gap: "24px",
                transform: `translateX(-${currentSlide * 52}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {featuredItems.map((item, index) => (
                <div
                  key={index}
                  style={styles.featuredCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(0,217,255,0.4)";
                    e.currentTarget.style.borderColor = "rgba(0,217,255,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0,0,0,0.3)";
                    e.currentTarget.style.borderColor = "rgba(0,217,255,0.3)";
                  }}
                >
                  {/* Image Section */}
                  <div style={{ position: "relative" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={styles.cardImage}
                    />
                    <div style={styles.tagBadge}>{item.tag}</div>
                  </div>

                  {/* Content Section */}
                  <div style={{ padding: "24px" }}>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.6)",
                        marginBottom: "12px",
                      }}
                    >
                      {item.date}
                    </div>
                    <h3
                      style={{
                        fontSize: "18px",
                        color: "#ffffff",
                        textShadow: "0 0 10px rgba(0,217,255,0.3)",
                        minHeight: "60px",
                        marginBottom: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </h3>
                    <button
                      style={styles.cardButton(item.buttonColor)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = `0 8px 25px ${item.buttonColor}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = `0 5px 20px ${item.buttonColor}80`;
                      }}
                    >
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING ICON */}
      <div style={styles.floatingMochi}>
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
      <footer style={styles.footer}>© ACEENGLISH ver5.0.1</footer>
    </div>
  );
}

export default AceHubPage;
