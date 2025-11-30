// ../components/VideoCard.jsx
import React from "react";
import { Play, Clock } from "lucide-react";

function VideoCard({ video }) {
  const handleClick = () => {
    if (video.url) {
      window.open(video.url, "_blank");
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        border: "2px solid rgba(255,59,48,0.3)",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        width: "100%",
        maxWidth: "380px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 15px 40px rgba(255,59,48,0.4)";
        e.currentTarget.style.borderColor = "rgba(255,59,48,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
        e.currentTarget.style.borderColor = "rgba(255,59,48,0.3)";
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            backgroundColor: "#2a2a2a",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(255,59,48,0.9)",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(255,59,48,0.6)",
          }}
        >
          <Play size={28} color="white" fill="white" />
        </div>
        {video.duration && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              background: "rgba(0,0,0,0.8)",
              color: "white",
              padding: "4px 10px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Clock size={14} />
            {video.duration}
          </div>
        )}
      </div>

      <div style={{ padding: "20px" }}>
        <h3
          style={{
            fontSize: "16px",
            color: "#ffffff",
            marginBottom: "8px",
            fontWeight: "bold",
            minHeight: "48px",
            lineHeight: "1.5",
          }}
        >
          {video.title}
        </h3>
        {video.description && (
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "12px",
              lineHeight: "1.4",
            }}
          >
            {video.description}
          </p>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <span>📺 YouTube</span>
          {video.views && <span>• {video.views} lượt xem</span>}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
