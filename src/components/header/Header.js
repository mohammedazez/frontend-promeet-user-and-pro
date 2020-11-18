import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, Button, NavItem } from "react-bootstrap";
import Dropdown from "../dropdown/dropdwon";
import "./Header.css";
import { userLogout, getUserInfoAction } from "../../redux/action/User.action";
import Swal from "sweetalert2";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const member = useSelector((state) => state.user.data);

  // const dataProfileId = member.profileId
  // console.log("ini data member dataProfileId", member);

  useEffect(() => {
    dispatch(getUserInfoAction());

    // eslint-disable-next-line
  }, [dispatch]);

  const logoutSuccess = () => {
    dispatch(userLogout(history));
    localStorage.removeItem("token");
    // console.log("logout", logoutSuccess);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Success Logout",
      showConfirmButton: false,
      timer: 1500,
    });
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
              <Link
                to="/"
                className="nav-link"
                style={{ textDecoration: "none", color: "white" }}
              >
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/about"
                className="nav-link"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/contact"
                className="nav-link"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </NavItem>
            {!localStorage.getItem("token") ? (
              <p></p>
            ) : member !== undefined &&
              member.profileId === undefined &&
              member.role === "profesional" ? (
              <NavItem>
                <Link
                  to="/forminput"
                  className="nav-link"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Formulir
                </Link>
              </NavItem>
            ) : (
              <p></p>
            )}

            {!localStorage.getItem("token") ? (
              <div>
                <Button className="button-navbar">
                  <Link
                    to="/signup/pro"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Jadi Konsultan
                  </Link>
                </Button>
                <Button className="button-navbar">
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
              </div>
            ) : member !== undefined ? (
              <div className="kebawah">
                <button className="kebawah-tombol">My Profile</button>
                <div className="kebawah-content">
                  {member.role === "member" ? (
                    <Link to="/profil/user">
                      <p className="teks-kebawah">Profile User</p>
                    </Link>
                  ) : (
                    <Link to="/profil/pro">
                      <p className="teks-kebawah">Profile Pro</p>
                    </Link>
                      <Link to="/forminput">
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
              <p>loading</p>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
