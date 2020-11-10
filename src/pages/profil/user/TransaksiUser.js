import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Sidebar from "../../../components/sidebar/Sidebar";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import "./StyleUser.css";

function TransaksiUser() {
  return (
    <div>
      <Header />
      <div>
        <Row className="container-row-profil">
          <Col md="auto">
            <Sidebar />
          </Col>
          <Col className="container-transaksiuser">
            <h1>Transaksi</h1>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default TransaksiUser;
