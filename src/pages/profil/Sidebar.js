import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function sidebar() {
  return (
    <div>
      <Header />
      <div className="container-sidebar">
        <div className="sidebar-left">
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604923749/Instinct_psvxgg.jpg"
            alt="fotoprofil"
            className="foto-sidebar"
          />
          <hr className="garispemisah-sectionfour" />
          {/* Profil Saya */}
          <div className="grid-sidebar bg-active">
            <div className="icon-sidebar-align">
              <img
                src="https://i.ibb.co/G7jRx4j/hash.png"
                alt=""
                height="26.25px"
                width="26.25px"
              />
            </div>
            <div>
              <p style={{ marginTop: "4px" }}>
                <strong>
                  <Link to="/profilsaya">Profil saya</Link>
                </strong>
              </p>
            </div>
          </div>
          <hr className="garispemisah-sectionfour" />
          {/* Transaksi */}
          <div className="grid-sidebar">
            <div className="icon-sidebar-align">
              <img
                src="https://i.ibb.co/Gsr7qyX/notification.png"
                alt=""
                height="26.25px"
                width="26.25px"
              />
            </div>
            <div>
              <p style={{ marginTop: "4px" }}>
                <strong>Transaksi</strong>
              </p>
            </div>
          </div>
          <hr className="garispemisah-sectionfour" />
          {/* Chat */}
          <div className="grid-sidebar">
            <div className="icon-sidebar-align">
              <img
                src="https://i.ibb.co/b2zRPbZ/email.png"
                alt=""
                height="26.25px"
                width="26.25px"
              />
            </div>
            <div>
              <p style={{ marginTop: "4px" }}>
                <strong>Chat</strong>
              </p>
            </div>
          </div>
          <hr className="garispemisah-sectionfour" />
          {/* Edit profil */}
          <div className="grid-sidebar">
            <div className="icon-sidebar-align">
              <img
                src="https://i.ibb.co/znTXjv6/perfil.png"
                alt=""
                height="26.25px"
                width="26.25px"
              />
            </div>
            <div>
              <p style={{ marginTop: "4px" }}>
                <strong>Edit profil</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
