import React, { useEffect } from "react";
// import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getBookingAction } from "../../../../redux/action/Booking.action";
import "../css/CompletedPro.css";
import { Row, Col, Card, Table, Button, Modal } from "react-bootstrap";
import SidebarPro from "./SidebarPro";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img
          src="https://res.cloudinary.com/def4tydoe/image/upload/v1604923749/Instinct_psvxgg.jpg"
          alt="kepoprofiluser"
          style={{
            maxWidth: "100%",
            width: "450px",
            height: "auto",
          }}
        />
      </Modal.Header>
      <Modal.Body>
        <h4>Nama: The girl of snow</h4>
        <h4>Alamat : Jakarta</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Tutup</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CompletedPro() {
  const dispatch = useDispatch();
  const member = useSelector((state) => state.user.data);
  // const profiledetail = useSelector((state) => state.professional.data);
  const listBooking = useSelector((state) => state.bookingReducers.data);

  console.log("list booking", listBooking);
  const newBooking = listBooking.filter(
    (item) => item.userId && item.userId._id === member._id
  );
  useEffect(() => {
    dispatch(getBookingAction());

    // eslint-disable-next-line
  }, [dispatch]);

  console.log("lastBooking", newBooking);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Header />
      <div>
        <Row className="container-row-completedpro">
          <Col md="auto">
            <SidebarPro />
          </Col>
          <Col className="container-completedpro">
            <h1>Pesanan sudah dibayar oleh user</h1>
            <Card className="container-card-completedpro">
              <div style={{ overflow: "auto" }}>
                <p>Pembayaran Sukses</p>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Nama Customer</th>
                      <th>Tanggal Pertemuan</th>
                      <th>Jenis</th>
                      <th>Durasi</th>
                    </tr>
                  </thead>
                  {newBooking !== undefined && newBooking.length > 0 ? (
                    newBooking.map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td></td>
                          <td>Meeting with Angelia</td>
                          <td>02-11-2020</td>
                          <td>08:00 WIB</td>
                          <td>Konsultasi</td>
                          <td>Coworking Space</td>
                          <td>2 Jam</td>
                          <td>08586856858</td>
                        </tr>
                      </tbody>
                    ))
                  ) : (
                    <p>test</p>
                  )}
                </Table>
                <h4>Note:</h4>
                <p>*Mohon jangan menyebar luaskan kontak milik User. </p>
                <p>*Mohon datang ke tempat jam 07:30 WIB.</p>
                <p>
                  *Jika belum datang sebelum jam 09:00 WIB Maka akan di cancel.
                </p>
                <Button onClick={() => setModalShow(true)}>
                  Cek Profil User
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default CompletedPro;
