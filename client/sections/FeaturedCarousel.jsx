// ../sections/FeaturedCarousel.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeaturedCard from "../components/FeaturedCard";
import { featuredItems } from "../hooks/useAceHubStyles";
import { sharedStyles } from "../hooks/useSharedStyles"; // Để lấy sharedStyles.navButton

function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Logic để đảm bảo chỉ trượt đủ số card - 1 (vì hiển thị 2 card cùng lúc)
  const maxSlides = Math.max(1, featuredItems.length - 1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "1200px" }}>
      {/* Left Navigation Button */}
      <button
        onClick={prevSlide}
        style={{
          ...sharedStyles.navButton,
          position: "absolute",
          left: "-60px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(0,217,255,0.2)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(0,217,255,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={nextSlide}
        style={{
          ...sharedStyles.navButton,
          position: "absolute",
          right: "-60px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(0,217,255,0.2)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(0,217,255,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Cards Container */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "24px",
            // Trượt 52% để hiển thị 2 card + khoảng cách
            transform: `translateX(-${currentSlide * 52}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {featuredItems.map((item, index) => (
            <FeaturedCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default FeaturedCarousel;
