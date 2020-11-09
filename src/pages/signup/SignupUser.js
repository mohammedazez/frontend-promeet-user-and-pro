import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { userRegisterAction } from "../../redux/action/User.action";

// --------------- styling ----------------
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";

// ---------------- Bootstrap Component --------------
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignupUser() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    numberPhone: "",
  });

  // --------------- Handlechange form ---------------
  const handleChange = (event) =>{
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <div className="section-signupb">
              {/* <Card className="gambar-section"></Card> */}
              <Card className="form-sectionb">
                <h4>Sign Up</h4>
                <Form onSubmit={(event) => {
                    dispatch(userRegisterAction(register, event, history));
                  }} className="formb">
                  <Form.Group>
                    <Form.Label className="label-formb">Full Name</Form.Label>
                    <Form.Control
                      className="kolom-formb"
                      size="sm"
                      type="text"
                      placeholder="Masukkan Nama lengkap anda"
                      name="fullName"
                      value={register.fullName}
                      onChange={(event) => handleChange(event)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="label-formb">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      className="kolom-formb"
                      size="sm"
                      type="email"
                      placeholder="Masukkan Email anda"
                      name="email"
                      value={register.email}
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
                      value={register.password}
                      onChange={(event) => handleChange(event)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="label-formb">Phone Number</Form.Label>
                    <Form.Control
                      className="kolom-formb"
                      size="sm"
                      type="text"
                      placeholder="Masukkan nomor telpon anda"
                      name="numberPhone"
                      value={register.numberPhone}
                      onChange={(event) => handleChange(event)}
                    />
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
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignupUser;
