import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { getProfileDetailAction } from "../../redux/action/Professional.action";
import {getProfileById} from "../../redux/action/Allprofile.action";
import { postBookingAction } from "../../redux/action/Booking.action";
import {
  dataTransferAction,
  // addToConfirmation,
} from "../../redux/action/Transfer.action";

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

  const userBooking = useSelector((state) => state.user.data);
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

  const [userSetBooking, setUserBooking] = useState({
    userId : userBooking._id,
    profileId: profiledetail._id,
    transferId: datatransfer._id,
    total : profiledetail.price,
    status: 'Pending',
    imgUrl: 'gambar.jpeg'

  })

  const handleInput = (e) => {
    setUserBooking({
      ...userSetBooking,
      [e.target.name] : e.target.value
    })
  }

  // const rentHandler = (transfer) => {
  //   dispatch(addToConfirmation(transfer));
  // };

  const handleSubmit = ( event ) => {
    event.preventDefault();
    dispatch(postBookingAction(userSetBooking, history))
  }

  console.log('profiledetail', profiledetail._id)
  console.log('booking', userSetBooking)


  return (
    <Fragment>
     
        <Header />
        <Form
        onSubmit={handleSubmit}
      >
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
                  defaultValue={userBooking.fullName}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nomor Telepon:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan nomor telepon anda"
                  defaultValue={userBooking.numberPhone}
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
                    <p>{`${transfer.nameMethod}`}</p>
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      label={`${transfer.numberRek}`}
                      name="transferId"
                      id="pembayaran"
                      onChange={handleInput}
                      value={transfer._id}
                      required
                    />
                  </Col>
                </Row>
                <hr className="garispemisah-sectionfour" />
              </Fragment>
            ))}
          </Card>

          {/* Total Price */}
          <Card className="card-booking-pembayaran ">
            <Row>
              <Col>
                <h4>Total Booking Fee</h4>
              </Col>
              <Col>
                <h4>Rp {price}</h4>
              </Col>
            </Row>
            <hr className="garispemisah-sectionfour" />
            <Row>
              <Col>
                <h4>Total Payment</h4>
              </Col>
              <Col>
                <h4 name="total" defaultValue={userBooking.total} >Rp {price}</h4>
              </Col>
            </Row>
          </Card>
          {/* <Link to="/confirmation" style={{ textDecoration: "none" }}> */}
            {/* <Button onClick={() => rentHandler(datatransfer)}> */}
            <Button type="submit" >

              Booking Sekarang
            </Button>
          {/* </Link> */}
        </div>
        <Footer />
      </Form>
    </Fragment>
  );
};

export default Booking;
