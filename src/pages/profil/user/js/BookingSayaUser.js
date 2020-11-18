import React, { useState, useEffect } from "react";
import "../css/BookingSayaUser.css";
import moment from "moment";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, Table, Form } from "react-bootstrap";
import SidebarUser from "./SidebarUser";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingAction,
  editBookingAction,
} from "../../../../redux/action/Booking.action";
import { Button } from "react-bootstrap";
import ReactFilestack from "filestack-react";

function BookingSayaUser() {
  const dispatch = useDispatch();
  const history = useHistory();
  const member = useSelector((state) => state.user.data);
  // const profiledetail = useSelector((state) => state.professional.data);
  const listBooking = useSelector((state) => state.bookingReducers.data);

  // console.log("list booking", listBooking);

  const newBooking = listBooking.filter(
    (item) => item.userId && item.userId._id === member._id
  );

  const lastBooking = newBooking[newBooking.length - 1];
  // console.log("lastBooking", lastBooking);

  // const dateBooking = moment(lastBooking.profileId.startDateAvailable);

  // console.log("tanggal", dateBooking.format("L"));

  useEffect(() => {
    if (listBooking.length === 0 || lastBooking === undefined) {
      dispatch(getBookingAction());
    }
    // eslint-disable-next-line
  }, [dispatch, listBooking]);

  const [image, setImage] = useState({
    imgUrl: "",
  });

  // const handleChange = (e) => {
  //   setImage({
  //     ...image,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editBookingAction(image, lastBooking));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success Success Upload",
      showConfirmButton: false,
      timer: 3000,
    });
    history.push("/");
  };

  console.log("image", image.imgUrl);
  return (
    <div>
      <Header />
      {lastBooking !== undefined || listBooking.length > 0 || lastBooking !== undefined ? (
        <div>
          <Row className="container-row-bookingsayauser">
            <Col md="auto">
              <SidebarUser />
            </Col>
            <Col className="container-bookingsayauser">
              <h1>Pesanan Baru</h1>
              <Card className="container-card-bookingsayauser">
                <div style={{ overflow: "auto" }}>
                  <p>Detail</p>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Nama</th>
                        <th>Tanggal Pertemuan</th>
                        <th>Jenis</th>
                        <th>Tempat</th>
                        <th>Profesi</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={lastBooking.profileId.imgUrl}
                            className="foto-bookingsayauser"
                            alt="ImageProfessional"
                          />
                        </td>
                        <td>{lastBooking.profileId.userId.fullName}</td>
                        <td>
                          {moment(
                            lastBooking.profileId.startDateAvailable
                          ).format("L")}
                        </td>
                        <td>{lastBooking.profileId.serviceId.nameService}</td>
                        <td>{lastBooking.profileId.locationId.nameLocation}</td>
                        <td>{lastBooking.profileId.serviceId.nameService}</td>
                        <td>{lastBooking.status}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div style={{ overflow: "auto" }}>
                  <p>Info</p>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Fee</th>
                        <th>Metode Pembayaran</th>
                        <th>Tanggal Booking</th>
                        <th>Deadline Pembayaran</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Rp {lastBooking.total}</td>
                        <td>BCA 5919111194 - PT Prommet Indonesia</td>
                        <td>17-11-2020</td>
                        <td>18-11-2020</td>
                      </tr>
                    </tbody>
                  </Table>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <p>Upload bukti Pembayaran</p>
                      <ReactFilestack
                        apikey={"ApW8Eq4TGSN69zPGRbKtMz"}
                        onSuccess={(res) => {
                          setImage({
                            ...image,
                            imgUrl: res.filesUploaded[0].url,
                          });
                        }}
                      />
                     <br/> <br/>
                      <Button type="submit">Upload Bukti Transfer</Button>
                    </Form.Group>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <p>Loading</p>
      )}
      <Footer />
    </div>
  );
}

export default BookingSayaUser;
