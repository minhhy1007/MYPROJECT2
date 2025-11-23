// ../components/NotebookSearchBar.jsx
import React from "react";
import { notebookStyles } from "../hooks/useNotebookStyles";

function NotebookSearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div
      className="d-flex align-items-center mb-5 w-90 overflow-hidden"
      style={notebookStyles.searchBar}
    >
      <input
        type="text"
        placeholder="🔍 Gõ vào đây từ bạn muốn tìm..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow-1 px-4 py-3"
        style={notebookStyles.searchInput}
      />
      <button
        className="btn text-white fw-bold border-0 px-4 py-3"
        style={notebookStyles.searchButton}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-3px)";
          e.target.style.boxShadow = "0 8px 25px rgba(0,217,255,0.5)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 20px rgba(0,217,255,0.3)";
        }}
      >
        Search
      </button>
    </div>
  );
}
export default NotebookSearchBar;
