import React from "react";
import "./Sidebar.css";
// boostrap
import { Nav, Image, Card, Button, Carousel } from "react-bootstrap";

// Foto
import Foto from "../../assets/profiluser/Foto Profil.png";

export default function sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebaritem fixed">
        <div className="fotoprrofil mt-5">
          <Image src={Foto} />
          <div className="sidebarketerangan">
            <h3>Nama :</h3>
            <h5>The Girl Snow</h5>
            <h3>Tanggal Lahir :</h3>
            <h5>11 Januari 1998</h5>
            <h3>Alamat :</h3>
            <h5>Jakarta Selatan</h5>
            <h3>No Handphone :</h3>
            <h5>085848485949</h5>
          </div>
        </div>
      </div>
    </aside>
  );
}
