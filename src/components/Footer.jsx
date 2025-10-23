import React from "react";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-overlay"></div>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Menara Bekasi Logo" />
          <h3>PT. Menara Bekasi</h3>
          <p>Penyedia kemasan kayu ekspor sesuai standar ISPM 15.</p>
        </div>

        <div className="footer-contact">
          <h4>Hubungi Kami</h4>
          <p>📍 Bekasi, Indonesia</p>
          <p>📞 +62 858-1729-8071</p>
          <p>📧 sales@menarabekasilestari.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PT. Menara Bekasi — Semua Hak Dilindungi.</p>
      </div>
    </footer>
  );
}
