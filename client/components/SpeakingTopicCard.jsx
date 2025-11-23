// ../components/SpeakingTopicCard.jsx
import React from "react";

const cardStyles = {
  base: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    border: "2px solid rgba(0,217,255,0.4)",
    transition: "all 0.3s ease",
  },
  title: { color: "#ffffff", textShadow: "0 0 10px rgba(0,217,255,0.4)" },
  subtitle: { color: "rgba(255,255,255,0.6)" },
  arrow: { color: "#00d9ff", textShadow: "0 0 12px rgba(0,217,255,0.6)" },
  icon: { filter: "drop-shadow(0 5px 15px rgba(0,217,255,0.5))" },
};

function SpeakingTopicCard({ topic }) {
  return (
    <div
      className="d-flex align-items-center gap-3 p-4 rounded-4 shadow"
      style={cardStyles.base}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,217,255,0.5)";
        e.currentTarget.style.borderColor = "rgba(0,217,255,0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,217,255,0.2)";
        e.currentTarget.style.borderColor = "rgba(0,217,255,0.4)";
      }}
    >
      <img
        src={topic.image}
        alt={topic.title}
        className="flex-shrink-0"
        style={{ width: "70px", ...cardStyles.icon }}
      />
      <div className="flex-grow-1">
        <h3
          className="m-0 fw-bold mb-1"
          style={{ fontSize: "22px", ...cardStyles.title }}
        >
          {topic.title}
        </h3>
        <p className="m-0" style={{ fontSize: "15px", ...cardStyles.subtitle }}>
          {topic.subtitle}
        </p>
      </div>
      <div style={{ fontSize: "28px", ...cardStyles.arrow }}>→</div>
    </div>
  );
}
export default SpeakingTopicCard;
