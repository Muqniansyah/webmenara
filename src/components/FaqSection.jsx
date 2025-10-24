import React, { useState } from "react";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Mengapa riset vendor penting sebelum kerja sama?",
      answer:
        "Riset vendor membantu memastikan bahwa Anda bekerja sama dengan pihak yang memiliki reputasi baik, kualitas produk terjamin, serta legalitas usaha yang sah. Ini mencegah potensi kerugian atau masalah hukum di kemudian hari.",
    },
    {
      question: "Apa risiko jika tidak melakukan riset vendor?",
      answer:
        "Risiko utama meliputi keterlambatan pengiriman, produk tidak sesuai standar, hingga potensi kerugian finansial karena kerja sama tidak transparan atau vendor tidak memiliki izin resmi.",
    },
    {
      question: "Apa manfaat riset vendor dalam industri kayu ekspor?",
      answer:
        "Melalui riset vendor, perusahaan dapat memastikan kualitas kayu sesuai standar ISPM 15, ketepatan waktu pengiriman, serta kepatuhan terhadap regulasi ekspor internasional.",
    },
    {
      question: "Faktor apa saja yang perlu diperhatikan dalam memilih vendor?",
      answer:
        "Perhatikan reputasi, legalitas, kualitas produk, ketepatan waktu, dan komunikasi yang transparan. Vendor yang terbuka akan mempermudah kerja sama jangka panjang.",
    },
    {
      question: "Bagaimana langkah efektif melakukan riset vendor?",
      answer:
        "Cari referensi online, bandingkan layanan, minta contoh produk, periksa pengalaman proyek, dan lakukan kunjungan langsung ke lokasi vendor untuk evaluasi mendalam.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">❓ Pertanyaan Umum Seputar Riset Vendor</h2>
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <i className="arrow">{activeIndex === index ? "−" : "+"}</i>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
