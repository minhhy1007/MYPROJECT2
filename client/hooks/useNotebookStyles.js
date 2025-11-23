// ../hooks/useNotebookStyles.js

export const notebookStyles = {
  searchBar: {
    maxWidth: "520px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
    borderRadius: "50px",
    boxShadow: "0 0 25px rgba(0, 217, 255, 0.2)",
    border: "1px solid rgba(0,217,255,0.3)",
    backdropFilter: "blur(10px)",
  },
  searchInput: {
    border: "none",
    outline: "none",
    fontSize: "15px",
    color: "white",
    background: "transparent",
  },
  searchButton: {
    background: "linear-gradient(135deg, #00d9ff 0%, #007bff 100%)",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 20px rgba(0, 217, 255, 0.3)",
  },
  card: (color) => ({
    background: `linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`,
    borderRadius: "20px",
    boxShadow: `0 0 40px ${color}40`,
    border: `1px solid ${color}50`,
    minWidth: "280px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }),
  cardCount: (color) => ({
    fontSize: "52px",
    color: color,
    textShadow: `0 0 25px ${color}99`,
  }),
  cardIcon: (color) => ({
    filter: `drop-shadow(0 5px 15px ${color}66)`,
  }),
};

export const cardsData = [
  { count: 0, label: "từ ôn tập", color: "#00d9ff" },
  { count: 0, label: "từ ngủ đông", color: "#fbbf24" },
];
