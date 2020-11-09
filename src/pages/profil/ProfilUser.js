import React from "react";
import { Card, Button, Col, Row, Image } from "react-bootstrap";

// css
import "./Profil.css";

// foto
import Foto from "../../assets/profiluser/Foto Profil.png";

// Sidebar
import Sidebar from "../../components/sidebar/Sidebar";

function ProfilUser() {
  return (
    <div className="profiluser">
      <Sidebar />
      <main className="profilusercard">
        <Row style={{ padding: "4rem" }}>
          <Card style={{ width: "50rem" }}>
            <Col className="carddetails">
              <Image variant="top" src={Foto} />
              <h3>Detail</h3>
              <div>
                <p>Name : Meeting with Angelia</p>
              </div>
              <div>
                <p>Tanggal Pertemuan : 02-11-2020</p>
              </div>
              <div>
                <p>Jam : 08:00 WIB</p>
              </div>
              <div>
                <p>Jenis : Konsultasi</p>
              </div>
              <div>
                <p>Tempat : Coworking Space</p>
              </div>
              <div>
                <p>Durasi : 2 Jam</p>
              </div>
              <h3 className="carddetailsinfo">Info</h3>
              <div>
                <p>Fee: Rp 2.000.000</p>
              </div>
              <div>
                <p>BCA 5919111194 - PT Prommet Indonesia </p>
              </div>
              <div>
                <p>Tanggal Booking : 02-11-2020</p>
              </div>
              <div>
                <p>Deadline Pembayaran : 03-11-2020</p>
              </div>
            </Col>
          </Card>
          <hr />
          <Card style={{ width: "50rem" }}>
            <Col className="carddetails">
              <Image variant="top" src={Foto} />
              <h3>Detail</h3>
              <div>
                <p>Name : Meeting with Angelia</p>
              </div>
              <div>
                <p>Tanggal Pertemuan : 02-11-2020</p>
              </div>
              <div>
                <p>Jam : 08:00 WIB</p>
              </div>
              <div>
                <p>Jenis : Konsultasi</p>
              </div>
              <div>
                <p>Tempat : Coworking Space</p>
              </div>
              <div>
                <p>Durasi : 2 Jam</p>
              </div>
              <h3 className="carddetailsinfo">Info</h3>
              <div>
                <p>Fee: Rp 2.000.000</p>
              </div>
              <div>
                <p>BCA 5919111194 - PT Prommet Indonesia </p>
              </div>
              <div>
                <p>Tanggal Booking : 02-11-2020</p>
              </div>
              <div>
                <p>Deadline Pembayaran : 03-11-2020</p>
              </div>
            </Col>
          </Card>
        </Row>
      </main>
    </div>
  );
}

export default ProfilUser;
