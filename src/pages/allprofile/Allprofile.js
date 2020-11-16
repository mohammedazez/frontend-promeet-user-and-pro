import React, { useEffect } from "react";
import { Row, Button } from "react-bootstrap";
// import { FcSearch } from "react-icons/fc";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Allprofile.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfileAction } from "../../redux/action/Allprofile.action";

function Allprofile() {
  const dispatch = useDispatch();
  const ProfilPro = useSelector((state) => state.semuaprofile);
  const { listprofile, loading, error } = ProfilPro;
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/detail/${id}`);
  };

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="containerprofessional">
        {/* Search Bar */}
        {/* <div>
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
            />
          </div>
        </div> */}

        {/* <div className="containerfilter"> */}
        {/* Filter Lokasi */}
        {/* <div className="box">
            <select>
              <option>Jakarta</option>
              <option>Depok</option>
              <option>Bekasi</option>
              <option>Tangerang</option>
            </select>
          </div> */}
        {/* Filter harga */}
        {/* <div className="box">
            <select>
              <option>Termurah</option>
              <option>Termahal</option>
            </select>
          </div> */}
        {/* Filter kategori */}
        {/* <div className="box">
            <select>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Fullstack Developer</option>
            </select>
          </div>
        </div> */}
        <div className="tulisanpenandaprofessional">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>{" > "}</p>
          <p>Semua Professional</p>
        </div>
        <h1 className="tulisanpenandaprofessional">Semua Professional</h1>
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <Row className="rowresponsive">
            {listprofile.map((profile, index) => (
              <div className="containerprofessionallist" key={index}>
                <div className="cardprofessional">
                  <img
                    alt={"users here"}
                    src={profile.imgUrl}
                    height={144}
                    width={179}
                  />
                  <div className="card-body">
                    <h5 style={{ fontSize: "20px", fontWeight: "900" }}>
                      {profile.userId.fullName}
                    </h5>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "blue",
                      }}
                    >
                      {profile.profesiId.nameProfesi} di{" "}
                      {profile.locationId.nameLocation}
                    </p>
                    <br />
                    <p>Rp {profile.price} Per/1 Jam</p>
                    <Button
                      className="btn btn-sm tombol-professional"
                      onClick={() => handleClick(profile._id)}
                    >
                      Kirim Pertemuan
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Allprofile;
