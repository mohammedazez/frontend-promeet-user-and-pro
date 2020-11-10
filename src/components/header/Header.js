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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </NavItem>
            <Button className="button-navbar">
              <Link
                to="/signup/pro"
                style={{ textDecoration: "none", color: "white" }}
              >
                Jadi Konsultan
              </Link>
            </Button>
            <Button className="button-navbar">
              {" "}
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </Button>
            <Button className="button-navbar">
              <Link
                to="/signup/user"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign Up
              </Link>
            </Button>
            <div className="kebawah">
              <button className="kebawah-tombol">My Profile</button>
              <div className="kebawah-content">
                <a className="teks-kebawah" href="/profil/user">
                  Profile User
                </a>
                <a className="teks-kebawah" href="#profilpro">
                  Profile Pro
                </a>
                <a className="teks-kebawah" href="#logout">
                  Logout
                </a>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
