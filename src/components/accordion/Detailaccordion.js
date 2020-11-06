import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FcExpand } from "react-icons/fc";
import "./Detailaccordion.css";

function Detailaccordion() {
  return (
    <div className="container-accordian-detail">
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header className="card-accordian-detail">
            <FcExpand />
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Tentang Angelia
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Hi, let me introduce my self my full name is Angeia Jolie I am a
              Software Engineer I specialize in a variety of skills, namely the
              development what technology that i use MERN stack MonggoDB,
              Express JS, React Js, and Node JS, state, Software engineering
              concepts, design patterns, and algorithms, UI & UX to code,
              Testing / Debugging and I am ready to collaborate with the team.
              My passion is a combination of business and information
              technology.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <FcExpand />
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Pengalaman Angelia
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>Software Engineer at Google 2017-2019</p>
              <p>Software Engineer at Microsoft 2019-2020</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Detailaccordion;
