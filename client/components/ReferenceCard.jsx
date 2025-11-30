// ../components/ReferenceCard.jsx
import React from "react";
import { FileText, Download, ExternalLink } from "lucide-react";

function ReferenceCard({ reference }) {
  const handleClick = () => {
    if (reference.url) {
      window.open(reference.url, "_blank");
    }
  };

  const getIconByType = (type) => {
    switch (type) {
      case "pdf":
        return <FileText size={40} color="#ff3b30" />;
      case "doc":
        return <FileText size={40} color="#007aff" />;
      case "link":
        return <ExternalLink size={40} color="#34c759" />;
      default:
        return <FileText size={40} color="#ffffff" />;
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        border: "2px solid rgba(52,199,89,0.3)",
        borderRadius: "20px",
        padding: "24px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        width: "100%",
        maxWidth: "380px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 15px 40px rgba(52,199,89,0.4)";
        e.currentTarget.style.borderColor = "rgba(52,199,89,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
        e.currentTarget.style.borderColor = "rgba(52,199,89,0.3)";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            background: "rgba(52,199,89,0.1)",
            borderRadius: "12px",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {getIconByType(reference.type)}
        </div>
        {reference.badge && (
          <div
            style={{
              background: "#34c759",
              color: "white",
              fontSize: "11px",
              fontWeight: "bold",
              padding: "4px 12px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(52,199,89,0.5)",
            }}
          >
            {reference.badge}
          </div>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: "17px",
            color: "#ffffff",
            marginBottom: "10px",
            fontWeight: "bold",
            lineHeight: "1.4",
          }}
        >
          {reference.title}
        </h3>
        {reference.description && (
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "16px",
              lineHeight: "1.5",
            }}
          >
            {reference.description}
          </p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "16px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span>{reference.type.toUpperCase()}</span>
          {reference.size && <span>• {reference.size}</span>}
        </div>
        <Download size={18} color="rgba(255,255,255,0.6)" />
      </div>
    </div>
  );
}

export default ReferenceCard;
