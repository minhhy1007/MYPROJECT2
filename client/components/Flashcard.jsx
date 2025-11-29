import React, { useState } from "react";
import { flashcardStyles } from "../hooks/useFlashcardStyles";

function Flashcard({ card, onRate }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleRate = (difficulty) => {
    // Gửi đánh giá lên component cha (StudyPage)
    onRate(card.id, difficulty);
    // Tự động lật lại và chuẩn bị cho thẻ tiếp theo
    setIsFlipped(false);
  };

  return (
    <div
      style={flashcardStyles.cardContainer}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div style={flashcardStyles.flashcard(isFlipped)}>
        {/* Mặt trước: Từ vựng */}
        <div style={{ ...flashcardStyles.cardFace(true), zIndex: 2 }}>
          <p style={flashcardStyles.wordText}>{card.word}</p>
          <small style={{ color: "#b0b0b0", marginTop: "20px" }}>
            Click để xem nghĩa
          </small>
        </div>

        {/* Mặt sau: Nghĩa và Ví dụ */}
        <div
          style={{
            ...flashcardStyles.cardFace(false),
            transform: "rotateY(180deg)",
            zIndex: 1,
          }}
        >
          <p style={flashcardStyles.meaningText}>
            <span style={{ color: "#ef4444" }}>{card.meaning}</span>
          </p>
          <p style={{ fontSize: "16px", color: "#0a0a0a", opacity: 0.8 }}>
            Ví dụ: "{card.example}"
          </p>

          {/* Nút đánh giá SRS (Chỉ hiển thị khi đã lật) */}
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <button
              style={flashcardStyles.srsButton("#ef4444")}
              onClick={(e) => {
                e.stopPropagation();
                handleRate("Hard");
              }}
            >
              🔴 Khó
            </button>
            <button
              style={flashcardStyles.srsButton("#fbbf24")}
              onClick={(e) => {
                e.stopPropagation();
                handleRate("Medium");
              }}
            >
              🟡 Trung bình
            </button>
            <button
              style={flashcardStyles.srsButton("#22c55e")}
              onClick={(e) => {
                e.stopPropagation();
                handleRate("Easy");
              }}
            >
              🟢 Dễ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
