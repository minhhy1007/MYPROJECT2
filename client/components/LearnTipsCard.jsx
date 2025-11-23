// ../components/LearnTipsCard.jsx
import React from "react";
import { learnStyles } from "../hooks/useLearnStyles";

function LearnTipsCard() {
  return (
    <div
      className="p-3 d-flex align-items-center gap-3"
      style={learnStyles.tipsCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 217, 255, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 217, 255, 0.3)";
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
  );
}
export default LearnTipsCard;
