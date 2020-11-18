import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getProfileDetailAction } from "../../redux/action/Professional.action";
import { getUserInfoAction } from "../../redux/action/User.action";

// Components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// CSS
import "./Confirmation.css";

// Bootstrap
import { Image, Button, Container, Row, Col } from "react-bootstrap";

function Confirmation() {
  const dispatch = useDispatch();
  const profiledetail = useSelector((state) => state.professional.data);
  const member = useSelector((state) => state.user.data);
  const [userid, setUserid] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (profiledetail === undefined) {
      dispatch(getProfileDetailAction(id));
    } else {
      setPrice(profiledetail.price);
      setUserid(member.fullName);
    }
    // eslint-disable-next-line
  }, [profiledetail, dispatch]);

  useEffect(() => {
    if (member === undefined) {
      dispatch(getUserInfoAction());
    } else {
      setUserid(member.fullName);
    }
    // eslint-disable-next-line
  }, [member, dispatch]);

  return (
    <div>
      <Header />
      <div className="success">
        <Container className="totaltagihan">
          <Row>
            <Col>
              <div className="totag">
                <p>Total Tagihan</p>
              </div>
              <div>
                <p>
                  <span>Rp {price}</span>
                </p>
              </div>
              <div className="metodepembayaran">
                <p>Nama Pemesan</p>
              </div>
              <h1>{userid}</h1>
            </Col>
          </Row>
        </Container>
        <Container className="successbtn">
          <Row>
            <Col>
              <div>
                <Image
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1604844769/success_fcpipg.png"
                  alt="thankyou"
                  className="img-success"
                />
              </div>
              <div>
                <h3>Terima kasih sudah pesan di Promeet.com</h3>
                {/* <Button
                  style={{ border: "none" }}
                  className="btnconfirmation"
                  onClick={handleClick}
                > */}
                <Link
                  to="/mybookingsaya/user"
                  style={{ textDecoration: "none" }}
                >
                  <Button>
                    <span>Cek Pesanan Saya</span>
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Confirmation;
