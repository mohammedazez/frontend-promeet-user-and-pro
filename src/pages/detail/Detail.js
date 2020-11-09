import React, { Fragment } from "react";
import "./Detail.css";
import SliderProduk from "../../components/sliderproduk/SliderProduk";
import Detailaccordion from "../../components/accordion/Detailaccordion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

function DetailProduk() {
  return (
    <Fragment>
      <Header />
      <div className="container-detail">
        <div className="tulisan-penanda-detail">
          <p>Home</p>
          <p>{">"}</p>
          <p>Jakarta</p>
          <p>{">"}</p>
          <p>Angelia Jolie</p>
        </div>
        <Row className="responsive-detail">
          <Col>
            <img
              className="img-professional"
              src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
              alt="imgprodetail"
            />
          </Col>
          <Col>
            <h1 className="nama-detail">Angelia Jolie</h1>
            <h2 className="pekerjaan-detail">Software Engineer dari Jakarta</h2>
            <p className="harga-detail">Rp 1.000.000 /Jam</p>
            <Button className="button-detail">
              <Link to="/booking" style={{ textDecoration: "none" }}>
                Kirim Pertemuan
              </Link>
            </Button>
            <Row className="container-filter-detail">
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Jam Tersedia :</p>
                  <select>
                    <option>08:00 WIB</option>
                    <option>10:00 WIB</option>
                    <option>13:00 WIB</option>
                    <option>18:00 WIB</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Tanggal Tersedia:</p>
                  <select>
                    <option>18-11-2020</option>
                    <option>19-11-2020</option>
                    <option>20-11-2020</option>
                    <option>21-11-2020</option>
                    <option>22-11-2020</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row className="container-filter-detail">
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Pilihan Jasa :</p>
                  <select>
                    <option>Konsultasi</option>
                    <option>Belajar React Js</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Tempat Meeting :</p>
                  <select>
                    <option>Coworking Space</option>
                    <option>Cafe</option>
                    <option>Kantor</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div>
        <Detailaccordion />
      </div>
      <div>
        <SliderProduk />
      </div>
      <Footer />
    </Fragment>
  );
}

export default DetailProduk;
