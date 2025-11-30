import React from "react";
import { learnStyles, coursesData } from "../hooks/useLearnStyles";

function LearnCourseCard({ course, index, isSelected, onClick }) {
  return (
    <div
      className="d-flex align-items-center gap-3 p-4"
      style={{
        ...learnStyles.courseCard(isSelected ? 0 : index),
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(10px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,217,255,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow =
          isSelected
            ? "0 8px 30px rgba(0,217,255,0.4)"
            : "0 4px 15px rgba(0,0,0,0.3)";
      }}
    >
      <img
        src={course.image}
        alt={course.title}
        style={learnStyles.courseImage(isSelected ? 0 : index)}
      />
      <div>
        <h3
          className="m-0 fw-bold mb-1"
          style={{
            fontSize: "24px",
            color: isSelected ? "#0a0a0a" : "#ffffff",
          }}
        >
          {course.title}
        </h3>
        <p
          className="m-0"
          style={{
            fontSize: "16px",
            color: isSelected ? "#003366" : "#a0a0a0",
          }}
        >
          {course.subtitle}
        </p>
      </div>
    </div>
  );
}

function LearnCoursesList({ selectedCourse, onCourseSelect }) {
  return (
    <>
      <div className="p-4 mb-4 text-center mt-4" style={learnStyles.banner}>
        <h2 className="m-0 fw-bold" style={learnStyles.bannerTitle}>
          NEW TOEIC
        </h2>
      </div>
      <div className="d-flex flex-column gap-3">
        {coursesData.map((course, index) => (
          <LearnCourseCard
            key={course.id}
            course={course}
            index={index}
            isSelected={selectedCourse?.id === course.id}
            onClick={() => onCourseSelect(course)}
          />
        ))}
      </div>
    </>
  );
}
export default LearnCoursesList;

