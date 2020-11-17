import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { getProfileDetailAction } from "../../redux/action/Professional.action";
import { dataTransferAction } from "../../redux/action/Transfer.action";

// Components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// CSS
import "./Confirmation.css";

// Bootstrap
import { Image, Button, Container, Row, Col } from "react-bootstrap";

function Confirmation() {
  const dispatch = useDispatch();
  let history = useHistory();
  const profiledetail = useSelector((state) => state.professional.data);
  const datatransfer = useSelector((state) => state.transfer.transferMethod);
  const [price, setPrice] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (profiledetail === undefined) {
      dispatch(getProfileDetailAction(id));
    } else {
      setPrice(profiledetail.price);
    }
    // eslint-disable-next-line
  }, [profiledetail, dispatch]);

  useEffect(() => {
    dispatch(dataTransferAction());
  }, [dispatch]);

  function handleClick() {
    try {
      history.push("/bookingsaya/user");
    } catch (error) {
      alert(error);
    }
  }
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
                <p>Metode Pembayaran</p>
              </div>
              <div className="marbot">
                {datatransfer.map((transfer, index) => (
                  <div key={index}>
                    <p>{transfer.nameMethod}</p>
                    <p>{transfer.numberRek}</p>
                  </div>
                ))}
              </div>
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
                <Link to="/bookingsaya/user" style={{ textDecoration: "none" }}>
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
