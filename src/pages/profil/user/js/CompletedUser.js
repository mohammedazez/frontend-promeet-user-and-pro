import React, { useState, useEffect } from "react";
import "../css/CompletedUser.css";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import SidebarUser from "./SidebarUser";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProfileDetailAction } from "../../../../redux/action/Professional.action";

function CompletedUser() {
  const dispatch = useDispatch();
  const profiledetail = useSelector((state) => state.professional.data);
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
        <Row className="container-row-completeduser">
          <Col md="auto">
            <SidebarUser />
          </Col>
          <Col className="container-completeduser">
            <h1>Completed</h1>
            <Card className="container-card-completeduser">
              <div style={{ overflow: "auto" }}>
                <p>Pembayaran Sukses</p>
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
                      <th>Telp Konsultan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={picture}
                          alt="fotobookingsaya"
                          className="foto-completeduser"
                        />
                      </td>
                      <td>{userid}</td>
                      <td>{date}</td>
                      <td>{time}</td>
                      <td>{service}</td>
                      <td>{location}</td>
                      <td>{profesi}</td>
                      <td>08586856858</td>
                    </tr>
                  </tbody>
                </Table>
                <h4>Note:</h4>
                <p>*Mohon jangan menyebar luaskan kontak milik Konsultan. </p>
                <p>*Mohon datang ke tempat jam 07:30 WIB.</p>
                <p>
                  *Jika belum datang sebelum jam 09:00 WIB Maka akan di cancel.{" "}
                </p>
                <Button>Cek Alamat Lengkap</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default CompletedUser;
