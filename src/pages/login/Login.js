import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { loginAction } from "../../redux/action/User.action";

// --------------- styling ----------------
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

// ---------------- Bootstrap Component --------------
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    dispatch(loginAction(login, event, history));
  };

  return (
    <div className="containersignup">
      {/* <Container>
        <Row>
          <Col></Col>
          <Col> */}
      <div className="section-logina">
        {/* <Card className="gambar-section"></Card> */}
        <Card className="form-sectiona">
          <h3>Login</h3>
          <Form onSubmit={handleSubmit} className="forma">
            <Form.Group>
              <Form.Label className="label-forma">Email Address</Form.Label>
              <Form.Control
                className="kolom-forma"
                size="sm"
                type="email"
                placeholder="Masukkan Email Anda"
                name="email"
                value={login.email}
                onChange={(event) => handleChange(event)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label-forma">Password</Form.Label>
              <Form.Control
                className="kolom-forma"
                size="sm"
                type="password"
                placeholder="Password"
                name="password"
                value={login.password}
                onChange={(event) => handleChange(event)}
                required
              />
            </Form.Group>
            <Button type="submit" className="buttona">
              Login
            </Button>
          </Form>
          <div className="option-logina">
            <h6 className="option-texta">Belum punya akun ?, silahkan </h6>
            <Link to="/signup/user">Daftar Sebagai User</Link>
          </div>
          <div className="option-logina">
            <h6 className="option-texta">atau silahkan </h6>
            <Link to="/signup/pro">Daftar Sebagai Professional</Link>
          </div>
          <div className="option-logina">
            <h6 className="option-texta">Info lebih lanjut, kembali ke </h6>
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

export default Login;
