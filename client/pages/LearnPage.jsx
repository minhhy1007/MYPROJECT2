// LearnPage.jsx
import React from "react";
import AppHeader from "../components/Shared/AppHeader";
import AppFooter from "../components/Shared/AppFooter";
import LearnTipsCard from "../components/LearnTipsCard";
import LearnCoursesList from "../sections/LearnCoursesList";
import LearnSidebar from "../sections/LearnSidebar";
import { sharedStyles } from "../hooks/useSharedStyles";

function LearnPage() {
  // Index 1: Học từ mới
  const activeNav = 1;

  return (
    <div
      className="d-flex flex-column text-light"
      style={sharedStyles.pageBackground}
    >
      <AppHeader activeNav={activeNav} setActiveNav={() => {}} />

      {}
      <div
        className="container-fluid flex-grow-1 d-flex p-5"
        style={{ paddingTop: "80px" }}
      >
        {}
        <div style={{ width: "300px" }} className="pe-3">
          <LearnTipsCard />
        </div>

        {}
        <div className="flex-grow-1 pe-3">
          <LearnCoursesList />
        </div>

        {}
        <div style={{ width: "350px" }}>
          <LearnSidebar />
        </div>
      </div>

      <AppFooter />
    </div>
  );
}

export default LearnPage;
