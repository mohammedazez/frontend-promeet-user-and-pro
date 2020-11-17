import React, { useState, useEffect } from "react";
import "../css/BookingSayaUser.css";
import { Row, Col, Card, Table, Form } from "react-bootstrap";
import SidebarUser from "./SidebarUser";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProfileDetailAction } from "../../../../redux/action/Professional.action";
import ReactFilestack from "filestack-react";

function BookingSayaUser() {
  const dispatch = useDispatch();
  const profiledetail = useSelector((state) => state.professional.data);
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [userid, setUserid] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [profesi, setProfesi] = useState("");

  useEffect(() => {
    if (profiledetail === undefined) {
      dispatch(getProfileDetailAction());
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
  return (
    <div>
      <Header />
      <div>
        <Row className="container-row-bookingsayauser">
          <Col md="auto">
            <SidebarUser />
          </Col>
          <Col className="container-bookingsayauser">
            <h1>pesanan Baru</h1>
            <Card className="container-card-bookingsayauser">
              <div style={{ overflow: "auto" }}>
                <p>Detail</p>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Nama</th>
                      <th>Tanggal Pertemuan</th>
                      <th>Jam</th>
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
                          src={picture}
                          className="foto-bookingsayauser"
                          alt="fotobookingsaya"
                        />
                      </td>
                      <td>{userid}</td>
                      <td>{date}</td>
                      <td>{time} WIB</td>
                      <td>{service}</td>
                      <td>{location}</td>
                      <td>{profesi}</td>
                      <td>Belum dibayar</td>
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
                      <td>Rp {price}</td>
                      <td>BCA 5919111194 - PT Prommet Indonesia</td>
                      <td>02-11-2020</td>
                      <td>03-11-2020</td>
                    </tr>
                  </tbody>
                </Table>
                <Form>
                  <Form.Group>
                    <p>Upload bukti Pembayaran</p>
                    <ReactFilestack
                      apikey={"ApW8Eq4TGSN69zPGRbKtMz"}
                      onSuccess={(res) => console.log(res)}
                    />
                  </Form.Group>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default BookingSayaUser;
