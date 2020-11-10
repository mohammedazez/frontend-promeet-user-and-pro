import React from "react";
import "../css/CompletedPro.css";
import { Row, Col, Card, Table } from "react-bootstrap";
import SidebarPro from "./SidebarPro";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";

function CompletedPro() {
  return (
    <div>
      <Header />
      <div>
        <Row className="container-row-completedpro">
          <Col md="auto">
            <SidebarPro />
          </Col>
          <Col className="container-completedpro">
            <h1>Pesanan sudah dibayar oleh user</h1>
            <Card className="container-card-completedpro">
              <div style={{ overflow: "auto" }}>
                <p>Pembayaran Sukses</p>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Nama</th>
                      <th>Tanggal Pertemuan</th>
                      <th>Jam</th>
                      <th>Jenis</th>
                      <th>Tempat</th>
                      <th>Durasi</th>
                      <th>Telp Konsultan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
                          alt="fotopesanansaya"
                          className="foto-completedpro"
                        />
                      </td>
                      <td>Meeting with Angelia</td>
                      <td>02-11-2020</td>
                      <td>08:00 WIB</td>
                      <td>Konsultasi</td>
                      <td>Coworking Space</td>
                      <td>2 Jam</td>
                      <td>08586856858</td>
                    </tr>
                  </tbody>
                </Table>
                <h4>Note:</h4>
                <p>*Mohon jangan menyebar luaskan kontak milik Konsultan. </p>
                <p>*Mohon datang ke tempat jam 07:30 WIB.</p>
                <p>
                  *Jika belum datang sebelum jam 09:00 WIB Maka akan di cancel.{" "}
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default CompletedPro;
