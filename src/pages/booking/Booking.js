import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getProfileDetailAction } from "../../redux/action/Professional.action";
import { postBookingAction } from "../../redux/action/Booking.action";
import { dataTransferAction } from "../../redux/action/Transfer.action";

// CSS
import "./Booking.css";

// Components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Boostrap
import { Row, Col, Table, Card, Form, Button } from "react-bootstrap";

const Booking = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const datatransfer = useSelector((state) => state.transfer.transferMethod);
  const profiledetail = useSelector((state) => state.professional.data);
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [userid, setUserid] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [profesi, setProfesi] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (profiledetail === undefined) {
      dispatch(getProfileDetailAction(id));
    } else {
      setLocation(profiledetail.locationId.nameLocation);
      setUserid(profiledetail.userId.fullName);
      setService(profiledetail.serviceId.nameService);
      setPrice(profiledetail.price);
      setDate(profiledetail.startDateAvailable);
      setTime(profiledetail.timeAvailable);
      setPicture(profiledetail.imgUrl);
      setProfesi(profiledetail.profesiId.nameProfesi);
    }
    // eslint-disable-next-line
  }, [profiledetail, dispatch]);

  useEffect(() => {
    dispatch(dataTransferAction());
  }, [dispatch]);

  function handleClick() {
    try {
      history.push("/confirmation");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Fragment>
      <Form
        onSubmit={(event) => {
          dispatch(postBookingAction(event, history));
        }}
      >
        <Header />
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
                    <th>Profesi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={picture}
                        alt="imgbooking"
                        className="img-booking"
                      />
                    </td>
                    <td>{userid}</td>
                    <td>{time}</td>
                    <td>{date}</td>
                    <td>{service}</td>
                    <td>{location}</td>
                    <td>{profesi}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card>

          {/* Info Anda*/}
          <Card className="card-booking">
            <h1 className="judul-booking">Info Anda</h1>
            <div className="container-card-booking">
              <Form.Group>
                <Form.Label>Nama Anda:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama anda"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nomor Telepon:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan nomor telepon anda"
                  required
                />
              </Form.Group>
            </div>
          </Card>

          {/* Alamat meeting */}
          <Card className="card-booking">
            <h1 className="judul-booking">Alamat Meeting</h1>
            <div className="container-card-booking">
              <p>{location}</p>
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
            {datatransfer.map((transfer, index) => (
              <Fragment key={index}>
                <Row>
                  <Col>
                    {/* <img
                      src="https://res.cloudinary.com/def4tydoe/image/upload/v1604825552/metodepembayaran/LOGO-BANK-BCA-1700X800_tbsloi.png"
                      alt="bcaimg"
                      className="img-pembayaran-booking"
                    /> */}
                    <p>{`${transfer.nameMethod}`}</p>
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      label={`${transfer.numberRek}`}
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                  </Col>
                </Row>
                <hr className="garispemisah-sectionfour" />
              </Fragment>
            ))}
            <Button onClick={handleClick} type="submit">
              Booking Sekarang
            </Button>
          </Card>
        </div>
        <Footer />
      </Form>
    </Fragment>
  );
};

export default Booking;
