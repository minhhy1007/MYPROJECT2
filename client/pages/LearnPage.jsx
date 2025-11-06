import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";

function LearnPage() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Ôn tập", path: "/StudyPage" },
    { label: "Học từ mới", path: "/learn" },
    { label: "Sổ tay", path: "/notebook" },
    { label: "IELTS Speaking", path: "/speaking" },
    { label: "AceHub", path: "/hub" },
  ];
  const courses = [
    {
      title: "Economics",
      subtitle: "1. Kinh tế học",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Commerce P1",
      subtitle: "2. Thương mại",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    },
    {
      title: "Commerce P2",
      subtitle: "3. Thương mại",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      title: "Business Planning P1",
      subtitle: "4. Kế hoạch kinh doanh",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
    },
  ];

  const styles = {
    pageBackground: {
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      minHeight: "100vh",
    },
    header: {
      background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
      boxShadow: "0 4px 25px rgba(0,0,0,0.6)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    logo: {
      transition: "transform 0.3s ease",
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
        ? "0 0 15px rgba(0, 217, 255, 0.8)"
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
    tipsCard: {
      background: "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
      borderRadius: "20px",
      boxShadow: "0 8px 25px rgba(0, 217, 255, 0.3)",
      transition: "all 0.3s ease",
    },
    banner: {
      background: "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
      borderRadius: "30px",
      boxShadow: "0 10px 40px rgba(0,217,255,0.4)",
    },
    bannerTitle: {
      color: "#0a0a0a",
      textShadow: "0 0 10px rgba(255,255,255,0.2)",
    },
    courseCard: (index) => ({
      background:
        index === 0
          ? "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)"
          : "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
      borderRadius: "20px",
      transition: "all 0.3s ease",
      boxShadow:
        index === 0
          ? "0 8px 30px rgba(0,217,255,0.4)"
          : "0 4px 15px rgba(0,0,0,0.3)",
    }),
    courseImage: (index) => ({
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      border:
        index === 0 ? "4px solid #0a0a0a" : "4px solid rgba(255,255,255,0.1)",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    }),
    sidebarCard: {
      background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
      borderRadius: "20px",
      border: "2px solid rgba(0,217,255,0.3)",
      boxShadow: "0 8px 25px rgba(0,217,255,0.2)",
      transition: "all 0.3s ease",
    },
    discountBadge: {
      background: "linear-gradient(135deg, #3b0764 0%, #1e1b4b 100%)",
      borderRadius: "15px",
      color: "#facc15",
      boxShadow: "0 0 25px rgba(250, 204, 21, 0.4)",
      textShadow: "0 0 10px rgba(250, 204, 21, 0.6)",
      letterSpacing: "1px",
    },
    memoryBox: {
      background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
      borderRadius: "20px",
      boxShadow: "0 0 25px rgba(0, 217, 255, 0.2)",
      border: "1px solid rgba(0,217,255,0.2)",
    },
    memoryTitle: {
      color: "#38bdf8",
      textShadow: "0 0 10px rgba(56,189,248,0.6)",
    },
    memoryCount: {
      color: "#fbbf24",
      textShadow: "0 0 12px rgba(251,191,36,0.8)",
    },
    upgradeButton: {
      background: "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
      borderRadius: "25px",
      boxShadow: "0 0 20px rgba(0,217,255,0.4)",
      transition: "all 0.3s ease",
      textShadow: "0 0 8px rgba(255,255,255,0.6)",
    },
    extensionBadge: {
      background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
      borderRadius: "15px",
      color: "#1e1b4b",
      boxShadow: "0 0 15px rgba(251,191,36,0.6)",
    },
    extensionTitle: {
      color: "#38bdf8",
      textShadow: "0 0 10px rgba(56,189,248,0.6)",
    },
    footer: {
      borderColor: "rgba(255,255,255,0.1)",
      color: "#808080",
      fontSize: "13px",
    },
  };

  return (
    <div
      className="d-flex flex-column text-light"
      style={styles.pageBackground}
    >
      {/* Header */}
      <header
        className="fixed-top w-100 d-flex align-items-center justify-content-between px-4 py-2"
        style={styles.header}
      >
        {/* Logo */}
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

        {/* Navigation */}
        <nav className="d-flex gap-4 align-items-center">
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => navigate(item.path)}
              className="position-relative"
              style={styles.navItem(index === 1)}
              onMouseEnter={(e) => {
                e.target.style.color = "#00d9ff";
                e.target.style.textShadow =
                  "0 0 15px rgba(0,217,255,0.8), 0 0 25px rgba(0,217,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = index === 1 ? "#00d9ff" : "#b0b0b0";
                e.target.style.textShadow =
                  index === 1
                    ? "0 0 15px rgba(0,217,255,0.8)"
                    : "0 0 5px rgba(255,255,255,0.2)";
              }}
            >
              {item.label}
              {index === 1 && <span style={styles.activeUnderline} />}
            </span>
          ))}
        </nav>

        {/* User Greeting */}
        <ProfileMenu />
      </header>

      {/* Main Content */}
      <div className="container-fluid flex-grow-1 d-flex p-5 mt-5">
        {/* Left Sidebar */}
        <div style={{ width: "300px" }} className="pe-3">
          <div
            className="p-3 d-flex align-items-center gap-3"
            style={styles.tipsCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 12px 35px rgba(0, 217, 255, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(0, 217, 255, 0.3)";
            }}
          >
            <div style={{ fontSize: "40px" }}>💡</div>
            <div>
              <div className="fw-semibold small" style={{ color: "#0a0a0a" }}>
                TIPS GHI NHỚ TỪ VỰNG
              </div>
              <div className="fw-bold fs-4 mt-1" style={{ color: "#0a0a0a" }}>
                »
              </div>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-grow-1 pe-3">
          {/* Banner */}
          <div className="p-4 mb-4 text-center" style={styles.banner}>
            <h2 className="m-0 fw-bold" style={styles.bannerTitle}>
              NEW TOEIC
            </h2>
          </div>

          {/* Courses */}
          <div className="d-flex flex-column gap-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="d-flex align-items-center gap-3 p-4"
                style={styles.courseCard(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(10px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0,217,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow =
                    index === 0
                      ? "0 8px 30px rgba(0,217,255,0.4)"
                      : "0 4px 15px rgba(0,0,0,0.3)";
                }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  style={styles.courseImage(index)}
                />
                <div>
                  <h3
                    className="m-0 fw-bold mb-1"
                    style={{
                      fontSize: "24px",
                      color: index === 0 ? "#0a0a0a" : "#ffffff",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    className="m-0"
                    style={{
                      fontSize: "16px",
                      color: index === 0 ? "#003366" : "#a0a0a0",
                    }}
                  >
                    {course.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={{ width: "350px" }}>
          <div
            className="p-3"
            style={styles.sidebarCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,217,255,0.6)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,217,255,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              className="fw-bold text-center mb-3"
              style={{ color: "#00d9ff", fontSize: "18px" }}
            >
              DANH SÁCH KHÓA HỌC
            </div>

            {/* Ưu đãi giảm giá */}
            <div
              className="p-3 mb-3 text-center fw-bold"
              style={styles.discountBadge}
            >
              ƯU ĐÃI GIẢM 30%
            </div>

            {/* Memory Tip Box */}
            <div className="p-4 mb-3" style={styles.memoryBox}>
              <div
                className="text-center fw-semibold mb-3"
                style={styles.memoryTitle}
              >
                Bạn có thể ghi nhớ
              </div>

              <div
                className="text-center fw-bold mb-3"
                style={{ fontSize: "38px", ...styles.memoryCount }}
              >
                70,000+ từ
              </div>

              <button
                className="btn w-100 text-white fw-bold border-0 py-2 px-4"
                style={styles.upgradeButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 0 30px rgba(0,217,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 0 20px rgba(0,217,255,0.4)";
                }}
              >
                NÂNG CẤP
              </button>
            </div>

            {/* Extension Promotion */}
            <div className="p-4" style={styles.memoryBox}>
              <div
                className="d-inline-block fw-bold mb-3 py-2 px-3 small"
                style={styles.extensionBadge}
              >
                ACE DICTIONARY EXTENSION
              </div>

              <div
                className="fw-bold mb-3"
                style={{
                  fontSize: "20px",
                  lineHeight: "1.3",
                  ...styles.extensionTitle,
                }}
              >
                TRA VÀ LƯU TỪ VỰNG SIÊU TỐC
              </div>

              <button
                className="btn w-100 text-white fw-bold border-0 py-2 px-4"
                style={styles.upgradeButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 0 30px rgba(0,217,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 0 20px rgba(0,217,255,0.4)";
                }}
              >
                TRA CỨU MIỄN PHÍ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-start px-4 py-2 bg-transparent text-light border-top"
        style={styles.footer}
      >
        © ACEVocab ver5.0.1
      </footer>
    </div>
  );
}

export default LearnPage;
