import React, { useState, useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Movepage from "../../components/pagination/Movepage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Professional.css";
import { getProfesiById } from "../../redux/action/Profesi.action";

function Professional() {
  const dispatch = useDispatch();
  const detailProfesi = useSelector((state) => state.profesi.professionDetails);
  // console.log("ini data detail profesi di view", detailProfesi);
  // console.log("isi profil", detailProfesi.profileId);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProfesiById(id));
    // eslint-disable-next-line
  }, []);

  const handleClick = (id) => {
    history.push(`/detail/${id}`);
  };

  const [input, setInput] = useState("");

  const handlechange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // if (input.length > 0) {
  //   professional = professional.filter((i) => {
  //     return i.pekerjaan.toLowerCase().match(input);
  //   });
  // }

  return (
    <div>
      <Header />
      <div className="containerprofessional">
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
              placeholder="Cari berdasarkan pekerjaan"
              onChange={handlechange}
              value={input}
            />
          </div>
        </div>

        <div className="containerfilter">
          {/* Filter Lokasi */}
          <div className="box">
            <select>
              <option>Jakarta</option>
              <option>Depok</option>
              <option>Bekasi</option>
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
        <div className="tulisanpenandaprofessional">
          <p>Home</p>
          <p>{" > "}</p>
          <p>{detailProfesi.nameProfesi}</p>
        </div>
        <h1 className="tulisanpenandaprofessional">
          {detailProfesi.nameProfesi}
        </h1>
        <Row className="rowresponsive">
          {detailProfesi.profileId !== undefined ? (
            detailProfesi.profileId.map((people, index) => (
              <div className="containerprofessionallist" key={index}>
                <div className="cardprofessional">
                  <img
                    alt={"users here"}
                    src={people.img}
                    height={144}
                    width={179}
                  />
                  <div className="card-body">
                    {/* <h5 className="cardtitle">{people.userId.fullName}</h5> */}
                    <p>
                      {detailProfesi.nameProfesi} di
                      {people.locationId.nameLocation}
                    </p>
                    <br />
                    <p>Rp {people.price} Per/1 Jam</p>
                    <Button
                      className="btn btn-sm tombol-professional"
                      onClick={() => handleClick(people._id)}
                    >
                      Kirim Pertemuan
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </Row>
        <div className="moveprofessional">
          <Movepage />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Professional;
