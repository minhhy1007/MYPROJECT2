// ../sections/LearnCoursesList.jsx
import React from "react";
import { learnStyles, coursesData } from "../hooks/useLearnStyles";

function LearnCourseCard({ course, index }) {
  return (
    <div
      className="d-flex align-items-center gap-3 p-4"
      style={learnStyles.courseCard(index)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(10px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,217,255,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow =
          index === 0
            ? "0 8px 30px rgba(0,217,255,0.4)"
            : "0 4px 15px rgba(0,0,0,0.3)";
      }}
    >
      <img
        src={course.image}
        alt={course.title}
        style={learnStyles.courseImage(index)}
      />
      <div>
        <h3
          className="m-0 fw-bold mb-1"
          style={{
            fontSize: "24px",
            color: index === 0 ? "#0a0a0a" : "#ffffff",
          }}
        >
          {course.title}
        </h3>
        <p
          className="m-0"
          style={{
            fontSize: "16px",
            color: index === 0 ? "#003366" : "#a0a0a0",
          }}
        >
          {course.subtitle}
        </p>
      </div>
    </div>
  );
}

function LearnCoursesList() {
  return (
    <>
      {/* Banner */}
      <div className="p-4 mb-4 text-center" style={learnStyles.banner}>
        <h2 className="m-0 fw-bold" style={learnStyles.bannerTitle}>
          NEW TOEIC
        </h2>
      </div>

      {/* Courses */}
      <div className="d-flex flex-column gap-3">
        {coursesData.map((course, index) => (
          <LearnCourseCard key={index} course={course} index={index} />
        ))}
      </div>
    </>
  );
}
export default LearnCoursesList;
