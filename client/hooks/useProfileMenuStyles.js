// ../hooks/useProfileMenuStyles.js

// --- DỮ LIỆU TĨNH HOÀN CHỈNH ---
export const menuItems = [
  {
    id: "achievements",
    icon: "🏆",
    title: "Thành tích học tập",
    bgColor: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
  },
  {
    id: "settings",
    icon: "⚙️",
    title: "Cài đặt tài khoản",
    bgColor: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
  },
  {
    id: "topup",
    icon: "💳",
    title: "Nạp mã thẻ học",
    bgColor: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
  },
];

export const submenuContent = {
  achievements: {
    title: "Thành tích học tập",
    bgColor: "#fbbf24",
    items: [
      {
        icon: "📚",
        label: "Sổ tay cấp độ 0",
        value: "0/10",
        progress: 0,
        color: "#f59e0b",
      },
      {
        icon: "🎉",
        label: "Hoàn thành 1000 từ vựng",
        value: "75%",
        progress: 75,
        color: "#10b981",
      },
      {
        icon: "🎓",
        label: "Thi thử thành công",
        value: "Đã hoàn thành",
        progress: 100,
        color: "#3b82f6",
      },
    ],
  },
  settings: {
    title: "Cài đặt tài khoản",
    bgColor: "#6b7280",
    sections: [
      {
        title: "Cài đặt chung",
        items: [
          { type: "toggle", label: "Thông báo", state: true, icon: "🔔" },
          { type: "toggle", label: "Chế độ tối", state: true, icon: "🌙" },
          {
            type: "dropdown",
            label: "Ngôn ngữ hiển thị",
            value: "Vietnamese",
            options: ["Vietnamese", "English"],
            icon: "🌐",
          },
        ],
      },
      {
        title: "Âm thanh",
        items: [{ type: "slider", label: "Âm lượng", value: 70, icon: "🔊" }],
      },
    ],
  },
  topup: {
    title: "Nạp mã thẻ học",
    bgColor: "#ef4444",
    message: "Tính năng đang được phát triển",
  },
};

// --- STYLES ---
export const menuDropdownStyles = {
  dropdownWrapper: {
    position: "absolute",
    top: "calc(100% + 10px)",
    right: 0,
    width: "280px",
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
    borderRadius: "16px",
    border: "2px solid rgba(0,217,255,0.3)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
    overflow: "hidden",
    zIndex: 9999,
    transition: "opacity 0.3s, transform 0.3s",
  },
  itemBase: (isLast) => ({
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.1)",
  }),
  itemIcon: { fontSize: "32px" },
  itemTitle: { color: "white", fontWeight: "600", fontSize: "15px" },
};

export const submenuModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000,
    padding: "20px",
    overflow: "auto",
  },
  cardBase: (borderColor, boxShadowColor) => ({
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
    borderRadius: "24px",
    width: "90%",
    maxWidth: "500px",
    position: "relative",
    border: `2px solid ${borderColor}`,
    boxShadow: `0 20px 60px ${boxShadowColor}`,
    maxHeight: "90vh",
    overflowY: "auto",
    margin: "auto",
  }),
  header: (bgColor) => ({
    background: bgColor,
    padding: "24px",
    borderRadius: "22px 22px 0 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 10,
  }),
  closeButton: {
    position: "absolute",
    left: "20px",
    top: "20px",
    background: "white",
    border: "none",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  achievItemBase: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "16px",
    transition: "transform 0.3s, box-shadow 0.3s",
    border: "1px solid transparent",
  },
  settingsItemBase: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "12px",
    marginBottom: "12px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  logoutButton: {
    width: "100%",
    padding: "16px",
    background: "transparent",
    border: "2px solid #ef4444",
    borderRadius: "12px",
    color: "#ef4444",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
