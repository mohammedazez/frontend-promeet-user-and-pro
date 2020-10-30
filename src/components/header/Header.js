import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";
import { Navbar, Nav, Button, NavItem } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img
              style={{ maxWidth: "100%", width: "120px", height: "auto" }}
              src="https://res.cloudinary.com/def4tydoe/image/upload/v1603899574/logo_dcfrla.png"
              alt="img"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavItem>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </NavItem>
            </Nav>
            <Nav>
              <Button variant="warning">
                <FiShoppingCart />
              </Button>
              <Button>Login</Button>
              <Button>Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    </div>
  );
}

export default Header;
