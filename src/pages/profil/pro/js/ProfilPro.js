import React from "react";
import { useHistory } from "react-router-dom";
import "../css/ProfilPro.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import SidebarPro from "./SidebarPro";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";

function ProfilPro() {
  let history = useHistory();

  function handleClick() {
    try {
      history.push("/forminput");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <Header />
      <div>
        <Row className="container-row-profilsayapro">
          <Col md="auto">
            <SidebarPro />
          </Col>
          <Col className="container-profilsayapro">
            <Card className="card-profilpro">
              <Card.Img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
                className="foto-profilprosaya"
                alt="fotoprofilpro"
              />
              <Card.Body>
                <Card.Text>Nama : Angelia Jolie</Card.Text>
                <Card.Text>Pekerjaan : Software Engineer</Card.Text>
                <Card.Text>Lokasi : Jakarta</Card.Text>
                <Card.Text>Email : angelia@gmail.com</Card.Text>
                <Card.Text>No Hp : 08587698585</Card.Text>
                <Button className="tombol-profilpro" onClick={handleClick}>
                  Edit Profil
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilPro;
