import React from "react";
import "../css/ProfilUser.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import SidebarUser from "./SidebarUser";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import { getUserInfoAction } from "../../../../redux/action/User.action";

function ProfilUser() {
  return (
    <div>
      <Header />
      <div>
        <Row className="container-row-profilsaya">
          <Col md="auto">
            <SidebarUser />
          </Col>
          <Col className="container-profilsaya">
            <h1>Profil Saya</h1>
            <Form>
              <Form.Group controlId="gantiemail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="gantipassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="gantinomor">
                <Form.Label>Nomor Handphone</Form.Label>
                <Form.Control type="nomor" placeholder="Nomor Hp" />
              </Form.Group>
              <Form.Group controlId="gantialamat">
                <Form.Label>Alamat</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Alamat lengkap"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Profil
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilUser;
