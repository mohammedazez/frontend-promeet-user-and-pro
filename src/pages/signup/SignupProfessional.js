import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { proRegisterAction } from "../../redux/action/User.action";

// --------------- styling ----------------
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";

// ---------------- Bootstrap Component --------------
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignupProfessional() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [proRegister, setProRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    pekerjaan: "",
    lokasi: "",
  });

  // --------------- Handlechange form ---------------
  const handleChange = (event) => {
    setProRegister({
      ...proRegister,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {/* <Container>
        <Row>
          <Col></Col>
          <Col> */}
      <div className="section-signupb">
        {/* <Card className="gambar-section"></Card> */}
        <Card className="form-sectionb">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/def4tydoe/image/upload/v1604382830/promeet_transparan_rvyoda.png"
              alt="logo"
              className="logosignlog"
            />
          </Link>
          <h4>Sign Up</h4>
          <Form
            onSubmit={(event) => {
              dispatch(proRegisterAction(proRegister, event, history));
            }}
            className="formb"
          >
            <Form.Group>
              <Form.Label className="label-formb">Full Name</Form.Label>
              <Form.Control
                className="kolom-formb"
                size="sm"
                type="text"
                placeholder="Masukkan Nama lengkap anda"
                name="fullName"
                value={proRegister.fullName}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label-formb">Email Address</Form.Label>
              <Form.Control
                className="kolom-formb"
                size="sm"
                type="email"
                placeholder="Masukkan Email anda"
                name="email"
                value={proRegister.email}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label-formb">Password</Form.Label>
              <Form.Control
                className="kolom-formb"
                size="sm"
                type="password"
                placeholder="Password"
                name="password"
                value={proRegister.password}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label-formb">Pekerjaan</Form.Label>
              <Form.Control
                as="select"
                className="kolom-formb"
                size="sm"
                type="text"
                placeholder="Masukkan info pekerjaan saat ini"
                name="pekerjaan"
                value={proRegister.pekerjaan}
                onChange={(event) => handleChange(event)}
              >
                <option>---</option>
                <option>Actress</option>
                <option>Akuntan</option>
                <option>Arsitek</option>
                <option>Astronom</option>
                <option>Desain Grafis</option>
                <option>Fashion Designer</option>
                <option>Fotografer</option>
                <option>Guru</option>
                <option>Hakim</option>
                <option>Koki</option>
                <option>Marketing</option>
                <option>Pengusaha</option>
                <option>Pilot</option>
                <option>Software Engineer</option>
                <option>Teknisi Elektronik</option>
                <option>Teknisi Listrik</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="label-formb">Lokasi</Form.Label>
              <Form.Control
                as="select"
                className="kolom-formb"
                size="sm"
                type="text"
                placeholder="Lokasi anda saat ini"
                name="lokasi"
                value={proRegister.lokasi}
                onChange={(event) => handleChange(event)}
              >
                <option>---</option>
                <option>Jakarta</option>
                <option>Depok</option>
                <option>Tanggerang</option>
                <option>Bekasi</option>
              </Form.Control>
            </Form.Group>

            <Button type="submit" className="buttonb">
              Sign Up
            </Button>
          </Form>
          <div className="option-signupb">
            <h6 className="option-textb">Sudah punya akun ?, silahkan </h6>
            <Link to="/login">Login</Link>
          </div>
          <div className="option-signupb">
            <h6 className="option-textb">Info lebih lanjut, kembali ke </h6>
            <Link to="/">Home</Link>
          </div>
        </Card>
      </div>
      {/* </Col>
          <Col></Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default SignupProfessional;
