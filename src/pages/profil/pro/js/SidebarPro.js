import React from "react";
import "../css/SidebarPro.css";
import { Link } from "react-router-dom";

export default function Sidebarpro() {
  return (
    <div>
      <div className="container-sidebar">
        <div className="sidebar-left">
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
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
                  <Link to="/profil/pro">Profil saya</Link>
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
                  <Link to="/pesanansaya/pro">Pesanan</Link>
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
                  <Link to="/completed/pro">Completed</Link>
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
                <strong>Chat</strong>
              </p>
            </div>
          </div>
          <hr className="garispemisah-sectionfour" />
          {/* Penghasilan */}
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
                <strong>Penghasilan</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
