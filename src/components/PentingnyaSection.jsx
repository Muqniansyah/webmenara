import React from "react";
import menaraGambar from "../assets/images/menara.jpeg";

export default function PentingnyaSection() {
  return (
    <section id="pentingnya" className="pentingnya-section">
      <div className="content">
        <div className="text">
          <h2>🔍 Pentingnya Melakukan Riset Vendor Sebelum Bekerjasama</h2>
          <p>
            Riset vendor bukan sekadar formalitas. ini adalah investasi waktu
            dan strategi untuk menghindari masalah di kemudian hari. Dengan
            memahami profil dan rekam jejak vendor, perusahaan dapat memastikan
            kerja sama yang aman dan saling menguntungkan. Sebelum menjalin
            kerjasama bisnis, penting untuk melakukan riset vendor agar
            menemukan vendor terpercaya dan menghindari risiko kerja sama yang
            merugikan.
          </p>

          <h3>⚠️ Risiko jika tidak melakukan riset vendor</h3>
          <ul>
            <li>Produk tidak sesuai spesifikasi atau standar kualitas.</li>
            <li>Pengiriman terlambat dan mengganggu jadwal ekspor.</li>
            <li>Vendor tidak memiliki izin resmi atau legalitas usaha.</li>
            <li>
              Potensi kerugian finansial karena kerja sama tidak transparan.
            </li>
          </ul>

          <h3>🌲 Manfaat riset vendor dalam industri kayu dan ekspor</h3>
          <ul>
            <li>Menjamin kualitas bahan kayu sesuai standar ISPM 15.</li>
            <li>Memastikan ketepatan waktu pengiriman ekspor.</li>
            <li>Menilai kepatuhan vendor terhadap regulasi ekspor.</li>
          </ul>
        </div>

        <div className="image-container">
          <img src={menaraGambar} alt="Riset Vendor" />
          <div className="pattern-bg"></div>
        </div>
      </div>
    </section>
  );
}
