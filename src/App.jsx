import React from "react";
import HeroSection from "./components/HeroSection";
import PentingnyaSection from "./components/PentingnyaSection";
import FaktorSection from "./components/FaktorSection";
import LangkahSection from "./components/LangkahSection";
import ShareBar from "./components/ShareBar";
import SwiperSection from "./components/SwiperSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import "./assets/styles/style.css";

function App() {
  return (
    <>
      <HeroSection />
      <PentingnyaSection />
      <FaktorSection />
      <LangkahSection />
      <ShareBar />
      <SwiperSection />
      <FaqSection />
      <Footer />
    </>
  );
}

export default App;
