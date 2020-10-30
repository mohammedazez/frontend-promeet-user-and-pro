import React from "react";
import { Jumbotron, Container, Card, Button } from "react-bootstrap";
import "../css/SectionOne.css";

function SectionOne() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <Card className="card">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title className="text-left">Selamat Malam</Card.Title>
              <Card.Text className="text-left">
                Makanannya mau diantar ke mana hari ini?
              </Card.Text>
              <Button className="text-left" variant="primary">
                Cari Produk sekarang
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default SectionOne;
