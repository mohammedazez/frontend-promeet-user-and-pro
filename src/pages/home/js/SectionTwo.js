import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/SectionTwo.css";
import { FaBeer } from "react-icons/fa";

function SectionTwo() {
  return (
    <div>
      <Container>
        <h1>Kategori</h1>
        <Row>
          <Col sm={6}>
            <FaBeer />
            <FaBeer />
            <FaBeer />
            <FaBeer />
          </Col>
          <Col sm={6}>
            <FaBeer />
            <FaBeer />
            <FaBeer />
            <FaBeer />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FaBeer />
            <FaBeer />
            <FaBeer />
            <FaBeer />
          </Col>
          <Col sm={6}>
            <FaBeer />
            <FaBeer />
            <FaBeer />
            <FaBeer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionTwo;
