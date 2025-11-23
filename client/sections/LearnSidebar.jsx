// ../sections/LearnSidebar.jsx
import React from "react";
import { learnStyles } from "../hooks/useLearnStyles";

function LearnSidebar() {
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

      {/* Ưu đãi giảm giá */}
      <div
        className="p-3 mb-3 text-center fw-bold"
        style={learnStyles.discountBadge}
      >
        ƯU ĐÃI GIẢM 30%
      </div>

      {/* Memory Tip Box */}
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

      {/* Extension Promotion */}
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
