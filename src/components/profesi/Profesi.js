import React from "react";
import "./Profesi.css";
import { Row, Col } from "react-bootstrap";

function Profesi() {
  return (
    <div className="container-profesi">
      <h1 className="judul-profesi">Profesi</h1>
      <Row className="row-profesi">
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              {" "}
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/032-software_developer_gu5wbe.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Software Engineer</p>
            </Col>
            <Col>
              {" "}
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385581/profesi/002-actress_ylpprb.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Actress</p>
            </Col>
            <Col>
              {" "}
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385581/profesi/003-architecture_sam5bq.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Arsitek</p>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385581/profesi/001-accountant_hhyxvk.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Akuntan</p>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/033-teacher_evhunm.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Guru</p>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385579/profesi/024-photographer_jod3m1.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Fotografer</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="row-profesi">
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385579/profesi/020-judge_ayvf3t.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Hakim</p>
            </Col>
            <Col>
              {" "}
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385579/profesi/027-pilot_fbihd4.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Pilot</p>
            </Col>
            <Col>
              {" "}
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/018-graphic_designer_mbovtn.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Desainer Grafis</p>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/015-financial_advisor_ll3taj.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Ahli Keuangan</p>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/014-fashion_designer_t7i3t8.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Fashion Designer</p>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/010-marketer_wqjnlm.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">marketing</p>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/005-baker_kbf01e.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Koki</p>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/004-astronomer_g1ipoa.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Astronom</p>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/009-technician_y09izh.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Teknisi Elektronik</p>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/031-scientist_yykndv.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Ilmuan</p>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/012-electrician_zt0xpf.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Teknisi listrik</p>
            </Col>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/034-businessman_jtateq.png"
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi">Pengusaha</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Profesi;
