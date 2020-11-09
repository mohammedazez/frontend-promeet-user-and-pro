import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Confirmation.css";
import { Image, Button, Container, Row, Col } from "react-bootstrap";

function Confirmation() {
  let history = useHistory();

  function handleClick() {
    try {
      history.push("/profil");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <Header />
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
              <div>
                <Image
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604844769/success_fcpipg.png"
                  alt="thankyou"
                  className="img-success"
                />
              </div>
              <div>
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
      <Footer />
    </div>
  );
}

export default Confirmation;
