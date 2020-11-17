import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form } from "react-bootstrap";

import { getLocationAction } from "../../../../redux/action/Location.action";
import { getServiceAction } from "../../../../redux/action/Service.actions";
import { getProfesiAction } from "../../../../redux/action/Profesi.action";

import "../css/ProfilPro.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import SidebarPro from "./SidebarPro";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import {
  getUserInfoAction,
  getEditProfessional,
} from "../../../../redux/action/User.action";
// import { getUserInfoAction } from "../../../../redux/action/User.action";

function ProfilPro() {
  const dispatch = useDispatch();
  const history = useHistory();
  const detailProfile = useSelector((state) => state.user.data);
  console.log("", detailProfile);
  // const [location, setLocation] = useState("");
  // const [profesi, setProfesi] = useState("");
  const [userid, setUserid] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  // for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    price: "",
    imgUrl: "",
    imgKtp: "",
    startDateAvailable: new Date(),
    endDateAvailable: new Date(),
    numberPhone: "",
    serviceId: "",
    description: "",
    locationId: "",
    profesiId: "",
    timeAvailable: new Date().getHours(),
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  // akhir modal

  const locate = useSelector((state) => state.location.listLocation);
  const service = useSelector((state) => state.service.listService);
  const listProfesi = useSelector((state) => state.profesi.profession);

  useEffect(() => {
    if (
      locate.length === 0 ||
      service.length === 0 ||
      listProfesi === undefined
    ) {
      dispatch(getLocationAction());
      dispatch(getServiceAction());
      dispatch(getProfesiAction());
    }
  }, [dispatch, locate, service, listProfesi]);

  useEffect(() => {
    if (detailProfile.length !== 0) {
      dispatch(getUserInfoAction());
      // setLocation(detailProfile.profileId.locationId.nameLocation);
      setUserid(detailProfile.fullName);
      // setProfesi(detailProfile.profileId.profesiId.nameProfesi);
      setPicture(detailProfile.imgUrl);
      setEmail(detailProfile.email);
      setNumber(detailProfile.numberPhone);
    } else {
      setProfile(detailProfile);
    }
  }, [detailProfile, dispatch]);

  const handleSubmit = (event) => {
    dispatch(getEditProfessional(profile, detailProfile, event));
    history.push("/profill/pro");
  };

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
                src={picture}
                className="foto-profilprosaya"
                alt="fotoprofilpro"
              />
              <Card.Body>
                <Card.Text>Nama : {userid}</Card.Text>
                {/* <Card.Text>Pekerjaan : {profesi}</Card.Text>
                <Card.Text>Lokasi : {location}</Card.Text> */}
                <Card.Text>Email : {email}</Card.Text>
                <Card.Text>No Hp : {number}</Card.Text>
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
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="gantiemail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    value={detailProfile.fullName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="gantiemail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={detailProfile.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="gantiprice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="price"
                    value={detailProfile.price}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="gantiimgUrl">
                  <Form.Label>imgUrl</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="imgUrl"
                    value={detailProfile.imgUrl}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="gantiimgKtp">
                  <Form.Label>imgKtp</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="imgKtp"
                    value={detailProfile.imgKtp}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="gantistartDateAvailable">
                  <Form.Label>startDateAvailable</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="startDateAvailable"
                    value={detailProfile.startDateAvailable}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="gantiendDateAvailable">
                  <Form.Label>endDateAvailable</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="endDateAvailable"
                    value={detailProfile.endDateAvailable}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="gantinomor">
                  <Form.Label>Nomor Handphone</Form.Label>
                  <Form.Control
                    type="nomor"
                    placeholder="Nomor Hp"
                    value={detailProfile.numberPhone}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="gantidescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="description"
                    value={detailProfile.description}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="gantilocationId">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    placeholder="location"
                    value={detailProfile.locationId}
                    onChange={handleChange}
                    as="select"
                  >
                    {locate.length !== 0 ? (
                      locate.map((item, index) => (
                        <option key={index} value={item._id}>
                          {item.nameCity}
                        </option>
                      ))
                    ) : (
                      <p>Loading</p>
                    )}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="gantiprofesiId">
                  <Form.Label>Jasa Layanan</Form.Label>
                  <Form.Control
                    placeholder="service"
                    value={detailProfile.serviceId}
                    onChange={handleChange}
                    as="select"
                  >
                    {service.length !== 0 ? (
                      service.map((item, index) => (
                        <option key={index} value={item._id}>
                          {item.nameService}
                        </option>
                      ))
                    ) : (
                      <p>Loading</p>
                    )}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="gantiprofesiId">
                  <Form.Label>Profesi</Form.Label>
                  <Form.Control
                    placeholder="profesi"
                    value={detailProfile.profesiId}
                    onChange={handleChange}
                    as="select"
                  >
                    {listProfesi.length !== 0 ? (
                      listProfesi.map((item, index) => (
                        <option key={index} value={item._id}>
                          {item.nameProfesi}
                        </option>
                      ))
                    ) : (
                      <p>Loading</p>
                    )}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="gantiprofesiId">
                  <Form.Label>Time Available</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="time available"
                    value={detailProfile.timeAvailable}
                    onChange={handleChange}
                  />
                </Form.Group>
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

export default ProfilPro;
