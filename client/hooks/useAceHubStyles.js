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

// YouTube Videos Data
export const youtubeVideos = [
  {
    title: "Cách học từ vựng tiếng Anh hiệu quả nhất",
    description: "Phương pháp học từ vựng khoa học giúp bạn nhớ lâu hơn",
    thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    url: "https://www.youtube.com/watch?v=example1",
    duration: "12:45",
    views: "125K",
  },
  {
    title: "Lộ trình học tiếng Anh từ con số 0",
    description: "Hướng dẫn chi tiết cho người mới bắt đầu",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    url: "https://www.youtube.com/watch?v=example2",
    duration: "18:30",
    views: "89K",
  },
  {
    title: "Bí quyết luyện phát âm chuẩn như người bản xứ",
    description: "Các kỹ thuật phát âm hiệu quả được chứng minh",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    url: "https://www.youtube.com/watch?v=example3",
    duration: "15:20",
    views: "156K",
  },
  {
    title: "IELTS Speaking 8.0 - Chiến lược trả lời hoàn hảo",
    description: "Phân tích chi tiết cách đạt band điểm cao",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    url: "https://www.youtube.com/watch?v=example4",
    duration: "22:15",
    views: "203K",
  },
  {
    title: "Ngữ pháp tiếng Anh cơ bản trong 30 phút",
    description: "Tổng hợp kiến thức ngữ pháp thiết yếu",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    url: "https://www.youtube.com/watch?v=example5",
    duration: "28:40",
    views: "178K",
  },
  {
    title: "Học tiếng Anh qua phim - Phương pháp hiệu quả",
    description: "Cách tận dụng phim để nâng cao trình độ",
    thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    url: "https://www.youtube.com/watch?v=example6",
    duration: "16:55",
    views: "142K",
  },
];

// Reference Materials Data
export const referenceMaterials = [
  {
    title: "Tài liệu từ vựng IELTS 7.0+",
    description: "Bộ từ vựng chuyên sâu cho kỳ thi IELTS với hơn 3000 từ được phân loại theo chủ đề",
    type: "pdf",
    badge: "HOT",
    size: "5.2 MB",
    url: "#",
  },
  {
    title: "Ngữ pháp tiếng Anh từ cơ bản đến nâng cao",
    description: "Tổng hợp đầy đủ các cấu trúc ngữ pháp kèm bài tập thực hành",
    type: "pdf",
    badge: "MỚI",
    size: "8.7 MB",
    url: "#",
  },
  {
    title: "Bộ đề thi TOEIC mới nhất 2024",
    description: "10 đề thi TOEIC hoàn chỉnh với đáp án chi tiết",
    type: "doc",
    size: "12.3 MB",
    url: "#",
  },
  {
    title: "Khóa học phát âm miễn phí",
    description: "Link truy cập khóa học phát âm online với video hướng dẫn chi tiết",
    type: "link",
    badge: "FREE",
    url: "#",
  },
  {
    title: "Sách Speaking IELTS Band 8.0",
    description: "Chiến lược và mẫu câu trả lời cho tất cả các chủ đề Speaking",
    type: "pdf",
    size: "6.5 MB",
    url: "#",
  },
  {
    title: "Bài tập nghe TOEFL iBT",
    description: "Bộ bài tập luyện nghe với audio files và transcript đầy đủ",
    type: "doc",
    badge: "HOT",
    size: "15.8 MB",
    url: "#",
  },
];
