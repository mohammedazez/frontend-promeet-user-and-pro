import React from "react";
import "../css/SectionThree.css";
import { Row, Col } from "react-bootstrap";

function SectionThree() {
  return (
    <div className="container-sectionthree">
      <Row>
        <Col>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604509278/010-partners_al3ryo.png"
            alt="profesional"
            className="img-sectionthree"
          />
          <h1 className="judul-sectionthree">
            Banyak professional berkualitas
          </h1>
          <p className="kalimat-sectionthree">
            Dari professional software engineer yang sudah <br />
            berpengalaman sampai profesi guru, kalian bisa bertemu <br />
            sesuai minat bidang pekerjaan yang kalian sukai.
          </p>
        </Col>
        <Col>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604509277/033-clipboard_pw8j99.png"
            alt="manfaat"
            className="img-sectionthree"
          />
          <h1 className="judul-sectionthree">
            Dapatkan meeting yang bermanfaat
          </h1>
          <p className="kalimat-sectionthree">
            Atur jadwal dengan mereka cari tips dan sharing
            <br /> pengalaman kerja mereka yang telah berpengalaman.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default SectionThree;
