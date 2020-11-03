import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";
import { Navbar, Nav, Button, NavItem } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Router>
        <Navbar className="Navbar" fixed="top" expand="lg">
          <Navbar.Brand href="/">
            <img
              style={{ maxWidth: "100%", width: "150px", height: "auto" }}
              src="https://res.cloudinary.com/def4tydoe/image/upload/v1604377939/Logo_transparan_nkjtcc.png"
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
              <Button className="button">Jadi Konsultan</Button>
              <Button className="button">Login</Button>
              <Button className="button">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    </div>
  );
}

export default Header;
