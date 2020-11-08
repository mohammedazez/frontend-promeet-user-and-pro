import React from "react";
import { useHistory } from "react-router-dom";

import "./Confirmation.css";

// boostrap
import { Image, Button, Container, Row, Col } from "react-bootstrap";

// Foto
import Foto from "../../assets/success/success.png";

function Confirmation() {
  let history = useHistory();

  function handleClick() {
    try {
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="success">
      <Container className="totaltagihan">
        <Row>
          <Col>
            <div className="totag">
              <p>Total Tagihan</p>
            </div>
            <div>
              <p>
                <span>Rp 12.000</span>
              </p>
            </div>
            <div className="metodepembayaran">
              <p>Metode Pembayaran</p>
            </div>
            <div className="marbot">
              <p>BCA 5919111194 - PT Promeet Indonesia</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="successbtn">
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>
              <Image src={Foto} />
              <h3>Terima kasih sudah pesan di Promeet.com</h3>
              <Button
                style={{ border: "none" }}
                className="btnconfirmation"
                onClick={handleClick}
              >
                <span>To Profile</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Confirmation;
