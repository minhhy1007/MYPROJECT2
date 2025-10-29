import React from "react";

function ContentSection() {
  const features = [
    {
      icon: "🔗",
      title: "MochiMochi - Học tiếng Anh",
      items: ["ACEVocab", "ACEListening", "ACEVideo"],
    },
    {
      icon: "🌐",
      title: "Học từ vựng theo chủ đề",
      items: ["IELTS Vocabulary", "TOEIC Vocabulary", "Giao tiếp hàng ngày"],
    },
    {
      icon: "🤖",
      title: "Học tiếng Anh qua tài nguyên",
      items: ["Phim & Bài hát", "TED Talks", "Podcast tiếng Anh"],
    },
    {
      icon: "📱",
      title: "Tài liệu bổ sung",
      items: [
        "Tài liệu TOEIC/IELTS",
        "Mẹo học từ vựng nhanh",
        "Phương pháp học thông minh",
      ],
    },
    {
      icon: "🔍",
      title: "Luyện tập & Kiểm tra",
      items: ["Bài tập từ vựng", "Quiz & Games", "Kiểm tra trình độ"],
    },
    {
      icon: "👥",
      title: "Cộng đồng học tập",
      items: [
        "Diễn đàn thảo luận",
        "Nhóm học cùng nhau",
        "Chia sẻ kinh nghiệm",
      ],
    },
  ];

  return (
    <section
      style={{
        padding: "80px 0",
        background: "#0a0a0a",
        color: "white",
      }}
    >
      <div className="container" style={{ maxWidth: "1400px" }}>
        <h2
          className="fw-bold text-center mb-5"
          style={{
            fontSize: "36px",
            color: "white",
            marginBottom: "60px",
          }}
        >
          Nội dung học & Tài nguyên
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
            padding: "0 20px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                borderRadius: "20px",
                padding: "35px 30px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0, 217, 255, 0.2)";
                e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  marginBottom: "20px",
                  boxShadow: "0 5px 15px rgba(102, 126, 234, 0.3)",
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h5
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: "18px",
                  lineHeight: "1.4",
                }}
              >
                {feature.title}
              </h5>

              {/* Items */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {feature.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    style={{
                      padding: "12px 0",
                      color: "#b0b0b0",
                      fontSize: "15px",
                      borderBottom:
                        itemIndex < feature.items.length - 1
                          ? "1px solid rgba(255, 255, 255, 0.05)"
                          : "none",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#00d9ff";
                      e.target.style.paddingLeft = "10px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#b0b0b0";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Gradient overlay on hover */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(0, 217, 255, 0.03) 0%, rgba(102, 126, 234, 0.03) 100%)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                  borderRadius: "20px",
                }}
                className="hover-overlay"
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .container > div > div:hover .hover-overlay {
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
}

export default ContentSection;
