import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../css/ProfilPro.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import SidebarPro from "./SidebarPro";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import { getProfileDetailAction } from "../../../../redux/action/Professional.action";
// import { getUserInfoAction } from "../../../../redux/action/User.action";

function ProfilPro() {
  const dispatch = useDispatch();
  const history = useHistory();
  const profiledetail = useSelector((state) => state.professional.data);
  const [location, setLocation] = useState("");
  const [profesi, setProfesi] = useState("");
  const [userid, setUserid] = useState("");
  const [picture, setPicture] = useState("");

  const { id } = useParams();
  useEffect(() => {
    if (profiledetail === undefined) {
      dispatch(getProfileDetailAction(id));
    } else {
      setLocation(profiledetail.locationId.nameLocation);
      setUserid(profiledetail.userId.fullName);
      setProfesi(profiledetail.profesiId.nameProfesi);
      setPicture(profiledetail.imgUrl);
    }
    // eslint-disable-next-line
  }, [profiledetail, dispatch]);

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
                src={picture}
                className="foto-profilprosaya"
                alt="fotoprofilpro"
              />
              <Card.Body>
                <Card.Text>Nama : {userid}</Card.Text>
                <Card.Text>Pekerjaan : {profesi}</Card.Text>
                <Card.Text>Lokasi : {location}</Card.Text>
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
