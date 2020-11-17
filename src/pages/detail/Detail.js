import React, { Fragment, useEffect, useState } from "react";
// import library momentjs
import moment from "moment";
import "./Detail.css";
import SliderProduk from "../../components/sliderproduk/SliderProduk";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Button, Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileDetailAction } from "../../redux/action/Professional.action";

function DetailProduk() {
  const dispatch = useDispatch();
  const profiledetail = useSelector((state) => state.professional.data);

  const [deskripsi, setDeskripsi] = useState("");
  const [price, setPrice] = useState("");
  const [profesi, setProfesi] = useState("");
  const [service, setService] = useState("");
  const [datestart, setDatestart] = useState("");
  const [dateend, setDateend] = useState("");
  // const [time, setTime] = useState("");
  const [userid, setUserid] = useState("");
  const [picture, setPicture] = useState("");
  const [pengalaman, setPengalaman] = useState();
  const [namelocation, setNamelocation] = useState("");
  const [detaillocation, setDetaillocation] = useState("");
  const [namecity, setNamecity] = useState("");

  const { id } = useParams();
  useEffect(() => {
    if (profiledetail === undefined) {
      dispatch(getProfileDetailAction(id));
    } else {
      setUserid(profiledetail.userId.fullName);
      setProfesi(profiledetail.profesiId.nameProfesi);
      setService(profiledetail.serviceId.nameService);
      setPrice(profiledetail.price);
      setDatestart(profiledetail.startDateAvailable);
      setDateend(profiledetail.endDateAvailable);
      // setTime(profiledetail.timeAvailable);
      setDeskripsi(profiledetail.description);
      setPicture(profiledetail.imgUrl);
      setPengalaman(profiledetail.experience);
      setNamelocation(profiledetail.locationId.nameLocation);
      setDetaillocation(profiledetail.locationId.detailLocation);
      setNamecity(profiledetail.locationId.nameCity);
    }
    // eslint-disable-next-line
  }, [profiledetail, dispatch]);

  console.log("profile", profiledetail);
  moment().format("MMM Do YY");

  const newDate = moment(Date.time);

  console.log("tanggal", newDate.format("L"));

  return (
    <Fragment>
      <Header />
      <div className="container-detail">
        <div className="tulisan-penanda-detail">
          <p>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </p>
          <p>{">"}</p>
          <p>{profesi}</p>
          <p>{">"}</p>

          <p>{userid}</p>
        </div>
        <Row className="responsive-detail">
          <Col>
            <img
              className="img-professional"
              src={picture}
              alt="imgprodetail"
            />
          </Col>
          <Col>
            <h1 className="nama-detail">{userid}</h1>
            <h2 className="pekerjaan-detail">
              {profesi} dari {namecity}
            </h2>
            <p className="harga-detail">Rp {price}/Per jam</p>
            {/* Login terlebih dahulu */}
            {!localStorage.getItem("token") ? (
              <Link to="/login">
                <Button
                  variant="contained"
                  color="secondary"
                  className="button-detail"
                >
                  Kirim Pertemuan
                </Button>
              </Link>
            ) : (
              <Link to="/booking">
                <Button
                  variant="contained"
                  color="secondary"
                  className="button-detail"
                >
                  Kirim Pertemuan
                </Button>
              </Link>
            )}
            {/* Login terlebih dahulu */}
            <Row className="container-filter-detail">
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Start Date Available :</p>
                  <select>
                    <option>{datestart} WIB</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">
                    Pilihan Tanggal Tersedia:
                  </p>

                  <select>
                    <option>{newDate.format("L")}</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row className="container-filter-detail">
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Pilihan Jasa :</p>
                  <select>
                    <option>{service}</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Tempat Meeting :</p>
                  <select>
                    <option>
                      {namelocation} - {detaillocation}
                    </option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="container-deskripsi-detail">
        <div style={{ backgroundColor: "#63cfbb" }}>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="tentang" title="Tentang">
              <p>{deskripsi}</p>
            </Tab>
            <Tab eventKey="pengalaman" title="Pengalaman">
              {/* mapping pengalaman */}
              {pengalaman !== undefined ? (
                pengalaman.map((item, index) => (
                  <ul key={index}>
                    <li>
                      {item.nameExperience} Tahun {item.yearExperience}
                    </li>
                  </ul>
                ))
              ) : (
                <h1>loading</h1>
              )}
              {/* mapping pengalaman */}
            </Tab>
            <Tab eventKey="term" title="Terms and Condition">
              <h2>
                Untuk menjamin keamanan bersama kami terlebih dahulu meminta
                data pribadi yang diperlukan dari user.
              </h2>
              <h5>Tetap patuhi peraturan protokol kesehatan</h5>
              <p>1. Tetap waspada dan tidak panik.</p>
              <p>
                2. Hindari keramaian baik itu tempat tertutup maupun tempat
                terbuka.
              </p>
              <p>
                3. Gunakan masker di mana saja dan kapan saja bahkan dalam
                ruangan.
              </p>
              <p>
                4. Ciptakan ruangan dengan ventilasi yang baik seperti, membuka
                jendela sesering mungkin.
              </p>
              <p>
                5. Tetap jaga kebersihan tangan serta hindari menyentuh bagian
                wajah sebelum mencuci tangan.
              </p>
              <p>6. Selalu terapkan jaga jarak pada aktivitas sehari-hari.</p>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div>
        <SliderProduk />
      </div>
      <Footer />
    </Fragment>
  );
}

export default DetailProduk;
