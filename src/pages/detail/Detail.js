import React, { Fragment } from "react";
import "./Detail.css";
import SliderProduk from "../../components/sliderproduk/SliderProduk";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FcOvertime } from "react-icons/fc";

function DetailProduk() {
  return (
    <Fragment>
      <div className="container-detail">
        <div className="tulisan-penanda-detail">
          <p>Home</p>
          <p>{">"}</p>
          <p>Jakarta</p>
          <p>{">"}</p>
          <p>Angelia Jolie</p>
        </div>
        <Row>
          <Col>
            <Card className="card-professional">
              <img
                className="img-professional"
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
                alt="imgprodetail"
              />
            </Card>
          </Col>
          <Col>
            <h1 className="nama-detail">Angelia Jolie</h1>
            <h2 className="pekerjaan-detail">Software Engineer dari Jakarta</h2>
            <p className="harga-detail">Rp 1.000.000 /Jam</p>
            <Button className="button-detail">Kirim Pertemuan</Button>
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
        <SliderProduk />
      </div>
    </Fragment>
  );
}

export default DetailProduk;
