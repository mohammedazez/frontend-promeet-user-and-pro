import React from "react";
import "../css/SidebarUser.css";
import { Link } from "react-router-dom";

export default function SidebarUser() {
  return (
    <div>
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
                  <Link to="/profil/user">Profil saya</Link>
                </strong>
              </p>
            </div>
          </div>
          <hr className="garispemisah-sectionfour" />
          {/* Booking */}
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
                <strong>
                  <Link to="/mybookingsaya/user">Pesanan baru</Link>
                </strong>
              </p>
            </div>
          </div>
          <hr className="garispemisah-sectionfour" />
          {/* Completed */}
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
                <strong>
                  <Link to="/completed/user">Riwayat Pesanan</Link>
                </strong>
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
                <strong>Pesan</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
