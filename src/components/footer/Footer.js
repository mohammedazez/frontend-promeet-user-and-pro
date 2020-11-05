import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

function footer() {
  return (
    <div className="container-footer">
      <Row className="column-footer">
        <Col>
          <h4 className="judul-footer-kiri">Promeet</h4>
          <p className="kalimat-footer-kiri">Berita & Promo</p>
          <p className="kalimat-footer-kiri">Blog</p>
        </Col>
        <Col>
          <h4 className="judul-footer-kiri">Bantuan & Panduan</h4>
          <p className="kalimat-footer-kiri">Bantuan</p>
          <p className="kalimat-footer-kiri">Kebijakan & Privasi</p>
        </Col>
        <Col>
          <h4 className="judul-footer-kiri">Ikuti Kami</h4>
          <Row>
            <AiFillFacebook className="social-footer" />
            <AiFillInstagram className="social-footer" />
            <AiFillTwitterCircle className="social-footer" />
            <AiFillYoutube className="social-footer" />
          </Row>
        </Col>
        <Col className="test">
          <h4 className="judul-footer-kanan">Download Promeet</h4>
          <div className="img-footer">
            <img
              src="https://res.cloudinary.com/def4tydoe/image/upload/v1604542117/download_hrtfsh.svg"
              alt="googlestore"
            />
            <img
              src="https://res.cloudinary.com/def4tydoe/image/upload/v1604542118/download_1_ovbr82.svg"
              alt="appstore"
            />
          </div>
        </Col>
      </Row>
      <p className="copyright">
        Copyright © 2020 Promeet. All rights reserved.
      </p>
    </div>
  );
}

export default footer;
