import React from "react";

export default function FaktorSection() {
  return (
    <section id="faktor" className="faktor-section">
      <h2>🧩 Faktor yang Perlu Diperhatikan dalam Memilih Vendor</h2>

      <div className="faktor-grid">
        <div className="faktor-item">
          <div className="icon">🏢</div>
          <h3>Reputasi dan Legalitas Vendor</h3>
          <p>
            Pastikan vendor memiliki izin usaha resmi, sertifikasi kayu, serta
            dokumen ekspor yang lengkap. Reputasi bisa dicek dari testimoni dan
            pengalaman proyek.
          </p>
        </div>

        <div className="faktor-item">
          <div className="icon">📦</div>
          <h3>Kualitas Produk dan Layanan</h3>
          <p>
            "Vendor kayu olahan ekspor yang baik menawarkan mutu kayu tinggi dan
            layanan profesional."
          </p>
        </div>

        <div className="faktor-item">
          <div className="icon">⏱️</div>
          <h3>Ketepatan Waktu dan Konsistensi Pengiriman</h3>
          <p>
            Vendor yang disiplin waktu memastikan rantai pasok dan jadwal ekspor
            berjalan lancar.
          </p>
        </div>

        <div className="faktor-item">
          <div className="icon">💬</div>
          <h3>Komunikasi dan Transparansi Kerja</h3>
          <p>
            Pilih vendor yang terbuka dan komunikatif dalam memberikan informasi
            harga, proses, dan kebijakan kerja.
          </p>
        </div>
      </div>
    </section>
  );
}
