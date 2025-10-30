import React from "react";
import { useNavigate } from "react-router-dom";

function LearnPage() {
  const navigate = useNavigate();

  const navItems = [
    { label: "Ôn tập", path: "/StudyPage" },
    { label: "Học từ mới", path: "/learn" },
    { label: "Sổ tay", path: "/notebook" },
    { label: "IELTS Speaking", path: "/speaking" },
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

  return (
    <div
      className="d-flex flex-column text-light"
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
          boxShadow: "0 4px 25px rgba(0,0,0,0.6)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          position: "fixed",
          width: "100%",
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
          onClick={() => navigate("/reviews")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="ACEVocab"
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
              textShadow: "0 0 12px rgba(0,217,255,0.6)",
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
                color: index === 1 ? "#00d9ff" : "#b0b0b0",
                cursor: "pointer",
                textShadow:
                  index === 1
                    ? "0 0 15px rgba(0, 217, 255, 0.8)"
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
                e.target.style.color = index === 1 ? "#00d9ff" : "#b0b0b0";
                e.target.style.textShadow =
                  index === 1
                    ? "0 0 15px rgba(0,217,255,0.8)"
                    : "0 0 5px rgba(255,255,255,0.2)";
              }}
            >
              {item.label}
              {index === 1 && (
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
        className="container-fluid flex-grow-1 d-flex"
        style={{ padding: "40px" }}
      >
        {/* Left Sidebar */}
        <div style={{ width: "300px", paddingRight: "20px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 8px 25px rgba(0, 217, 255, 0.3)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              transition: "all 0.3s ease",
            }}
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
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#0a0a0a",
                }}
              >
                TIPS GHI NHỚ TỪ VỰNG
              </div>
              <div
                style={{
                  fontSize: "22px",
                  color: "#0a0a0a",
                  fontWeight: "bold",
                  marginTop: "5px",
                }}
              >
                »
              </div>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div style={{ flex: 1, paddingRight: "20px" }}>
          {/* Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
              borderRadius: "30px",
              padding: "30px",
              marginBottom: "30px",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(0,217,255,0.4)",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontWeight: "bold",
                fontSize: "36px",
                color: "#0a0a0a",
                textShadow: "0 0 10px rgba(255,255,255,0.2)",
              }}
            >
              NEW TOEIC
            </h2>
          </div>

          {/* Courses */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {courses.map((course, index) => (
              <div
                key={index}
                style={{
                  background:
                    index === 0
                      ? "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)"
                      : "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                  borderRadius: "20px",
                  padding: "25px 30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow:
                    index === 0
                      ? "0 8px 30px rgba(0,217,255,0.4)"
                      : "0 4px 15px rgba(0,0,0,0.3)",
                }}
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
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border:
                      index === 0
                        ? "4px solid #0a0a0a"
                        : "4px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                />
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: index === 0 ? "#0a0a0a" : "#ffffff",
                      marginBottom: "5px",
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
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
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
              borderRadius: "20px",
              padding: "20px",
              border: "2px solid rgba(0,217,255,0.3)",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(0,217,255,0.2)",
              transition: "all 0.3s ease",
            }}
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
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#00d9ff",
                textAlign: "center",
              }}
            >
              DANH SÁCH KHÓA HỌC
            </div>
            {/* Ưu đãi giảm giá */}
            <div
              style={{
                background: "linear-gradient(135deg, #3b0764 0%, #1e1b4b 100%)",
                borderRadius: "15px",
                padding: "18px",
                marginBottom: "20px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
                color: "#facc15",
                boxShadow: "0 0 25px rgba(250, 204, 21, 0.4)",
                textShadow: "0 0 10px rgba(250, 204, 21, 0.6)",
                letterSpacing: "1px",
              }}
            >
              ƯU ĐÃI GIẢM 30%
            </div>

            {/* Memory Tip Box */}
            <div
              style={{
                background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "20px",
                boxShadow: "0 0 25px rgba(0, 217, 255, 0.2)",
                border: "1px solid rgba(0,217,255,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  color: "#38bdf8",
                  fontWeight: "600",
                  marginBottom: "15px",
                  textAlign: "center",
                  textShadow: "0 0 10px rgba(56,189,248,0.6)",
                }}
              >
                Bạn có thể ghi nhớ
              </div>

              <div
                style={{
                  fontSize: "38px",
                  fontWeight: "bold",
                  color: "#fbbf24",
                  marginBottom: "20px",
                  textAlign: "center",
                  textShadow: "0 0 12px rgba(251,191,36,0.8)",
                }}
              >
                70,000+ từ
              </div>

              <button
                style={{
                  background:
                    "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  padding: "12px 30px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  width: "100%",
                  boxShadow: "0 0 20px rgba(0,217,255,0.4)",
                  transition: "all 0.3s ease",
                  textShadow: "0 0 8px rgba(255,255,255,0.6)",
                }}
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
            <div
              style={{
                background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 0 25px rgba(0,217,255,0.2)",
                border: "1px solid rgba(0,217,255,0.2)",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                  borderRadius: "15px",
                  padding: "8px 15px",
                  display: "inline-block",
                  fontWeight: "bold",
                  fontSize: "12px",
                  color: "#1e1b4b",
                  marginBottom: "15px",
                  boxShadow: "0 0 15px rgba(251,191,36,0.6)",
                }}
              >
                ACE DICTIONARY EXTENSION
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#38bdf8",
                  marginBottom: "20px",
                  lineHeight: "1.3",
                  textShadow: "0 0 10px rgba(56,189,248,0.6)",
                }}
              >
                TRA VÀ LƯU TỪ VỰNG SIÊU TỐC
              </div>

              <button
                style={{
                  background:
                    "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  padding: "12px 30px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  width: "100%",
                  boxShadow: "0 0 20px rgba(0,217,255,0.4)",
                  transition: "all 0.3s ease",
                  textShadow: "0 0 8px rgba(255,255,255,0.6)",
                }}
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
        className="text-start px-4 py-2 bg-transparent text-light small border-top"
        style={{
          borderColor: "rgba(255,255,255,0.1)",
          color: "#808080",
          fontSize: "13px",
        }}
      >
        © ACEVocab ver5.0.1
      </footer>
    </div>
  );
}

export default LearnPage;
