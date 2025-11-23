// ../hooks/useAceHubStyles.js

export const aceHubStyles = {
  // Styles for featured card
  featuredCard: {
    width: "48%",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
    border: "2px solid rgba(0,217,255,0.3)",
    borderRadius: "24px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    flexShrink: 0,
  },
  cardImage: {
    height: "250px",
    width: "100%",
    objectFit: "cover",
    backgroundColor: "#2a2a2a",
  },
  tagBadge: {
    background: "#3b82f6",
    color: "white",
    fontSize: "13px",
    fontWeight: "bold",
    padding: "6px 16px",
    borderRadius: "20px",
    boxShadow: "0 4px 15px rgba(59,130,246,0.5)",
    position: "absolute",
    top: "15px",
    left: "15px",
  },
  cardButton: (color) => ({
    background: color,
    color: "white",
    border: "none",
    padding: "12px",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "25px",
    width: "100%",
    boxShadow: `0 5px 20px ${color}80`,
    transition: "all 0.3s ease",
    cursor: "pointer",
  }),
};

// Data tĩnh cho Carousel
export const featuredItems = [
  {
    tag: "Mới",
    date: "10-09-2024",
    title: "COMBO TÌNH BẠN GIẢM GIÁ 40%...",
    image: "YOUR_IMAGE_URL_1",
    buttonText: "Nhận ưu đãi ngay",
    buttonColor: "#22c55e",
  },
  {
    tag: "Mới",
    date: "01-11-2025",
    title: "Cách học từ vựng tiếng Anh hiệu quả...",
    image: "YOUR_IMAGE_URL_2",
    buttonText: "XEM NGAY",
    buttonColor: "#22c55e",
  },
  {
    tag: "Hot",
    date: "15-10-2024",
    title: "Adaptive Learning - Phương pháp học...",
    image: "YOUR_IMAGE_URL_3",
    buttonText: "KHÁM PHÁ",
    buttonColor: "#22c55e",
  },
  {
    tag: "Mới",
    date: "20-10-2024",
    title: "TẶNG TÀI LIỆU NÂNG CẤP TỪ VỰNG...",
    image: "YOUR_IMAGE_URL_4",
    buttonText: "NHẬN QUÀ",
    buttonColor: "#22c55e",
  },
];
