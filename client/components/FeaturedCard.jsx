// ../components/FeaturedCard.jsx
import React from "react";
import { aceHubStyles } from "../hooks/useAceHubStyles";

function FeaturedCard({ item }) {
  return (
    <div
      style={aceHubStyles.featuredCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,217,255,0.4)";
        e.currentTarget.style.borderColor = "rgba(0,217,255,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
        e.currentTarget.style.borderColor = "rgba(0,217,255,0.3)";
      }}
    >
      {/* Image Section */}
      <div style={{ position: "relative" }}>
        <img src={item.image} alt={item.title} style={aceHubStyles.cardImage} />
        <div style={aceHubStyles.tagBadge}>{item.tag}</div>
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
          style={aceHubStyles.cardButton(item.buttonColor)}
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
  );
}
export default FeaturedCard;
