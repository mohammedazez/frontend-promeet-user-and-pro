import React from "react";
import { BiEdit } from "react-icons/bi";
import { useHistory } from "react-router-dom";

import "./Booking.css";

// Boostrap
import { Row, Col, Button, Container, Image } from "react-bootstrap";

// Foto
import Foto from "../../assets/booking/womentech 5.png";

function Booking() {
  let history = useHistory();

  function handleClick() {
    try {
      history.push("/success");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Container className="detailtransaksi">
        <Row>
          <Col>
            <div className="judul">
              <div className="detail">
                <p>Detail Pesanan</p>
              </div>
              <div className="harga">
                <p>Harga</p>
              </div>
            </div>
            <div className="gambar">
              <Image src={Foto} alt="Sendok" rounded />
              <p>Sendok</p>
              <p>Rp12.000</p>
              <Button variant="outline">x</Button>
            </div>
            <div className="gambar">
              <Image src={Foto} alt="Sendok" rounded />
              <p>Sendok</p>
              <p>Rp12.000</p>
              <Button variant="outline">x</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="alamat">
        <Row>
          <Col>
            <div className="judul">
              <div className="detailalamat">
                <p>Detail Alamat</p>
              </div>
              <div className="ubahalamat">
                <Button variant="outline" className="btnubah">
                  <BiEdit className="biedit" />
                  <p>Ubah Alamat</p>
                </Button>
              </div>
            </div>
            <div className="keteranganalamat">
              <div className="detnama">
                <p>Muhammad Aziz</p>
              </div>
              <div className="detalamat">
                <p>
                  Jalan Cilandak Town Square, 2, Jl. Cilandak Town Square No.2,
                  RT.2/RW.1, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan,
                  Daerah Khusus Ibukota Jakarta 12430, Indonesia, Kecamatan
                  Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                </p>
              </div>
              <div className="dettelp">
                <p>+6284348787834</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="waktupengiriman">
        <Row>
          <Col>
            <div className="judul">
              <div className="pilihwaktu">
                <p>Pilih Waktu Pengiriman</p>
              </div>
            </div>
            <hr className="rounded" />
            <div className="keteranganpengiriman">
              <p>Slot Pagi</p>
              <p className="hargapengiriman">Rp 20.000</p>
              <Button className="btnpengiriman">Pilih</Button>
              <hr className="rounded" />
            </div>
            <div className="keteranganpengiriman">
              <p>Slot Siang</p>
              <p className="slotpagi">Rp 20.000</p>
              <Button className="slotpagi">Pilih</Button>
              <hr className="rounded" />
            </div>
            <div className="keteranganpengiriman">
              <p>Slot Sore</p>
              <p className="hargapengiriman">Rp 20.000</p>
              <Button className="btnpengiriman">Pilih</Button>
              <hr className="rounded" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="waktupengiriman">
        <Row>
          <Col>
            <div className="judul">
              <div className="pilihwaktu">
                <p>Metode Pembayaran</p>
              </div>
            </div>
            <hr className="rounded" />
            <div className="keteranganpembayaran">
              <p>BCA</p>
              <p className="rekeningbca">5919111194 - PT Orderine Indonesia</p>
              <Button className="btnpembayaran">Pilih</Button>
              <hr className="rounded" />
            </div>
            <div className="keteranganpembayaran">
              <p>BRI</p>
              <p className="rekeningbri">2134111194 - PT Orderine Indonesia</p>
              <Button className="btnpembayaran">Pilih</Button>
              <hr className="rounded" />
            </div>
            <div className="keteranganpembayaran">
              <p>Mandiri</p>
              <p className="rekeningmandiri">
                4536111194 - PT Orderine Indonesia
              </p>
              <Button className="btnpembayaran">Pilih</Button>
              <hr className="rounded" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="alltotalpembayaran">
        <Row>
          <Col className="alltotal">
            <div className="totalharga">
              <p>Total Harga</p>
              <p className="totalprice">Rp 3.250.000</p>
            </div>
            <div className="ongkoskirim">
              <p>Ongkos Kirim</p>
              <p className="ongkosprice">Rp 20.000</p>
            </div>
            <hr className="rounded" />
            <div className="totalpayment">
              <p>Total Payment</p>
              <p className="paymentprice">Rp 3.270.000</p>
            </div>
          </Col>
        </Row>
        <Button onClick={handleClick} className="btnbayarsekarang">
          Bayar Sekarang
        </Button>
      </Container>
    </div>
  );
}

export default Booking;
