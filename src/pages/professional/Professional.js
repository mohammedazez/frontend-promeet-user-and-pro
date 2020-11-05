import React, { useState } from "react";
import "./Professional.css";
import { Row, Button } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { FcSearch } from "react-icons/fc";

function Professional() {
  const [input, setInput] = useState("");

  let professional = [
    {
      img:
        "https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg",
      nama: "Angelia Jolie",
      pekerjaan: "Software Engineer",
      lokasi: "Jakarta",
      tarif: "1.000.000",
    },
    {
      img:
        "https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/christina-wocintechchat-com-c-mgSuxqpzA-unsplash_fxgwou.jpg",
      nama: "Olivia Aurora",
      pekerjaan: "Software Engineer",
      lokasi: "Jakarta",
      tarif: "1.500.000",
    },
    {
      img:
        "https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/christina-wocintechchat-com-kXfBDl0fR1E-unsplash_isuar7.jpg",
      nama: "Emma Lucy",
      pekerjaan: "Software Engineer",
      lokasi: "Jakarta",
      tarif: "2.000.000",
    },
    {
      img:
        "https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/christina-wocintechchat-com-lFntEHwQvi4-unsplash_hh8cjk.jpg",
      nama: "Sophia Nova",
      pekerjaan: "Software Engineer",
      lokasi: "Jakarta",
      tarif: "2.500.000",
    },
    {
      img:
        "https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/science_xmqpsf.jpg",
      nama: "Elon Musk",
      pekerjaan: "Ceo Tesla",
      lokasi: "Amerika Serikat",
      tarif: "100.000.000",
    },
    {
      img:
        "https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/william_oejs47.jpg",
      nama: "William Tanuwijaya",
      pekerjaan: "Ceo Tokopedia",
      lokasi: "Jakarta",
      tarif: "Rp 5.000.000",
    },
    {
      img:
        "https://res.cloudinary.com/def4tydoe/image/upload/v1604551712/people/pengusaha_p5lzgm.jpg",
      nama: "Sandiaga Uno",
      pekerjaan: "Pengusaha",
      lokasi: "Jakarta",
      tarif: "12.000.000",
    },
    {
      img:
        "https://res.cloudinary.com/def4tydoe/image/upload/v1604551714/people/hukum_vtx1pe.jpg",
      nama: "Hotman Paris",
      pekerjaan: "Pengacara",
      lokasi: "Jakarta",
      tarif: "100.000.000",
    },
  ];

  const handlechange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    professional = professional.filter((i) => {
      return i.nama.toLowerCase().match(input);
    });
  }

  return (
    <div className="container-professional">
      {/* Search Bar */}
      <div>
        <div className="search">
          <Button>
            <i className="icon">
              <FcSearch />
            </i>
          </Button>
          <input
            type="text"
            className="searchTerm"
            placeholder="Cari berdasarkan nama"
            onChange={handlechange}
            value={input}
          />
        </div>
      </div>

      <div className="container-filter">
        {/* Filter Lokasi */}
        <div className="box">
          <select>
            <option>Jakarta</option>
            <option>Depok</option>
            <option>Bekasi</option>
            <option>Bogor</option>
            <option>Tangerang</option>
          </select>
        </div>
        {/* Filter harga */}
        <div className="box">
          <select>
            <option>Termurah</option>
            <option>Termahal</option>
          </select>
        </div>
        {/* Filter kategori */}
        <div className="box">
          <select>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Fullstack Developer</option>
          </select>
        </div>
      </div>
      <div className="tulisan-penanda-professional">
        <p>Home</p>
        <IoIosArrowForward />
        <p>Software Engineer</p>
      </div>
      <h1 className="judul-professional">Software Engineer</h1>
      <Row className="row-responsive">
        {professional.map((people, index) => (
          <div className="container-professional-list" key={index}>
            <div className="card">
              <img
                alt={"users here"}
                src={people.img}
                height={144}
                width={179}
              />
              <div className="card-body">
                <h5 className="card-title">{people.nama}</h5>
                <p>
                  {people.pekerjaan} di {people.lokasi}
                </p>
                <br />
                <p>Rp {people.tarif} Per/1 Jam</p>
                <button className="btn btn-sm follow ">Kirim Pertemuan</button>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
}

export default Professional;
