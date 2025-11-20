import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSection() {
  const backlinkData = [
    {
      title: "Website Resmi PT.Kemas Kayu Indonesia",
      desc: "Kami selalu memastikan kualitas kayu sesuai standar nasional.",
      icon: "🌍",
      link: "https://menarabekasilestari.site/",
    },
    {
      title: "Pastikan Pallet Anda Siap Kirim Tanpa Risiko!",
      desc: "Kerjasama hanya dengan vendor terpercaya & berpengalaman.",
      icon: "🚚",
      link: "https://kemaskayuindonesia.my.id/menarabekasi/",
    },
    {
      title:
        "Legalitas Ekspor Kayu: Panduan Lengkap Dokumen, Perizinan, dan Sertifikasi SVLK",
      desc: "Panduan lengkap tentang izin, sertifikat, dan dokumen ekspor kayu yang sah dan aman.",
      icon: "📑",
      link: "https://menaraweb.vercel.app/",
    },
    {
      title: "Pentingnya Vendor Berlisensi ISPM 15 dalam Ekspor Kayu",
      desc: "Pastikan Anda bekerja dengan vendor berizin resmi agar pengiriman kayu diterima global.",
      icon: "👬",
      link: "https://muqniansyah.codeberg.page/bekasimenara/",
    },
    {
      title: "Mengenal Kayu Ramah Lingkungan dan Sertifikasi Hijau ",
      desc: "Ketahui cara mendukung ekspor hijau melalui penggunaan kayu ramah lingkungan.",
      icon: "💡",
      link: "https://web-menarabks.vercel.app/",
    },
    {
      title: "Kendala dalam Kerjasama dengan Vendor: Tantangan & Solusi Nyata",
      desc: "Temukan cara membangun hubungan bisnis yang solid dengan vendor kayu ekspor Anda.",
      icon: "✨",
      link: "https://menarabekasi.vercel.app/",
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
          400: { slidesPerView: 1 },
          300: { slidesPerView: 1 },
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
