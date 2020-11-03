import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";
import { Navbar, Nav, Button, NavItem } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Router>
        <Navbar className="container-navbar" fixed="top" expand="lg">
          <Navbar.Brand href="/">
            <img
              style={{ maxWidth: "100%", width: "130px", height: "auto" }}
              src="https://res.cloudinary.com/def4tydoe/image/upload/v1604382830/promeet_transparan_rvyoda.png"
              alt="img"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavItem>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link">About</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link">Chat</Link>
              </NavItem>
            </Nav>
            <Nav>
              <Button className="button-navbar">Jadi Konsultan</Button>
              <Button className="button-navbar">Login</Button>
              <Button className="button-navbar">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    </div>
  );
}

export default Header;
