import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";
import { Navbar, Nav, Button, NavItem } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div>
      <Router>
        <Navbar className="Navbar" fixed="top" expand="lg">
          <Navbar.Brand href="/">
            <img
              style={{ maxWidth: "100%", width: "150px", height: "auto" }}
              src="https://res.cloudinary.com/def4tydoe/image/upload/v1604242067/logo_small_c4igh9.png"
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
              <Button style={{ backgroundColor: "#B8E5E1" }}>
                <FiShoppingCart />
              </Button>
              <Button className="button">Login</Button>
              <Button className="button">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    </div>
  );
}

export default Header;
