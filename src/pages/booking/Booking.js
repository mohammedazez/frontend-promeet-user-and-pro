import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
// import "./Booking.css";
import "./Perbaikan.css";
import { Row, Col, Table, Card, Form, Button } from "react-bootstrap";




const Booking = () => {
  let history = useHistory();

  function handleClick() {
    try {
      history.push("/confirmation");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Fragment>
      {/* Perbaikan */}
      <div className="container-booking">
        {/* Detail Pesanan */}
        <Card className="card-booking">
          <h1 className="judul-booking">Detail Pesanan</h1>
          <div style={{ overflow: "auto" }}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Nama</th>
                  <th>Jam</th>
                  <th>Tanggal</th>
                  <th>Jenis</th>
                  <th>Tempat</th>
                  <th>Durasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
                      alt="imgbooking"
                      className="img-booking"
                    />
                  </td>
                  <td>Meet with Angelia Jolie</td>
                  <td>08:00 WIB</td>
                  <td>02-11-2020</td>
                  <td>Konsultasi</td>
                  <td>Coworking Space</td>
                  <td>2 Jam</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card>

        {/* Info Anda*/}
        <Card className="card-booking">
          <h1 className="judul-booking">Info Anda</h1>
          <Form className="container-card-booking">
            <Form.Group>
              <Form.Label>Nama Anda:</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama anda" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nomor Telepon:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan nomor telepon anda"
              />
            </Form.Group>
          </Form>
        </Card>

        {/* Alamat meeting */}
        <Card className="card-booking">
          <h1 className="judul-booking">Alamat Meeting</h1>
          <div className="container-card-booking">
            <p>Coworking Space</p>
            <p>
              Jalan Cilandak Town Square, 2, Jl. Cilandak Town Square No.2,
              RT.2/RW.1, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan,
              Daerah Khusus Ibukota Jakarta 12430, Indonesia, Kecamatan
              Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
            </p>
            <p>+6284348787834</p>
          </div>
        </Card>

        {/* Metode Pembayaran */}
        <Card className="card-booking">
          <h1 className="judul-booking">Metode Pembayaran</h1>
          <hr className="garispemisah-sectionfour" />
          <Row>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604825552/metodepembayaran/LOGO-BANK-BCA-1700X800_tbsloi.png"
                alt="bcaimg"
                className="img-pembayaran-booking"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="5919111194 - PT Promeet Indonesia"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Col>
          </Row>
          <hr className="garispemisah-sectionfour" />
          <Row>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604826188/metodepembayaran/Logo_BRI_q6tug3.png"
                alt="briimg"
                className="img-pembayaran-booking"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="2134111194 - PT Promeet Indonesia"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Row>
          <hr className="garispemisah-sectionfour" />
          <Row>
            <Col>
              <img
                src="https://res.cloudinary.com/def4tydoe/image/upload/v1604826188/metodepembayaran/Bank_Mandiri_logo_white_bg-removebg-preview_bwywa7.png"
                alt="mandiriimg"
                className="img-pembayaran-booking"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="4536111194 - PT Promeet Indonesia"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Row>
        </Card>
        <Card className="card-booking-pembayaran ">
          <Row>
            <Col>
              <h4>Total Booking Fee</h4>
            </Col>
            <Col>
              <h4>Rp 2.000.000</h4>
            </Col>
          </Row>
          <hr className="garispemisah-sectionfour" />
          <Row>
            <Col>
              <h4>Total Payment</h4>
            </Col>
            <Col>
              <h4>Rp 2.000.000</h4>
            </Col>
          </Row>
          <Button onClick={handleClick}>Booking Sekarang</Button>
        </Card>
      </div>
      {/* Perbaikan */}
      {/* <div classname="booking">
        <Container className="detailtransaksi">
          <Row>
            <Col>
              <div className="judul">
                <div className="detail">
                  <p>Detail Booking</p>
                </div>
              </div>
            </div>
            <div className="gambar">
              <Image src={Foto} alt="Sendok" rounded />
              <p>Nama</p>
              <p>Jam</p>
              <p>Tanggal</p>
              <p>Jenis</p>
              <p>Tempat</p>
              <p>Diskusi</p>
            </div>
            <div className="isi">
              <p>Meet with Angelia</p>
              <p>08:00 WIB</p>
              <p>02-11-2020</p>
              <p>Konsultasi</p>
              <p>Coworking Space</p>
              <p>2 Jam</p>
              {/* <Button>X</Button> */}
            </div>
            <hr className="rounded" />
          </Col>
        </Row>
      </Container>
      <Container className="alamat">
        <Row>
          <Col>
            <div className="judul">
              <div className="detailalamat">
                <p>Info Anda</p>
              </div>
            </div>
            <Form className="keteranganalamat">
              <Form.Group controlId="formBasicName">
                <Form.Label>Name :</Form.Label>
                <Form.Control type="email" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group controlId="formBasicTelp">
                <Form.Label>No Telp :</Form.Label>
                <Form.Control type="Number" placeholder="Enter No Telp" />
              </Form.Group>
            </Form>
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
                <p className="rekeningbca">
                  5919111194 - PT Orderine Indonesia
                </p>
                <Button className="btnpembayaran">Pilih</Button>
                <hr className="rounded" />
              </div>
              <div className="keteranganpembayaran">
                <p>BRI</p>
                <p className="rekeningbri">
                  2134111194 - PT Orderine Indonesia
                </p>
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
                <p>Total Booking Fee</p>
                <p className="totalprice">Rp 3.250.000</p>
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
      </div> */}
    </Fragment>
  );
};

export default Booking;
