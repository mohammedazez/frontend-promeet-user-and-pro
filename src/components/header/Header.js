import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, Button, NavItem } from "react-bootstrap";
import Dropdown from "../dropdown/dropdwon";
import "./Header.css";
import { userLogout, getUserInfoAction } from "../../redux/action/User.action";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const dataUser = useSelector((state) => state.user);
  const member = useSelector((state) => state.member);

  console.log(member);

  useEffect(() => {
    dispatch(getUserInfoAction());

    // eslint-disable-next-line
  }, []);

  const logoutSuccess = () => {
    console.log("logout");
    dispatch(userLogout(history));
    localStorage.removeItem("token");

    alert("logout");
    console.log("slesai logoout", dataUser);
  };

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
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </NavItem>
            {!localStorage.getItem("token") ? (
              <Button className="button-navbar">
                <Link
                  to="/signup/pro"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Jadi Konsultan
                </Link>
              </Button>
            ) : (
              ""
            )}
            {!localStorage.getItem("token") ? (
              <Button className="button-navbar">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Button>
            ) : (
              ""
            )}
            {!localStorage.getItem("token") ? (
              <Button className="button-navbar">
                <Link
                  to="/signup/user"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign Up
                </Link>
              </Button>
            ) : (
              ""
            )}

            {localStorage.getItem("token") ? (
              <div className="kebawah">
                <button className="kebawah-tombol">My Profile</button>
                <div className="kebawah-content">
                  {!member === "member" ? (
                    <Link to="/profil/user">
                      <p className="teks-kebawah">Profile User</p>
                    </Link>
                  ) : (
                    <Link to="/profil/pro">
                      <p className="teks-kebawah">Profile Pro</p>
                    </Link>
                  )}
                  <div
                    onClick={() => logoutSuccess()}
                    style={{ cursor: "pointer" }}
                  >
                    <p className="teks-kebawah">Logout</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
