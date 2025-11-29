import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ReviewsPage from "../pages/ReviewsPage";
import StudyPage from "../pages/StudyPage";
import LearnPage from "../pages/LearnPage";
import NotebookPage from "../pages/NotebookPage";
import SpeakingPage from "../pages/SpeakingPage";
import AceHubPage from "../pages/AceHubPage";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Route cho trang giới thiệu (ví dụ) */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/StudyPage" element={<StudyPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/notebook" element={<NotebookPage />} />
        <Route path="/speaking" element={<SpeakingPage />} />
        <Route path="/hub" element={<AceHubPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
