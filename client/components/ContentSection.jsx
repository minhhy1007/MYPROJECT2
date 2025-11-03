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

  const styles = {
    section: {
      background: "#0a0a0a",
    },
    title: {
      fontSize: "36px",
      color: "white",
    },
    featureCard: {
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
      borderRadius: "20px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    iconBox: {
      width: "70px",
      height: "70px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "15px",
      fontSize: "32px",
      boxShadow: "0 5px 15px rgba(102, 126, 234, 0.3)",
    },
    featureTitle: {
      fontSize: "20px",
      color: "white",
      lineHeight: "1.4",
    },
    listItem: {
      color: "#b0b0b0",
      fontSize: "15px",
      transition: "all 0.2s ease",
      cursor: "pointer",
    },
    hoverOverlay: {
      background:
        "linear-gradient(135deg, rgba(0, 217, 255, 0.03) 0%, rgba(102, 126, 234, 0.03) 100%)",
      opacity: 0,
      transition: "opacity 0.3s ease",
      pointerEvents: "none",
      borderRadius: "20px",
    },
  };

  return (
    <section className="py-5 text-white" style={styles.section}>
      <div className="container" style={{ maxWidth: "1400px" }}>
        <h2 className="fw-bold text-center mb-5" style={styles.title}>
          Nội dung học & Tài nguyên
        </h2>

        <div className="row g-4 px-3">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className="p-4 position-relative overflow-hidden"
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0, 217, 255, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.3)";
                  const overlay =
                    e.currentTarget.querySelector(".hover-overlay");
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  const overlay =
                    e.currentTarget.querySelector(".hover-overlay");
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                {/* Icon */}
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={styles.iconBox}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h5 className="fw-bold mb-3" style={styles.featureTitle}>
                  {feature.title}
                </h5>

                {/* Items */}
                <ul className="list-unstyled m-0 p-0">
                  {feature.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="py-3"
                      style={{
                        ...styles.listItem,
                        borderBottom:
                          itemIndex < feature.items.length - 1
                            ? "1px solid rgba(255, 255, 255, 0.05)"
                            : "none",
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
                  className="position-absolute top-0 start-0 end-0 bottom-0 hover-overlay"
                  style={styles.hoverOverlay}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
