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
  const ProfilPro = useSelector((state) => state.semuaprofile);
  const { listprofile } = ProfilPro;
  const history = useHistory();
  // const [name, setName] = useState("");

  const handleClick = (id) => {
    history.push(`/detail/${id}`);
  };

  // useEffect(() => {
  //   if (listprofile === undefined) {
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
                  height={144}
                  width={179}
                />
                <div className="card-body">
                  <h5 className="card-title">{profile.userId.fullName}</h5>
                  {/* <p>{profile.profesiId.nameProfesi} di Jakarta</p> */}
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
