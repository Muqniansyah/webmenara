import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSection() {
  const backlinkData = [
    {
      title: "Website Resmi PT. Kemas Kayu Indonesia",
      desc: "Menyediakan pallet dan produk lainnya yang berbahan dasar kayu dan playwood dengan kualitas terbaik",
      icon: "🌍",
      link: "https://menarabekasilestari.site/",
    },
    {
      title: "Pastikan Pallet Anda Siap Kirim Tanpa Risiko!",
      desc: "Fasilitas Produksi Terintegrasi Bersertifikasi ISPM 15",
      icon: "🚚",
      link: "https://kemaskayuindonesia.my.id/menarabekasi/",
    },
    {
      title: "Perbedaan Kayu ISPM 15 dan Non ISPM 15 Panduan untuk Ekspor",
      desc: "Panduan lengkap membedakan Kayu ISPM 15 dan Non ISPM 15.",
      icon: "📦",
      link: "https://blogmenara.pages.dev/",
    },
    {
      title: "Panduan Lengkap ISPM 15",
      desc: "Pelajari pengertian, perlakuan kayu, hingga manfaat sertifikasi ISPM 15 untuk ekspor kayu ke pasar internasional.",
      icon: "🔔",
      link: "https://menarabekasi-bbeb1.web.app/",
    },
  ];

  return (
    <section className="swiper-section">
      <div className="section-header">
        <h2>🔗 Rekomendasi & Artikel Bermanfaat</h2>
        <p>
          Kumpulan referensi pilihan untuk meningkatkan kredibilitas dan
          efisiensi bisnis ekspor kayu Anda.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="custom-swiper"
      >
        {backlinkData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="slide-card">
              <div className="icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Baca Selengkapnya →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
