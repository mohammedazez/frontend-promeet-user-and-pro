import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";

function footer() {
  return (
    <div className="container-footer">
      <Row>
        <Col>
          <h4>Promeet</h4>
          <p>Berita & Promo</p>
          <p>Blog</p>
        </Col>
        <Col>
          <h4>Bantuan & Panduan</h4>
          <p>Bantuan</p>
          <p>Kebijakan & Privasi</p>
        </Col>
        <Col>
          <h4>Ikuti Kami</h4>
        </Col>
        <Col>
          <h4>Download Promeet</h4>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604510708/download_in_google_play_and_app_store_rgbxgf.png"
            alt="download"
            className="img-footer"
          />
        </Col>
      </Row>
    </div>
  );
}

export default footer;
