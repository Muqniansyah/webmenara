import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSection() {
  const backlinkData = [
    { title: "Vendor Kayu Terpercaya", url: "https://example.com/vendor1" },
    {
      title: "Standar ISPM 15 untuk Ekspor",
      url: "https://example.com/vendor2",
    },
    {
      title: "Perusahaan Ekspor Kayu Terbaik",
      url: "https://example.com/vendor3",
    },
    { title: "Kemasan Kayu untuk Ekspor", url: "https://example.com/vendor4" },
    { title: "Riset Vendor yang Tepat", url: "https://example.com/vendor5" },
  ];

  return (
    <section id="swiper-section" className="swiper-section">
      <div className="section-header">
        <h2>🌟 Backlink SEO untuk Mendukung Kredibilitas Anda</h2>
        <p>Beberapa vendor terpercaya yang kami rekomendasikan untuk Anda.</p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
        }}
      >
        {backlinkData.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="backlink-item">
                <p>{item.title}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
