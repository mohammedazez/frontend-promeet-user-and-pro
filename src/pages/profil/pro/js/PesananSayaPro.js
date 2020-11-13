import React from "react";
import "../css/PesananSayaPro.css";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import SidebarPro from "./SidebarPro";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";

function PesananSayaPro() {
  return (
    <div>
      <Header />
      <div>
        <Row className="container-row-pesananasayapro">
          <Col md="auto">
            <SidebarPro />
          </Col>
          <Col className="container-pesanansayapro">
            <h1>Anda Mendapatkan Pesanan dari user</h1>
            <Card className="container-card-pesanansayapro">
              <div style={{ overflow: "auto" }}>
                <p>Detail</p>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Customer</th>
                      <th>Nama</th>
                      <th>Tanggal Pertemuan</th>
                      <th>Jam</th>
                      <th>Jenis</th>
                      <th>Tempat</th>
                      <th>Durasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
                          className="foto-pesanansayapro"
                          alt="fotopesanansaya"
                        />
                      </td>
                      <td>The girl of Snow</td>
                      <td>Meeting with Angelia</td>
                      <td>02-11-2020</td>
                      <td>08:00 WIB</td>
                      <td>Konsultasi</td>
                      <td>Coworking Space</td>
                      <td>2 Jam</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div style={{ overflow: "auto" }}>
                <p>Info</p>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Fee</th>
                      <th>Tanggal Booking</th>
                      <th>Deadline Pembayaran</th>
                      <th>Cek Profil User</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rp 2.000.000</td>
                      <td>02-11-2020</td>
                      <td>03-11-2020</td>
                      <td>
                        <Button>Cek Profil user</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default PesananSayaPro;
