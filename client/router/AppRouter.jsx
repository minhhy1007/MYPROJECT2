import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ReviewsPage from "../pages/ReviewsPage";
import StudyPage from "../pages/StudyPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Route cho trang chủ */}
        <Route path="/" element={<HomePage />} />
        {/* Route cho trang giới thiệu (ví dụ) */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/StudyPage" element={<StudyPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
