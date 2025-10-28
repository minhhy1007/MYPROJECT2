import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/StudyPage");
  };
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h1 className="display-5 fw-bold text-primary">
          Ghi nhớ 1000 từ vựng trong 1 tháng 🎯
        </h1>
        <p className="lead mt-3 mb-4">
          Học đúng thời điểm vàng, ghi nhớ lâu, tiết kiệm thời gian – phương
          pháp học hiệu quả nhất của ACEENGLISH.
        </p>
        <button className="btn btn-primary btn-lg" onClick={handleStart}>
          HỌC THỬ NGAY
        </button>
        <div className="mt-4 text-warning">
          ⭐⭐⭐⭐☆{" "}
          <span className="text-dark">(4.7/5 từ 2.000+ học viên)</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
