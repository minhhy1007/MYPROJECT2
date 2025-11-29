import React, { useState } from "react";
import Flashcard from "../components/Flashcard";
import { mockFlashcards } from "../hooks/useFlashcardStyles"; // Dùng mock data
// Giả định bạn có sharedStyles đã được tạo
import { sharedStyles } from "../hooks/useSharedStyles";

function FlashcardSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCard = mockFlashcards[currentIndex];

  // Hàm xử lý khi người dùng đánh giá
  const handleRate = (cardId, difficulty) => {
    alert(
      `Đánh giá: Card ID ${cardId}, Mức độ: ${difficulty}. Gửi lên Backend.`
    );

    // TODO: Call API Backend tại đây để cập nhật thuật toán SRS

    // Chuyển sang thẻ tiếp theo
    if (currentIndex < mockFlashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Bạn đã hoàn thành phiên ôn tập hôm nay!");
      setCurrentIndex(0); // Quay lại từ đầu hoặc chuyển sang màn hình hoàn thành
    }
  };

  if (!currentCard) {
    return (
      <div style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>
        Không có từ nào cần ôn tập hôm nay.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "0 20px",
      }}
    >
      <h2 className="fw-bold mb-4 text-center" style={sharedStyles.pageTitle}>
        ÔN TẬP THỜI ĐIỂM VÀNG
      </h2>
      <p style={{ color: "#b0b0b0", marginBottom: "40px" }}>
        Từ: {currentIndex + 1} / {mockFlashcards.length}
      </p>

      <Flashcard card={currentCard} onRate={handleRate} />
    </div>
  );
}
export default FlashcardSection;
