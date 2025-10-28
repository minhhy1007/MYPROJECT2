import React from "react";

function StudyPage() {
  return (
    <div
      className="vh-100 d-flex flex-column text-light"
      style={{
        background:
          "linear-gradient(135deg, #2a0f4a 0%, #1b0036 40%, #ff6b00 130%)",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      {/* Header */}
      <header
        style={{
          background:
            "linear-gradient(135deg, #2a0f4a 0%, #1b0036 40%, #0d001f 100%)",
          padding: "12px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="AceVocab"
            height="40"
          />
          <h5
            style={{
              margin: 0,
              fontWeight: "bold",
              fontSize: "18px",
              color: "#fbbf24",
              textShadow: "0 0 10px rgba(251, 191, 36, 0.5)",
            }}
          >
            ACEENGLISH
          </h5>
        </div>

        {/* Navigation Items */}
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["Ôn tập", "Học từ mới", "Sổ tay", "IELTS Speaking"].map(
            (item, index) => (
              <span
                key={index}
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  color: index === 0 ? "#00d9ff" : "white",
                  textShadow:
                    index === 0
                      ? "0 0 15px rgba(0, 217, 255, 0.8), 0 0 25px rgba(0, 217, 255, 0.5)"
                      : "0 2px 4px rgba(0, 0, 0, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  padding: "8px 4px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#00d9ff";
                  e.target.style.textShadow = "0 0 15px rgba(0, 217, 255, 0.8)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  if (index !== 0) {
                    e.target.style.color = "white";
                    e.target.style.textShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";
                  } else {
                    e.target.style.color = "#00d9ff";
                    e.target.style.textShadow =
                      "0 0 15px rgba(0, 217, 255, 0.8), 0 0 25px rgba(0, 217, 255, 0.5)";
                  }
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {item}
                {index === 0 && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      height: "2px",
                      background:
                        "linear-gradient(90deg, transparent, #00d9ff, transparent)",
                      boxShadow: "0 0 10px #00d9ff",
                    }}
                  />
                )}
              </span>
            )
          )}
        </nav>

        {/* User Greeting */}
        <div
          style={{
            fontWeight: "bold",
            color: "#fbbf24",
            textShadow: "0 0 8px rgba(251, 191, 36, 0.4)",
          }}
        >
          Hi Guest!
        </div>
      </header>
      {/* Main Content */}
      <div className="container-fluid flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Mascot"
            width="150"
            className="mb-3"
          />
          <p className="fw-bold fs-5 text-light">
            Để kích hoạt tính năng{" "}
            <span className="text-warning">"Thời điểm vàng"</span> hãy học 1 bài
            học từ mới
          </p>
          <button className="btn btn-warning px-5 py-2 fw-bold text-dark shadow">
            Học từ mới
          </button>
        </div>

        {/* Sidebar Right */}
        <div className="position-absolute end-0 top-50 translate-middle-y me-4">
          <div className="bg-dark bg-opacity-50 text-light p-3 rounded mb-3 shadow">
            <strong>Bạn đã học được</strong>
            <p className="m-0 text-center fw-bold fs-5">0 từ</p>
          </div>
          <div className="bg-dark bg-opacity-50 text-light p-3 rounded shadow">
            <strong>Bạn đã học liên tục</strong>
            <p className="m-0 text-center fw-bold fs-5">0 ngày</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-start px-4 py-2 bg-transparent text-light small border-top border-secondary">
        © MochiVocab ver5.0.1
      </footer>
    </div>
  );
}

export default StudyPage;
