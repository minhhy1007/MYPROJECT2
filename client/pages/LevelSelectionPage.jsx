import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
import { sharedStyles } from "../hooks/useSharedStyles";
import { BookOpen, TrendingUp, Award, Zap, CheckCircle2 } from "lucide-react";

const levels = [
  {
    id: "beginner",
    title: "Beginner",
    subtitle: "Người mới bắt đầu",
    description: "Từ vựng cơ bản cho người mới học tiếng Anh",
    icon: BookOpen,
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    wordCount: "500+ từ",
    topics: ["Giao tiếp hàng ngày", "Gia đình", "Thời tiết", "Thức ăn"],
    sampleWords: [
      { word: "Hello", phonetic: "/həˈloʊ/", meaning: "Xin chào", example: "Hello, how are you?" },
      { word: "Family", phonetic: "/ˈfæməli/", meaning: "Gia đình", example: "I love my family." },
      { word: "Food", phonetic: "/fuːd/", meaning: "Thức ăn", example: "This food is delicious." },
      { word: "Water", phonetic: "/ˈwɔːtər/", meaning: "Nước", example: "I need some water." },
    ],
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "Trung cấp",
    description: "Từ vựng nâng cao cho người đã có nền tảng",
    icon: TrendingUp,
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    wordCount: "1500+ từ",
    topics: ["Công việc", "Du lịch", "Sức khỏe", "Giáo dục"],
    sampleWords: [
      { word: "Achievement", phonetic: "/əˈtʃiːvmənt/", meaning: "Thành tựu", example: "Her achievement was remarkable." },
      { word: "Destination", phonetic: "/ˌdestɪˈneɪʃn/", meaning: "Điểm đến", example: "Paris is a popular destination." },
      { word: "Nutrition", phonetic: "/nuːˈtrɪʃn/", meaning: "Dinh dưỡng", example: "Good nutrition is important." },
      { word: "Knowledge", phonetic: "/ˈnɑːlɪdʒ/", meaning: "Kiến thức", example: "Knowledge is power." },
    ],
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "Nâng cao",
    description: "Từ vựng chuyên sâu cho người học nâng cao",
    icon: Award,
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
    wordCount: "3000+ từ",
    topics: ["Kinh doanh", "Khoa học", "Văn hóa", "Chính trị"],
    sampleWords: [
      { word: "Entrepreneurship", phonetic: "/ˌɑːntrəprəˈnɜːrʃɪp/", meaning: "Tinh thần khởi nghiệp", example: "Entrepreneurship drives innovation." },
      { word: "Hypothesis", phonetic: "/haɪˈpɑːθəsɪs/", meaning: "Giả thuyết", example: "The hypothesis was proven correct." },
      { word: "Sovereignty", phonetic: "/ˈsɑːvrənti/", meaning: "Chủ quyền", example: "National sovereignty is important." },
      { word: "Phenomenon", phonetic: "/fəˈnɑːmɪnən/", meaning: "Hiện tượng", example: "This is a rare phenomenon." },
    ],
  },
  {
    id: "expert",
    title: "Expert",
    subtitle: "Chuyên gia",
    description: "Từ vựng chuyên ngành và học thuật",
    icon: Zap,
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    wordCount: "5000+ từ",
    topics: ["Học thuật", "Chuyên ngành", "IELTS 7.5+", "TOEIC 900+"],
    sampleWords: [
      { word: "Epistemology", phonetic: "/ɪˌpɪstəˈmɑːlədʒi/", meaning: "Nhận thức luận", example: "Epistemology studies knowledge." },
      { word: "Paradigm", phonetic: "/ˈpærədaɪm/", meaning: "Mô hình, khuôn mẫu", example: "A paradigm shift occurred." },
      { word: "Juxtaposition", phonetic: "/ˌdʒʌkstəpəˈzɪʃn/", meaning: "Sự đặt cạnh nhau", example: "The juxtaposition was striking." },
      { word: "Ubiquitous", phonetic: "/juːˈbɪkwɪtəs/", meaning: "Có mặt khắp nơi", example: "Smartphones are ubiquitous today." },
    ],
  },
];

