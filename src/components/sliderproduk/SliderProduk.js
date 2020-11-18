import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderProduk.css";
import Slider from "react-slick";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfileAction } from "../../redux/action/Allprofile.action";

function SliderProduk() {
  const dispatch = useDispatch();
  const profilePro = useSelector((state) => state.semuaprofile);
  const { listprofile } = profilePro;

  const history = useHistory();
  // const [name, setName] = useState("");
console.log('profile', profilePro)
  const handleClick = (id) => {
    history.push(`/detail/${id}`);
  };

  // useEffect(() => {
  //   if (listprofile.length === 0) {
  //     dispatch(getProfileAction());
  //   } else {
  //     setName(listprofile.userId.fullName);
  //   }
  //   // eslint-disable-next-line
  // }, [listprofile, dispatch]);

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-sliderproduk">
      <h1 className="judul-sliderproduk">Professional terbaik kami</h1>
      <Row>
        <Col className="kalimat-sliderproduk">Orang yang menarik buat kamu</Col>
        <Col className="lihatsemua">
          <Link to="/allprofile" style={{ textDecoration: "none" }}>
            Lihat semua
          </Link>
        </Col>
      </Row>
     
      {listprofile.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {listprofile.map((profile, index) => (
            <div className="out" key={index}>
              <div className="cardsliderproduk">
                <img
                  alt={"users here"}
                  src={profile.imgUrl}
                  className="img-sliderproduk"
                />
                <div className="card-body">
                  <h5 style={{ fontSize: "15px", fontWeight: "900" }}>
                    {profile.userId.fullName}
                  </h5>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    {profile.profesiId.nameProfesi} di{" "}
                    {profile.locationId.nameLocation}
                  </p>
                  <br />
                  <p>Rp {profile.price} /1 Jam</p>
                  <Button
                    className="btn btn-sm tombol-sliderproduk"
                    onClick={() => handleClick(profile._id)}
                  >
                    Kirim Pertemuan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SliderProduk;
