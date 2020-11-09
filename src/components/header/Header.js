import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, NavItem } from "react-bootstrap";
import Dropdown from "../dropdown/dropdwon";
import "./Header.css";

function Header() {
  return (
    <div>
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
          <Nav className="mr-auto">
            <Dropdown />
          </Nav>
          <Nav>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link">Chat</Link>
            </NavItem>
            <Button className="button-navbar">
              <Link to="/signuppro" style={{ textDecoration: "none" }}>
                Jadi Konsultan
              </Link>
            </Button>
            <Button className="button-navbar">
              {" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Button>
            <Button className="button-navbar">
              <Link to="/signupuser" style={{ textDecoration: "none" }}>
                Sign Up
              </Link>
            </Button>
            <Button className="button-navbar">
              <Link to="/profil" style={{ textDecoration: "none" }}>
                My Profile
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
