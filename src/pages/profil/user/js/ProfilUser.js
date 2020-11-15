import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProfilUser.css";
import { Row, Col, Form, Button, Card, Modal } from "react-bootstrap";
import SidebarUser from "./SidebarUser";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import { getUserInfoAction } from "../../../../redux/action/User.action";

function ProfilUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const member = useSelector((state) => state.user.data);

  console.log(member);

  const [email, setEmail] = useState("");
  const [userid, setUserid] = useState("");
  const [nohp, setNohp] = useState("");
  const [picture, setPicture] = useState("");

  const [editProfil, setEditProfil] = useState({
    fullName: "",
    email: "",
    password: "",
    numberPhone: "",
  });

  useEffect(() => {
    if (member === undefined) {
      dispatch(getUserInfoAction());
    } else {
      setEmail(member.email);
      setUserid(member.fullName);
      setNohp(member.numberPhone);
      setPicture(member);
      // setPengalaman(profiledetail.experience);
    }

    // eslint-disable-next-line
  }, [member, dispatch]);

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
        <Row className="container-row-profilsaya">
          <Col md="auto">
            <SidebarUser />
          </Col>
          <Col className="container-profilsaya">
            <h1>Profil Saya</h1>
            <Card className="card-profilpro">
              <Card.Img
                src={picture}
                className="foto-profilprosaya"
                alt="fotoprofilMember"
              />
              <Card.Body>
                <Card.Text>Nama : {userid}</Card.Text>
                <Card.Text>Email : {email}</Card.Text>
                <Card.Text>No Hp : {nohp}</Card.Text>
                <Button className="tombol-profilpro" onClick={handleShow}>
                  Edit Profil
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="gantiemail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    value={editProfil.fullName}
                  />
                </Form.Group>
                <Form.Group controlId="gantiemail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={editProfil.email}
                  />
                </Form.Group>
                <Form.Group controlId="gantipassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={editProfil.password}
                  />
                </Form.Group>
                <Form.Group controlId="gantinomor">
                  <Form.Label>Nomor Handphone</Form.Label>
                  <Form.Control
                    type="nomor"
                    placeholder="Nomor Hp"
                    value={editProfil.numberPhone}
                  />
                </Form.Group>
                {/* <Form.Group controlId="gantialamat">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Alamat lengkap"
                    v
                  />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                  Update Profil
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilUser;
