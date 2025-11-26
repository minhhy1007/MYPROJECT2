// ProfileMenu.jsx (Tối ưu: 48 dòng)
import React, { useState } from "react";
import ProfileSubmenuModal from "./ProfileSubmenuModal";
import { menuItems, menuDropdownStyles } from "../hooks/useProfileMenuStyles";

function ProfileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleItemClick = (id) => {
    setShowMenu(false);
    setActiveSubmenu(id);
  };

  // Đóng menu/modal khi click ra ngoài
  const handleWrapperClick = (event) => {
    // Chỉ đóng menu nếu click vào chính button
    if (showMenu && event.target.closest("[data-menu-toggle]")) {
      return;
    }
    setShowMenu(false);
  };

  return (
    <div
      style={{ position: "relative" }}
      // Dùng `onBlur` để xử lý đóng khi focus ra ngoài (Accessibility)
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setShowMenu(false);
        }
      }}
    >
      {/* Hi Guest Button */}
      <div
        data-menu-toggle="true" // Đánh dấu là nút toggle
        onClick={() => setShowMenu(!showMenu)}
        style={{
          fontWeight: "bold",
          color: "#00d9ff",
          textShadow: "0 0 10px rgba(0,217,255,0.5)",
          cursor: "pointer",
          userSelect: "none",
          padding: "8px 16px",
          borderRadius: "8px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(0,217,255,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      >
        Hi Guest! ▼
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div style={menuDropdownStyles.dropdownWrapper}>
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              style={menuDropdownStyles.itemBase(
                index === menuItems.length - 1
              )}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = item.bgColor;
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <span style={menuDropdownStyles.itemIcon}>{item.icon}</span>
              <span style={menuDropdownStyles.itemTitle}>{item.title}</span>
            </div>
          ))}
        </div>
      )}

      {/* Submenu Modals */}
      <ProfileSubmenuModal
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
    </div>
  );
}

export default ProfileMenu;
