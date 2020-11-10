import React from "react";
import "../css/BookingSayaUser.css";
import { Row, Col, Card, Table } from "react-bootstrap";
import SidebarUser from "./SidebarUser";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";

function BookingSayaUser() {
  return (
    <div>
      <Header />
      <div>
        <Row className="container-row-bookingsayauser">
          <Col md="auto">
            <SidebarUser />
          </Col>
          <Col className="container-bookingsayauser">
            <h1>Booking Saya</h1>
            <Card className="container-card-bookingsayauser">
              <div style={{ overflow: "auto" }}>
                <p>Detail</p>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
                          className="foto-bookingsayauser"
                          alt="fotobookingsaya"
                        />
                      </td>
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
                      <th>Metode Pembayaran</th>
                      <th>Tanggal Booking</th>
                      <th>Deadline Pembayaran</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Rp 2.000.000</td>
                      <td>BCA 5919111194 - PT Prommet Indonesia</td>
                      <td>02-11-2020</td>
                      <td>03-11-2020</td>
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

export default BookingSayaUser;
