import React from "react";
import "./Forminput.css";
import { Form, Button } from "react-bootstrap";

function Forminput() {
  return (
    <div className="container-forminput">
      <h1 className="judulutama-form">
        Berikan pengalaman terbaik untuk orang yang membutuhkan di kota anda
      </h1>
      <Form>
        <p className="judulform">Upload Foto profil anda :</p>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1" className="grupform">
          <p className="judulform">Nama Lengkap :</p>
          <Form.Control
            type="namalengkap"
            placeholder="Nama Lengkap"
            size="lg"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1" className="grupform">
          <p className="judulform">Email :</p>
          <Form.Control type="email" placeholder="Email" size="lg" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1" className="grupform">
          <p className="judulform">Pekerjaan :</p>
          <Form.Control type="pekerjaan" placeholder="Pekerjaan" size="lg" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1" className="grupform">
          <p className="judulform">Jasa yang ditawarkan:</p>
          <Form.Control
            type="jasa"
            placeholder="Jasa apa yang ingin ditawarkan"
            size="lg"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1" className="grupform">
          <p className="judulform">Tarif pertemuan /Hitungan perjam :</p>
          <Form.Control
            type="tarif"
            placeholder="Tarif meeting dihitung berdasarkan per jam"
            size="lg"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1" className="grupform">
          <p className="judulform">No.Handphone :</p>
          <Form.Control type="phone" placeholder="Nomor Handphone" size="lg" />
        </Form.Group>
        <Form.Group
          controlId="exampleForm.SelectCustomSizeLg"
          className="grupform"
        >
          <p className="judulform">Lokasi</p>
          <Form.Control as="select" size="lg" custom>
            <option>Jakarta</option>
            <option>Depok</option>
            <option>Bekasi</option>
            <option>Tangerang</option>
            <option>Bogor</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          controlId="exampleForm.SelectCustomSizeLg"
          className="grupform"
        >
          <p className="judulform">Jadwal Tersedia</p>
          <Form.Control as="select" size="lg" custom>
            <option>08:00 WIB</option>
            <option>10:00 WIB</option>
            <option>12:00 WIB</option>
            <option>14:00 WIB</option>
            <option>18:00 WIB</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          controlId="exampleForm.SelectCustomSizeLg"
          className="grupform"
        >
          <p className="judulform">Tanggal Tersedia</p>
          <Form.Control as="select" size="lg" custom>
            <option>08-11-2020</option>
            <option>09-11-2020</option>
            <option>10-11-2020</option>
            <option>11-11-2020</option>
            <option>12-11-2020</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <p className="judulform">Tentang Anda</p>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Tulis Tentang anda"
          />
        </Form.Group>
        <Form.Group>
          <p className="judulform">Upload KTP anda</p>
          <Form.File id="exampleFormControlFile1" />
        </Form.Group>
      </Form>
      <Button>Daftar Jadi Konsultan</Button>
    </div>
  );
}

export default Forminput;
