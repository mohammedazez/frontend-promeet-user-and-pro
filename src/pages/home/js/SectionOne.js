import React from "react";
import { useHistory } from "react-router-dom";
import { Jumbotron, Container, Button, Row, Col } from "react-bootstrap";
import "../css/SectionOne.css";

function SectionOne() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/allprofile");
  };

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <div className="container-sectionone">
            <h1 className="judul-sectionone">
              Meeting dengan professional dapatkan tips berdasarkan status
              pekerjaan yang kamu sukai
            </h1>
          </div>
          <div className="container-sectionone">
            <Button className="button-sectionone" onClick={handleClick}>
              Jadwalkan Pertemuan
            </Button>
          </div>
          <Row>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604246542/leader_u0fug8.png"
                alt="products"
                className="img-sectionone"
              />
              <h3>1K Professional</h3>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604246542/shipping_qms4p8.png"
                alt="members"
                className="img-sectionone"
              />
              <h3>10K Job</h3>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604246542/location_huh4vl.png"
                alt="location"
                className="img-sectionone"
              />
              <h3>50 Locations</h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default SectionOne;
