import React from "react";
import "../css/ProfilPro.css";
import { Row, Col, Card } from "react-bootstrap";
import SidebarPro from "./SidebarPro";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";

function ProfilPro() {
  return (
    <div>
      <Header />
      <div>
        <Row className="container-row-profilsayapro">
          <Col md="auto">
            <SidebarPro />
          </Col>
          <Col className="container-profilsayapro">
            <Card>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
                alt="fotoprofilku"
                className="foto-profilprosaya"
              />
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilPro;