function LevelCard({ level, isSelected, onSelect }) {
  const Icon = level.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onSelect(level.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isSelected
          ? level.gradient
          : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        border: isSelected
          ? `3px solid #00d9ff`
          : `2px solid ${level.color}40`,
        borderRadius: "24px",
        padding: "28px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: isSelected
          ? `0 0 40px #00d9ff80, 0 15px 40px ${level.color}60`
          : isHovered
          ? `0 15px 40px ${level.color}60`
          : `0 8px 25px ${level.color}20`,
        width: "100%",
        maxWidth: "700px",
        transform: isSelected ? "scale(1.02)" : isHovered ? "translateX(8px)" : "translateX(0)",
        position: "relative",
      }}
    >
      {isSelected && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "#00d9ff",
            borderRadius: "50%",
            padding: "8px",
            boxShadow: "0 0 20px #00d9ff",
          }}
        >
          <CheckCircle2 size={28} color="#0a0a0a" strokeWidth={3} />
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: isSelected ? "rgba(0,0,0,0.2)" : `${level.color}20`,
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={44} color={isSelected ? "#ffffff" : level.color} />
        </div>
        <div>
          <h3
            style={{
              fontSize: "30px",
              color: isSelected ? "#ffffff" : "#ffffff",
              margin: 0,
              fontWeight: "bold",
              textShadow: isSelected ? "0 2px 10px rgba(0,0,0,0.3)" : "none",
            }}
          >
            {level.title}
          </h3>
          <p
            style={{
              fontSize: "17px",
              color: isSelected ? "#f0f0f0" : level.color,
              margin: 0,
              fontWeight: "600",
            }}
          >
            {level.subtitle}
          </p>
        </div>
      </div>
      <p
        style={{
          fontSize: "15px",
          color: isSelected ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.7)",
          marginBottom: "20px",
          lineHeight: "1.6",
        }}
      >
        {level.description}
      </p>
      <div
        style={{
          display: "inline-block",
          background: isSelected ? "rgba(255,255,255,0.25)" : `${level.color}30`,
          color: isSelected ? "#ffffff" : level.color,
          padding: "8px 16px",
          borderRadius: "12px",
          fontSize: "14px",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        📚 {level.wordCount}
      </div>
      <div style={{ marginTop: "16px" }}>
        <p
          style={{
            fontSize: "13px",
            color: isSelected ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)",
            marginBottom: "8px",
          }}
        >
          Chủ đề:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {level.topics.map((topic, index) => (
            <span
              key={index}
              style={{
                background: isSelected ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                color: isSelected ? "#ffffff" : "rgba(255,255,255,0.8)",
                padding: "4px 12px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: isSelected ? "600" : "normal",
              }}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function LevelSelectionPage() {
  const [activeNav, setActiveNav] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate();

  const handleLevelSelect = (levelId) => {
    setSelectedLevel(levelId);
    navigate(`/learn?level=${levelId}`);
  };

  return (
    <div style={sharedStyles.pageBackground}>
      <AppHeader activeNav={activeNav} setActiveNav={setActiveNav} />
      <div
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
          marginTop: "70px",
          ...sharedStyles.mainContent,
        }}
        className="d-flex flex-column align-items-center"
      >
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <span style={{ fontSize: "40px" }}>🎯</span>
            <h1
              style={{
                ...sharedStyles.pageTitle,
                fontSize: "42px",
                margin: 0,
              }}
            >
              CHỌN MỨC ĐỘ HỌC
            </h1>
          </div>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              marginTop: "12px",
              maxWidth: "600px",
            }}
          >
            Lướt và chọn mức độ phù hợp với trình độ của bạn
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
            maxWidth: "700px",
            alignItems: "center",
          }}
        >
          {levels.map((level) => (
            <LevelCard
              key={level.id}
              level={level}
              isSelected={selectedLevel === level.id}
              onSelect={handleLevelSelect}
            />
          ))}
        </div>
      </div>

      <AppFooter />
    </div>
  );
}

export default LevelSelectionPage;
