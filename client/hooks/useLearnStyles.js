export const learnStyles = {
  tipsCard: {
    background: "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0, 217, 255, 0.3)",
    transition: "all 0.3s ease",
  },
  banner: {
    background: "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
    borderRadius: "30px",
    boxShadow: "0 10px 40px rgba(0,217,255,0.4)",
  },
  bannerTitle: {
    color: "#0a0a0a",
    textShadow: "0 0 10px rgba(255,255,255,0.2)",
  },
  courseCard: (index) => ({
    background:
      index === 0
        ? "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)"
        : "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
    borderRadius: "20px",
    transition: "all 0.3s ease",
    boxShadow:
      index === 0
        ? "0 8px 30px rgba(0,217,255,0.4)"
        : "0 4px 15px rgba(0,0,0,0.3)",
  }),
  courseImage: (index) => ({
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border:
      index === 0 ? "4px solid #0a0a0a" : "4px solid rgba(255,255,255,0.1)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  }),
  sidebarCard: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
    borderRadius: "20px",
    border: "2px solid rgba(0,217,255,0.3)",
    boxShadow: "0 8px 25px rgba(0,217,255,0.2)",
    transition: "all 0.3s ease",
  },
  discountBadge: {
    background: "linear-gradient(135deg, #3b0764 0%, #1e1b4b 100%)",
    borderRadius: "15px",
    color: "#facc15",
    boxShadow: "0 0 25px rgba(250, 204, 21, 0.4)",
    textShadow: "0 0 10px rgba(250, 204, 21, 0.6)",
    letterSpacing: "1px",
  },
  memoryBox: {
    background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    borderRadius: "20px",
    boxShadow: "0 0 25px rgba(0, 217, 255, 0.2)",
    border: "1px solid rgba(0,217,255,0.2)",
  },
  memoryTitle: {
    color: "#38bdf8",
    textShadow: "0 0 10px rgba(56,189,248,0.6)",
  },
  memoryCount: {
    color: "#fbbf24",
    textShadow: "0 0 12px rgba(251,191,36,0.8)",
  },
  upgradeButton: {
    background: "linear-gradient(135deg, #00d9ff 0%, #0077ff 100%)",
    borderRadius: "25px",
    boxShadow: "0 0 20px rgba(0,217,255,0.4)",
    transition: "all 0.3s ease",
    textShadow: "0 0 8px rgba(255,255,255,0.6)",
  },
  extensionBadge: {
    background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    borderRadius: "15px",
    color: "#1e1b4b",
    boxShadow: "0 0 15px rgba(251,191,36,0.6)",
  },
  extensionTitle: {
    color: "#38bdf8",
    textShadow: "0 0 10px rgba(56,189,248,0.6)",
  },
};
export const coursesData = [
  {
    id: 1,
    title: "Economics",
    subtitle: "1. Kinh tế học",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    vocabulary: [
      { word: "Economy", phonetic: "/ɪˈkɑːnəmi/", meaning: "Nền kinh tế", example: "The economy is growing rapidly." },
      { word: "Inflation", phonetic: "/ɪnˈfleɪʃn/", meaning: "Lạm phát", example: "Inflation affects purchasing power." },
      { word: "Supply", phonetic: "/səˈplaɪ/", meaning: "Cung cấp", example: "The supply of goods increased." },
      { word: "Demand", phonetic: "/dɪˈmænd/", meaning: "Nhu cầu", example: "Consumer demand is high." },
      { word: "Market", phonetic: "/ˈmɑːrkɪt/", meaning: "Thị trường", example: "The stock market is volatile." },
    ],
  },
  {
    id: 2,
    title: "Commerce P1",
    subtitle: "2. Thương mại",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    vocabulary: [
      { word: "Trade", phonetic: "/treɪd/", meaning: "Thương mại", example: "International trade is essential." },
      { word: "Export", phonetic: "/ˈekspɔːrt/", meaning: "Xuất khẩu", example: "We export coffee to Europe." },
      { word: "Import", phonetic: "/ˈɪmpɔːrt/", meaning: "Nhập khẩu", example: "They import electronics from Asia." },
      { word: "Profit", phonetic: "/ˈprɑːfɪt/", meaning: "Lợi nhuận", example: "The company made a profit." },
      { word: "Revenue", phonetic: "/ˈrevənuː/", meaning: "Doanh thu", example: "Revenue increased this quarter." },
    ],
  },
  {
    id: 3,
    title: "Commerce P2",
    subtitle: "3. Thương mại",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    vocabulary: [
      { word: "Invoice", phonetic: "/ˈɪnvɔɪs/", meaning: "Hóa đơn", example: "Please send me the invoice." },
      { word: "Transaction", phonetic: "/trænˈzækʃn/", meaning: "Giao dịch", example: "The transaction was successful." },
      { word: "Wholesale", phonetic: "/ˈhoʊlseɪl/", meaning: "Bán sỉ", example: "We buy wholesale from suppliers." },
      { word: "Retail", phonetic: "/ˈriːteɪl/", meaning: "Bán lẻ", example: "Retail prices are higher." },
      { word: "Merchant", phonetic: "/ˈmɜːrtʃənt/", meaning: "Thương nhân", example: "The merchant sold goods." },
    ],
  },
  {
    id: 4,
    title: "Business Planning P1",
    subtitle: "4. Kế hoạch kinh doanh",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
    vocabulary: [
      { word: "Strategy", phonetic: "/ˈstrætədʒi/", meaning: "Chiến lược", example: "We need a new strategy." },
      { word: "Objective", phonetic: "/əbˈdʒektɪv/", meaning: "Mục tiêu", example: "Our objective is clear." },
      { word: "Budget", phonetic: "/ˈbʌdʒɪt/", meaning: "Ngân sách", example: "The budget was approved." },
      { word: "Forecast", phonetic: "/ˈfɔːrkæst/", meaning: "Dự báo", example: "Sales forecast looks positive." },
      { word: "Investment", phonetic: "/ɪnˈvestmənt/", meaning: "Đầu tư", example: "Investment is crucial for growth." },
    ],
  },
];
