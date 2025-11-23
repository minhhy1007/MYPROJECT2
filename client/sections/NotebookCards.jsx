// ../sections/NotebookCards.jsx
import React from "react";
import { notebookStyles, cardsData } from "../hooks/useNotebookStyles";

function NotebookCards() {
  return (
    <div
      className="d-flex gap-4 justify-content-center flex-wrap px-3"
      style={{ maxWidth: "900px" }}
    >
      {cardsData.map((card, i) => (
        <div
          key={i}
          className="text-center p-5"
          style={notebookStyles.card(card.color)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = `0 0 60px ${card.color}99`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = `0 0 40px ${card.color}40`;
          }}
        >
          <h3
            className="fw-bold my-2"
            style={notebookStyles.cardCount(card.color)}
          >
            {card.count}
          </h3>
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="icon"
            width="120"
            className="mb-3"
            style={notebookStyles.cardIcon(card.color)}
          />
          <p
            className="mb-0"
            style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)" }}
          >
            {card.label}
          </p>
        </div>
      ))}
    </div>
  );
}
export default NotebookCards;
