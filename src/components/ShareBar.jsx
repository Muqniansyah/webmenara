import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function ShareBar() {
  const currentURL = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(
    "Baca artikel menarik tentang riset vendor di industri kayu ekspor!"
  );

  return (
    <div className="sharebar">
      <h4>Bagikan Artikel Ini:</h4>
      <div className="share-icons">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${currentURL}&text=${text}`}
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <FaTwitter />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${text}%20${currentURL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
