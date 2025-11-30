import React, { useState } from "react";
import { learnStyles } from "../hooks/useLearnStyles";
import { ChevronDown, ChevronUp } from "lucide-react";

const topicCategories = [
  { id: 1, name: "Giao tiếp hàng ngày", icon: "💬", count: 250 },
  { id: 2, name: "Kinh doanh", icon: "💼", count: 180 },
  { id: 3, name: "Du lịch", icon: "✈️", count: 150 },
  { id: 4, name: "Công nghệ", icon: "💻", count: 200 },
  { id: 5, name: "Sức khỏe", icon: "🏥", count: 120 },
  { id: 6, name: "Giáo dục", icon: "📚", count: 160 },
  { id: 7, name: "Ẩm thực", icon: "🍽️", count: 140 },
  { id: 8, name: "Thể thao", icon: "⚽", count: 110 },
];

function LearnSidebar() {
  const [showTopics, setShowTopics] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleButtonHover = (e, color) => {
    e.currentTarget.style.boxShadow = `0 0 30px ${color}ff`;
  };
  const handleButtonLeave = (e, color) => {
    e.currentTarget.style.boxShadow = `0 0 20px ${color}80`;
  };

  return (
    <div
      className="p-3"
      style={learnStyles.sidebarCard}
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
      <div className="mb-3">
        <div
          onClick={() => setShowTopics(!showTopics)}
          style={{
            background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
            borderRadius: "15px",
            padding: "12px 16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,217,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span
            style={{
              color: "#38bdf8",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            📑 CHỦ ĐỀ HỌC TẬP
          </span>
          {showTopics ? (
            <ChevronUp size={20} color="#38bdf8" />
          ) : (
            <ChevronDown size={20} color="#38bdf8" />
          )}
        </div>

        {showTopics && (
          <div
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              paddingRight: "4px",
            }}
          >
            {topicCategories.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                style={{
                  background:
                    selectedTopic === topic.id
                      ? "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)"
                      : "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  padding: "10px 12px",
                  marginBottom: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                  border:
                    selectedTopic === topic.id
                      ? "2px solid #00d9ff"
                      : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (selectedTopic !== topic.id) {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.1)";
                    e.currentTarget.style.borderColor = "rgba(0,217,255,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedTopic !== topic.id) {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "18px" }}>{topic.icon}</span>
                  <span
                    style={{
                      color:
                        selectedTopic === topic.id
                          ? "#0a0a0a"
                          : "rgba(255,255,255,0.9)",
                      fontSize: "13px",
                      fontWeight: selectedTopic === topic.id ? "bold" : "500",
                    }}
                  >
                    {topic.name}
                  </span>
                </div>
                <span
                  style={{
                    background:
                      selectedTopic === topic.id
                        ? "rgba(0,0,0,0.2)"
                        : "rgba(0,217,255,0.2)",
                    color:
                      selectedTopic === topic.id
                        ? "#0a0a0a"
                        : "#00d9ff",
                    fontSize: "11px",
                    fontWeight: "bold",
                    padding: "2px 8px",
                    borderRadius: "8px",
                  }}
                >
                  {topic.count}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="p-3 mb-3 text-center fw-bold"
        style={learnStyles.discountBadge}
      >
        ƯU ĐÃI GIẢM 30%
      </div>
      <div className="p-4 mb-3" style={learnStyles.memoryBox}>
        <div
          className="text-center fw-semibold mb-3"
          style={learnStyles.memoryTitle}
        >
          Bạn có thể ghi nhớ
        </div>
        <div
          className="text-center fw-bold mb-3"
          style={{ fontSize: "38px", ...learnStyles.memoryCount }}
        >
          70,000+ từ
        </div>
        <button
          className="btn w-100 text-white fw-bold border-0 py-2 px-4"
          style={learnStyles.upgradeButton}
          onMouseEnter={(e) => handleButtonHover(e, "rgba(0,217,255,0.7)")}
          onMouseLeave={(e) => handleButtonLeave(e, "rgba(0,217,255,0.4)")}
        >
          NÂNG CẤP
        </button>
      </div>
      <div className="p-4" style={learnStyles.memoryBox}>
        <div
          className="d-inline-block fw-bold mb-3 py-2 px-3 small"
          style={learnStyles.extensionBadge}
        >
          ACE DICTIONARY EXTENSION
        </div>
        <div
          className="fw-bold mb-3"
          style={{
            fontSize: "20px",
            lineHeight: "1.3",
            ...learnStyles.extensionTitle,
          }}
        >
          TRA VÀ LƯU TỪ VỰNG SIÊU TỐC
        </div>
        <button
          className="btn w-100 text-white fw-bold border-0 py-2 px-4"
          style={learnStyles.upgradeButton}
          onMouseEnter={(e) => handleButtonHover(e, "rgba(0,217,255,0.7)")}
          onMouseLeave={(e) => handleButtonLeave(e, "rgba(0,217,255,0.4)")}
        >
          TRA CỨU MIỄN PHÍ
        </button>
      </div>
    </div>
  );
}
export default LearnSidebar;

