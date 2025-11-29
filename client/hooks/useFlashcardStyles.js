export const flashcardStyles = {
  // Styles cho Card
  cardContainer: {
    width: "100%",
    maxWidth: "600px",
    height: "350px",
    perspective: "1000px",
    margin: "0 auto 30px",
  },
  flashcard: (isFlipped) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
  }),
  cardFace: (isFront) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    borderRadius: "20px",
    background: isFront
      ? "linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 100%)"
      : "linear-gradient(135deg, #00d9ff 0%, #38bdf8 100%)",
    color: isFront ? "#fff" : "#0a0a0a",
    border: "2px solid rgba(255, 255, 255, 0.1)",
  }),
  wordText: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#fff",
    textShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
  },
  meaningText: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#0a0a0a",
  },
  // Styles cho nút đánh giá SRS
  srsButton: (color) => ({
    background: color,
    color: "#0a0a0a",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.2s",
  }),
};

// Dữ liệu mẫu (Giả định sẽ được lấy từ API backend)
export const mockFlashcards = [
  {
    id: 1,
    word: "Diligent",
    meaning: "Siêng năng, cần cù",
    example: "He is a diligent student.",
  },
  {
    id: 2,
    word: "Adaptable",
    meaning: "Có khả năng thích nghi",
    example: "She is highly adaptable to new situations.",
  },
  {
    id: 3,
    word: "Ambition",
    meaning: "Tham vọng, hoài bão",
    example: "His ambition is to travel the world.",
  },
  // Sẽ được mở rộng khi có API
];
