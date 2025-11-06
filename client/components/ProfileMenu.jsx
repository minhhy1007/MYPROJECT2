import React, { useState } from "react";
import { X } from "lucide-react";

function ProfileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
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

  const submenuContent = {
    achievements: {
      title: "Thành tích học tập",
      bgColor: "#fbbf24",
      items: [
        {
          icon: "📚",
          label: "Số tay cấp độ 0",
          value: "0/100 words",
          progress: 0,
          color: "#fbbf24",
        },
        {
          icon: "⭐",
          label: "Siêu trí nhớ cấp độ 0",
          value: "0/100 words",
          progress: 0,
          color: "#f59e0b",
        },
        {
          icon: "🔥",
          label: "Bạn đã học chăm chỉ",
          value: "0 day",
          progress: 0,
          color: "#38bdf8",
        },
      ],
    },
    settings: {
      title: "Cài đặt tài khoản",
      bgColor: "#6b7280",
      sections: [
        {
          title: "Free Account",
          items: [
            { icon: "📧", label: "Email:", value: "huuminhhyle@gmail.com" },
            { icon: "📅", label: "Ngày kích hoạt:", value: "11/10/2025" },
          ],
        },
        {
          title: "Cài đặt",
          items: [
            {
              icon: "📖",
              label: "Ngôn ngữ hiện thi",
              hasDropdown: true,
              value: "Tiếng Việt",
            },
            { icon: "👥", label: "Tham gia group học viên" },
            { icon: "💬", label: "Chat với Mochi" },
            { icon: "❓", label: "Tham khảo những câu hỏi thường gặp" },
            {
              icon: "🌙",
              label: "Chế độ darkmode",
              hasToggle: true,
              isOn: true,
            },
            {
              icon: "🔊",
              label: "Hiệu ứng âm thanh",
              hasSlider: true,
              value: 70,
            },
          ],
        },
        {
          title: "Đăng xuất",
          isButton: true,
        },
      ],
    },
    topup: {
      title: "Nạp mã thẻ học",
      bgColor: "#ef4444",
      message: "Tính năng đang được phát triển",
    },
  };

  const renderSubmenu = () => {
    if (!activeSubmenu) return null;
    const content = submenuContent[activeSubmenu];

    if (activeSubmenu === "achievements") {
      return (
        <div
          style={{
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
          }}
          onClick={() => setActiveSubmenu(null)}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
              borderRadius: "24px",
              width: "90%",
              maxWidth: "500px",
              padding: "0",
              position: "relative",
              border: "2px solid rgba(251,191,36,0.3)",
              boxShadow: "0 20px 60px rgba(251,191,36,0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                background: content.bgColor,
                padding: "24px",
                borderRadius: "22px 22px 0 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <button
                onClick={() => setActiveSubmenu(null)}
                style={{
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
                }}
              >
                <X size={24} color="#000" />
              </button>
              <h2
                style={{
                  margin: 0,
                  color: "#000",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {content.title}
              </h2>
            </div>

            {/* Avatar */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-60px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "white",
                  border: "6px solid #22c55e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(34,197,94,0.4)",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                  alt="Avatar"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                margin: "0 24px 24px",
                padding: "12px 24px",
                borderRadius: "50px",
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                boxShadow: "0 4px 20px rgba(34,197,94,0.4)",
              }}
            >
              Free Account
            </div>

            {/* Items */}
            <div style={{ padding: "0 24px 24px" }}>
              {content.items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `2px solid ${item.color}40`,
                    borderRadius: "16px",
                    padding: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        background: item.color,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "32px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                          marginBottom: "4px",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          color: item.color,
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "8px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${item.progress}%`,
                        height: "100%",
                        background: item.color,
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeSubmenu === "settings") {
      return (
        <div
          style={{
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
            overflow: "auto",
            padding: "20px",
          }}
          onClick={() => setActiveSubmenu(null)}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
              borderRadius: "24px",
              width: "90%",
              maxWidth: "600px",
              position: "relative",
              border: "2px solid rgba(107,114,128,0.3)",
              boxShadow: "0 20px 60px rgba(107,114,128,0.4)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                background: content.bgColor,
                padding: "24px",
                borderRadius: "22px 22px 0 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "sticky",
                top: 0,
                zIndex: 10,
              }}
            >
              <button
                onClick={() => setActiveSubmenu(null)}
                style={{
                  position: "absolute",
                  left: "20px",
                  background: "white",
                  border: "none",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={24} color="#000" />
              </button>
              <h2
                style={{
                  margin: 0,
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {content.title}
              </h2>
            </div>

            <div style={{ padding: "24px" }}>
              {content.sections.map((section, sIndex) => (
                <div key={sIndex} style={{ marginBottom: "24px" }}>
                  {section.title === "Free Account" && (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            background: "white",
                            border: "6px solid #22c55e",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                            alt="Avatar"
                            style={{ width: "80px" }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          background: "#22c55e",
                          margin: "0 auto 20px",
                          padding: "12px 32px",
                          borderRadius: "50px",
                          textAlign: "center",
                          color: "white",
                          fontWeight: "bold",
                          width: "fit-content",
                        }}
                      >
                        {section.title}
                      </div>
                      {section.items.map((item, iIndex) => (
                        <div
                          key={iIndex}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "16px 20px",
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: "12px",
                            marginBottom: "12px",
                            color: "white",
                          }}
                        >
                          <span style={{ fontSize: "24px" }}>{item.icon}</span>
                          <div>
                            <span style={{ fontWeight: "600" }}>
                              {item.label}
                            </span>{" "}
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {section.title === "Cài đặt" && (
                    <>
                      {section.items.map((item, iIndex) => (
                        <div
                          key={iIndex}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "16px 20px",
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: "12px",
                            marginBottom: "12px",
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <span style={{ fontSize: "24px" }}>
                              {item.icon}
                            </span>
                            <span style={{ fontWeight: "500" }}>
                              {item.label}
                            </span>
                          </div>
                          {item.hasDropdown && (
                            <div
                              style={{
                                background: "#fbbf24",
                                color: "#000",
                                padding: "8px 20px",
                                borderRadius: "20px",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                              }}
                            >
                              ⭐ {item.value} ▼
                            </div>
                          )}
                          {item.hasToggle && (
                            <div
                              style={{
                                width: "60px",
                                height: "32px",
                                background: item.isOn ? "#22c55e" : "#4b5563",
                                borderRadius: "16px",
                                position: "relative",
                                transition: "background 0.3s",
                              }}
                            >
                              <div
                                style={{
                                  width: "28px",
                                  height: "28px",
                                  background: "white",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  top: "2px",
                                  left: item.isOn ? "30px" : "2px",
                                  transition: "left 0.3s",
                                }}
                              />
                            </div>
                          )}
                          {item.hasSlider && (
                            <div
                              style={{
                                width: "200px",
                                height: "6px",
                                background: "#4b5563",
                                borderRadius: "3px",
                                position: "relative",
                              }}
                            >
                              <div
                                style={{
                                  width: `${item.value}%`,
                                  height: "100%",
                                  background: "#38bdf8",
                                  borderRadius: "3px",
                                }}
                              />
                              <div
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  background: "#38bdf8",
                                  borderRadius: "50%",
                                  position: "absolute",
                                  top: "-5px",
                                  left: `${item.value}%`,
                                  transform: "translateX(-50%)",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  )}

                  {section.isButton && (
                    <button
                      style={{
                        width: "100%",
                        padding: "16px",
                        background: "transparent",
                        border: "2px solid #22c55e",
                        borderRadius: "12px",
                        color: "#22c55e",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      {section.title}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activeSubmenu === "topup") {
      return (
        <div
          style={{
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
          }}
          onClick={() => setActiveSubmenu(null)}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
              borderRadius: "24px",
              width: "90%",
              maxWidth: "400px",
              padding: "40px",
              textAlign: "center",
              border: "2px solid rgba(239,68,68,0.3)",
              boxShadow: "0 20px 60px rgba(239,68,68,0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSubmenu(null)}
              style={{
                position: "absolute",
                right: "20px",
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
              }}
            >
              <X size={24} color="#000" />
            </button>
            <div style={{ fontSize: "80px", marginBottom: "20px" }}>💳</div>
            <h2
              style={{
                color: content.bgColor,
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              {content.title}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "18px",
              }}
            >
              {content.message}
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Hi Guest Button */}
      <div
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
        <div
          style={{
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
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setShowMenu(false);
                setActiveSubmenu(item.id);
              }}
              style={{
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderBottom:
                  index < menuItems.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = item.bgColor;
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <span style={{ fontSize: "32px" }}>{item.icon}</span>
              <span
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Submenu Modals */}
      {renderSubmenu()}
    </div>
  );
}

export default ProfileMenu;
