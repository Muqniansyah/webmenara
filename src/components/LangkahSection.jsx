import React from "react";
import HubungiKami from "./button/HubungiKami";

export default function LangkahSection() {
  return (
    <section id="langkah" className="langkah-section">
      <div className="container">
        <h2 className="section-title">
          🚀 Langkah-Langkah Melakukan Riset Vendor Secara Efektif
        </h2>

        <ol className="langkah-list">
          <li>
            <div className="number">1</div>
            <p>
              Cari referensi dan ulasan vendor secara online atau asosiasi
              industri.
            </p>
          </li>
          <li>
            <div className="number">2</div>
            <p>Bandingkan beberapa vendor berdasarkan kualitas dan layanan.</p>
          </li>
          <li>
            <div className="number">3</div>
            <p>Minta contoh produk atau hasil kerja untuk evaluasi kualitas.</p>
          </li>
          <li>
            <div className="number">4</div>
            <p>Cek pengalaman vendor dalam proyek serupa.</p>
          </li>
          <li>
            <div className="number">5</div>
            <p>
              Lakukan kunjungan pabrik untuk menilai langsung kapasitas kerja.
            </p>
          </li>
        </ol>

        <div className="promo-box">
          <h3>💼 Percayakan Solusi Vendor Kayu Anda pada PT. Menara Bekasi</h3>
          <p>
            Kami siap menjadi mitra terpercaya dalam penyediaan kemasan kayu
            ekspor berkualitas tinggi sesuai standar ISPM 15. Hubungi kami untuk
            konsultasi dan kerja sama profesional.
          </p>
          <HubungiKami />
        </div>
      </div>
    </section>
  );
}
