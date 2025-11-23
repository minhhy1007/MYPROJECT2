// src/components/Shared/FloatingIcon.jsx
import React from "react";
// Import styles từ hook dùng chung
import { sharedStyles } from "../../hooks/useSharedStyles";

function FloatingIcon() {
  return (
    <>
      {/* Sử dụng styles.floatingMochi từ hook dùng chung */}
      <div style={sharedStyles.floatingMochi}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Mochi"
          width="80"
          style={{
            filter: "drop-shadow(0 5px 20px rgba(0,217,255,0.5))",
          }}
        />
      </div>
      {/* Đặt keyframes CSS tại đây để hỗ trợ animation float */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
        `}
      </style>
    </>
  );
}

export default FloatingIcon;
