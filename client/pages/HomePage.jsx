// src/pages/HomePage.jsx
import React, { useRef } from "react";
import Header from "../components/review/Header";
import HeroSection from "../components/review/HeroSection";
import FeatureSection from "../components/review/FeatureSection";
import ContentSection from "../components/review/ContentSection";
import PricingSection from "../components/review/PricingSection";
import Footer from "../components/review/Footer";

function HomePage() {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    if (!pricingRef.current) {
      console.log("pricingRef null");
      return;
    }
    // dùng scrollIntoView (browser smooth) — scroll-margin-top xử lý offset
    pricingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header scrollToPricing={scrollToPricing} />
      <main style={{ marginTop: "80px" }}>
        {" "}
        {/* nếu header fixed, thêm margin-top để không che */}
        <HeroSection />
        <FeatureSection />
        <ContentSection />
        {/* đặt id và ref */}
        <div id="pricing" ref={pricingRef}>
          <PricingSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
