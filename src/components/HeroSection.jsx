import React from "react";
import bgVideo from "../assets/images/header.mp4";
import PelajariLebih from "./button/PelajariLebih";

export default function HeroSection() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="tagline">#RISETVENDORCERDAS</p>
        <h1>Langkah Cerdas Melakukan Riset Vendor Sebelum Kerjasama Bisnis</h1>
        <p>
          Panduan praktis bagi pelaku industri kayu dan ekspor untuk memastikan
          kerja sama vendor berjalan aman, efisien, dan profesional.
        </p>
        <PelajariLebih />
      </div>
    </section>
  );
}
