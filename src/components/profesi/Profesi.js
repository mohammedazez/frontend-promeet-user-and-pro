import React, { useEffect } from "react";
import "./Profesi.css";
import { Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfesiAction } from "../../redux/action/Profesi.action";

function Profesi() {
  const dispatch = useDispatch();
  const history = useHistory();
  const listProfesi = useSelector((state) => state.profesi);
  const { profession } = listProfesi;
  // console.log("ini data di profesi", listProfesi);

  useEffect(() => {
    dispatch(getProfesiAction());
  }, [dispatch]);

  const handleClick = (_id) => {
    history.push(`/professional/${_id}`);
  };

  return (
    <div className="container-profesi">
      <h1 className="judul-profesi">Profesi</h1>
      {/* Mapping */}
      <Row>
        {profession.map((profesi, index) => (
          <Row key={index}>
            <Col style={{ marginBottom: "20px" }} sm={6}>
              <img
                src={`${profesi.imgUrl}`}
                alt="img"
                className="img-profesi"
              />
              <p className="p-profesi" onClick={() => handleClick(profesi._id)}>
                {profesi.nameProfesi}
              </p>
            </Col>
          </Row>
        ))}
      </Row>
      {/* Mapping */}

      {/*  START KATEGORI */}
      <Row className="row-profesi">
        {/* COL PERTAMA */}
        <Col style={{ marginBottom: "20px" }} sm={6}>
          {/* ROW PERTAMA */}
          <Row>
            {/* SOFTWARE ENGINEER */}
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/032-software_developer_gu5wbe.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <p className="p-profesi">
                <Link to="/professional" style={{ textDecoration: "none" }}>
                  Software Engineer
                </Link>
              </p>
            </Col>
            {/* ACTRESS */}
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385581/profesi/002-actress_ylpprb.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Actress</p>
              </Link>
            </Col>

            {/* ARSITEK */}
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385581/profesi/003-architecture_sam5bq.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Arsitek</p>
              </Link>
            </Col>
          </Row>
        </Col>

        {/* COL KEDUA */}
        <Col style={{ marginBottom: "20px" }} sm={6}>
          {/* ROW KEDUA */}
          <Row>
            {/* AKUNTAN */}
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385581/profesi/001-accountant_hhyxvk.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Akuntan</p>
              </Link>
            </Col>

            {/* GURU */}
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/033-teacher_evhunm.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Guru</p>
              </Link>
            </Col>

            {/* FOTOGRAFER */}
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385579/profesi/024-photographer_jod3m1.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Fotografer</p>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      {/*  END KATEGORI */}

      <Row className="row-profesi">
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385579/profesi/020-judge_ayvf3t.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Hakim</p>
              </Link>
            </Col>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385579/profesi/027-pilot_fbihd4.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Pilot</p>
              </Link>
            </Col>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/018-graphic_designer_mbovtn.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Desainer Grafis</p>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/015-financial_advisor_ll3taj.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Ahli Keuangan</p>
              </Link>
            </Col>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/014-fashion_designer_t7i3t8.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Fashion Designer</p>
              </Link>
            </Col>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/010-marketer_wqjnlm.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Marketing</p>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/005-baker_kbf01e.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Koki</p>
              </Link>
            </Col>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/004-astronomer_g1ipoa.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Astronom</p>
              </Link>
            </Col>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/009-technician_y09izh.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Teknisi Elektronik</p>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginBottom: "20px" }} sm={6}>
          <Row>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/031-scientist_yykndv.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Ilmuan</p>
              </Link>
            </Col>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/012-electrician_zt0xpf.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Teknisi listrik</p>
              </Link>
            </Col>
            <Col>
              <Link to="/professional">
                <img
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/034-businessman_jtateq.png"
                  alt="img"
                  className="img-profesi"
                />
              </Link>
              <Link to="/professional" style={{ textDecoration: "none" }}>
                <p className="p-profesi">Pengusaha</p>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Profesi;
