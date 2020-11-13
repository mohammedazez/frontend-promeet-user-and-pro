import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderProduk.css";
import Slider from "react-slick";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SliderProduk() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

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
          slidesToScroll: 2,
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
          <Link to="/professional" style={{ textDecoration: "none" }}>
            Lihat semua
          </Link>
        </Col>
      </Row>
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current) => (
            <div className="out" key={current.id} >
              <div className="cardsliderproduk">
                <img
                  alt={"users here"}
                  src={`https://source.unsplash.com/random/${current.id}`}
                  height={200}
                  width={179}
                />
                <div className="card-body">
                  <h5 className="card-title">{current.username}</h5>
                  <p>Software Engineer di Jakarta</p>
                  
                  <p>Rp 1.000.000 /1 Jam</p>
                  <Button className="btn btn-sm tombol-sliderproduk">
                    <Link
                      to="/detail"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Kirim Pertemuan
                    </Link>
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
