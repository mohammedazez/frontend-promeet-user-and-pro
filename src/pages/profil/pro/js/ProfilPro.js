import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../css/ProfilPro.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import SidebarPro from "./SidebarPro";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import { getUserInfoAction } from "../../../../redux/action/User.action";
// import { getUserInfoAction } from "../../../../redux/action/User.action";

function ProfilPro() {
  const dispatch = useDispatch();
  const history = useHistory();
  const profiledetail = useSelector((state) => state.user.data);
  const [location, setLocation] = useState("");
  const [profesi, setProfesi] = useState("");
  const [userid, setUserid] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  console.log("ini data", profiledetail);
  useEffect(() => {
    if (profiledetail === undefined) {
      dispatch(getUserInfoAction());
    } else {
      setLocation(profiledetail.profileId.locationId.nameLocation);
      setUserid(profiledetail.fullName);
      setProfesi(profiledetail.profileId.profesiId.nameProfesi);
      setEmail(profiledetail.email);
      setNumber(profiledetail.numberPhone);
    }
    // eslint-disable-next-line
  }, [profiledetail, dispatch]);

  console.log("ini nama", profiledetail);

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
                src=""
                className="foto-profilprosaya"
                alt="fotoprofilpro"
              />
              <Card.Body>
                <Card.Text>Nama : {userid}</Card.Text>
                <Card.Text>Pekerjaan : {profesi}</Card.Text>
                <Card.Text>Lokasi : {location}</Card.Text>
                <Card.Text>Email : {email}</Card.Text>
                <Card.Text>No Hp : {number}</Card.Text>
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
