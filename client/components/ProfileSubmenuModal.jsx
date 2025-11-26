// ../components/ProfileSubmenuModal.jsx
import React, { useState } from "react";
import { X, Sliders, ToggleRight, Globe, Volume2 } from "lucide-react";
import {
  submenuModalStyles,
  submenuContent,
} from "../hooks/useProfileMenuStyles";

// --- HÀM HỖ TRỢ: Render một mục Cài đặt (Toggle, Slider, Dropdown) ---
const SettingsItem = ({ item }) => {
  // Để giữ code ngắn, tôi chỉ mô phỏng state và interaction.
  const [localState, setLocalState] = useState(item.state || item.value);

  // Toggle Switch
  const renderToggle = () => (
    <div
      style={{
        width: "40px",
        height: "20px",
        borderRadius: "10px",
        padding: "2px",
        background: localState ? "#22c55e" : "#4b5563",
        transition: "background 0.3s",
      }}
      onClick={(e) => {
        e.stopPropagation();
        setLocalState(!localState);
      }}
    >
      <div
        style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: "white",
          transition: "transform 0.3s",
          transform: localState ? "translateX(20px)" : "translateX(0)",
        }}
      />
    </div>
  );

  // Slider
  const renderSlider = () => (
    <input
      type="range"
      min="0"
      max="100"
      value={localState}
      onChange={(e) => setLocalState(e.target.value)}
      style={{ width: "150px", accentColor: "#00d9ff", cursor: "pointer" }}
    />
  );

  // Dropdown
  const renderDropdown = () => (
    <select
      value={localState}
      onChange={(e) => setLocalState(e.target.value)}
      style={{
        padding: "8px",
        borderRadius: "8px",
        background: "#1a1a1a",
        color: "white",
        border: "1px solid #4b5563",
      }}
    >
      {item.options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );

  let ControlComponent;
  if (item.type === "toggle") ControlComponent = renderToggle;
  else if (item.type === "slider") ControlComponent = renderSlider;
  else if (item.type === "dropdown") ControlComponent = renderDropdown;
  else return null;

  return (
    <div
      style={submenuModalStyles.settingsItemBase}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(0,217,255,0.1)";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "20px" }}>{item.icon}</span>
        <span style={{ fontWeight: "500" }}>{item.label}</span>
      </div>
      {ControlComponent()}
    </div>
  );
};

function ProfileSubmenuModal({ activeSubmenu, setActiveSubmenu }) {
  if (!activeSubmenu) return null;
  const content = submenuContent[activeSubmenu];

  // Card Styles dựa trên Submenu
  let borderColor = "rgba(255,255,255,0.3)";
  let boxShadowColor = "rgba(0,0,0,0.6)";
  if (activeSubmenu === "achievements") {
    borderColor = "rgba(251,191,36,0.3)";
    boxShadowColor = "rgba(251,191,36,0.4)";
  } else if (activeSubmenu === "settings") {
    borderColor = "rgba(107,114,128,0.3)";
    boxShadowColor = "rgba(107,114,128,0.4)";
  } else if (activeSubmenu === "topup") {
    borderColor = "rgba(239,68,68,0.3)";
    boxShadowColor = "rgba(239,68,68,0.4)";
  }

  // Modal Wrapper (Overlay)
  return (
    <div
      style={submenuModalStyles.overlay}
      onClick={() => setActiveSubmenu(null)}
    >
      {/* Modal Card */}
      <div
        style={submenuModalStyles.cardBase(borderColor, boxShadowColor)}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header chung cho tất cả */}
        <div style={submenuModalStyles.header(content.bgColor)}>
          <button
            onClick={() => setActiveSubmenu(null)}
            style={submenuModalStyles.closeButton}
          >
            <X size={24} color="#000" />
          </button>
          <h2
            style={{
              margin: 0,
              color: activeSubmenu === "achievements" ? "#000" : "#fff",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {content.title}
          </h2>
        </div>

        {/* --- NỘI DUNG MODAL THÀNH TÍCH (ACHIEVEMENTS) --- */}
        {activeSubmenu === "achievements" && (
          <div style={{ padding: "24px", paddingTop: 0 }}>
            <div style={{ padding: "20px 0" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                  alt="Avatar"
                  width="80"
                  height="80"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <h3 style={{ margin: 0, color: "white", fontSize: "22px" }}>
                    Huyminhhyle
                  </h3>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      color: content.bgColor,
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    Level 1 - English Novice
                  </p>
                </div>
              </div>
            </div>

            <h4
              style={{
                color: "#fff",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: "10px",
                marginBottom: "20px",
              }}
            >
              Tiến độ các mục tiêu
            </h4>
            {content.items.map((item, i) => (
              <div
                key={i}
                style={{
                  ...submenuModalStyles.achievItemBase,
                  border: `1px solid ${
                    item.progress === 100 ? item.color : "transparent"
                  }`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.01)";
                  e.currentTarget.style.boxShadow = `0 0 15px ${item.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "24px" }}>{item.icon}</span>
                    <span style={{ color: "white", fontWeight: "600" }}>
                      {item.label}
                    </span>
                  </div>
                  <span style={{ color: item.color, fontWeight: "bold" }}>
                    {item.value}
                  </span>
                </div>
                {/* Progress Bar */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    height: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${item.progress}%`,
                      background:
                        item.progress === 100 ? "#22c55e" : item.color,
                      height: "100%",
                      transition: "width 0.5s ease-out",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- NỘI DUNG MODAL CÀI ĐẶT (SETTINGS) --- */}
        {activeSubmenu === "settings" && (
          <div style={{ padding: "24px", paddingTop: 0 }}>
            {content.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} style={{ marginBottom: "30px" }}>
                <h4
                  style={{
                    color: "#fff",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    paddingBottom: "10px",
                    marginBottom: "15px",
                  }}
                >
                  {section.title}
                </h4>
                {section.items.map((item, itemIndex) => (
                  <SettingsItem key={itemIndex} item={item} />
                ))}
              </div>
            ))}
            {/* Nút Logout */}
            <button
              style={submenuModalStyles.logoutButton}
              onMouseEnter={(e) => {
                e.target.style.background = "#ef4444";
                e.target.style.color = "#fff";
                e.target.style.boxShadow = "0 5px 15px rgba(239,68,68,0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#ef4444";
                e.target.style.boxShadow = "none";
              }}
              onClick={() => {
                console.log("Logout User");
                setActiveSubmenu(null);
              }}
            >
              Đăng Xuất
            </button>
          </div>
        )}

        {/* --- NỘI DUNG MODAL NẠP THẺ (TOPUP) --- */}
        {activeSubmenu === "topup" && (
          <div style={{ padding: "40px", textAlign: "center" }}>
            <span style={{ fontSize: "60px" }}>🚧</span>
            <h3 style={{ color: "white", marginTop: "20px" }}>
              {content.message}
            </h3>
            <p style={{ color: "#b0b0b0" }}>
              Vui lòng quay lại sau. Chúng tôi đang nỗ lực hoàn thiện tính năng
              này.
            </p>
          </div>
        )}
      </div>

      <style>{`
                /* CSS cho input range - Thanh trượt */
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                    background: #00d9ff;
                    cursor: pointer;
                    box-shadow: 0 0 5px rgba(0, 217, 255, 0.7);
                    margin-top: -5px;
                }
            `}</style>
    </div>
  );
}
export default ProfileSubmenuModal;
