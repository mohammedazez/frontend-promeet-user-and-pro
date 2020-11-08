import React from "react";
import { Link } from "react-router-dom";
import "../css/SectionTwo.css";

function SectionTwo() {
  return (
    <div className="container-sectiontwo">
      <h1 className="judul-sectiontwo">
        Cari Professional di kota terdekat anda
      </h1>
      <p className="kalimat-sectiontwo">
        Yuk dicek apakah professional anda sudah ada di kotamu?
      </p>
      <Link to="/professional">
        <img
          src="https://res.cloudinary.com/def4tydoe/image/upload/v1604504276/jadwalkan_sekarang_qfwiv1.png"
          alt="terdekat"
          className="img-sectiontwo"
        />
      </Link>
    </div>
  );
}

export default SectionTwo;
