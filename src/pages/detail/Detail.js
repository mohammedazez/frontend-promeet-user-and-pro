import React, { Fragment } from "react";
import "./Detail.css";
import SliderProduk from "../../components/sliderproduk/SliderProduk";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { Row, Col, Button, Tabs, Tab } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { getProfessionalById } from "../../redux/action/Professional.action";

function DetailProduk() {
  // const dispatch = useDispatch();
  // const detailProfile = useSelector((state) => state.professional);
  // const { id } = useParams();
  // useEffect(() => {
  //   dispatch(getProfessionalById(id));
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Fragment>
      <Header />
      <div className="container-detail">
        <div className="tulisan-penanda-detail">
          <p>Home</p>
          <p>{">"}</p>
          <p>Jakarta</p>
          <p>{">"}</p>
          <p>Angelia Jolie</p>
        </div>
        <Row className="responsive-detail">
          <Col>
            <img
              className="img-professional"
              src="https://res.cloudinary.com/def4tydoe/image/upload/v1604551713/people/womentech_b7df5h.jpg"
              alt="imgprodetail"
            />
          </Col>
          <Col>
            <h1 className="nama-detail">Angelia Jolie</h1>
            <h2 className="pekerjaan-detail">Software Engineer dari Jakarta</h2>
            <p className="harga-detail">Rp 1.000.000 /Jam</p>
            <Button className="button-detail">
              <Link
                to="/booking"
                style={{ textDecoration: "none", color: "white" }}
              >
                Kirim Pertemuan
              </Link>
            </Button>
            <Row className="container-filter-detail">
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Pilihan Jam Tersedia :</p>
                  <select>
                    <option>08:00 WIB</option>
                    <option>10:00 WIB</option>
                    <option>13:00 WIB</option>
                    <option>18:00 WIB</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">
                    Pilihan Tanggal Tersedia:
                  </p>
                  <select>
                    <option>18-11-2020</option>
                    <option>19-11-2020</option>
                    <option>20-11-2020</option>
                    <option>21-11-2020</option>
                    <option>22-11-2020</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row className="container-filter-detail">
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Pilihan Jasa :</p>
                  <select>
                    <option>Konsultasi</option>
                    <option>Belajar React Js</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="box-detail">
                  <p className="judul-filter-detail">Tempat Meeting :</p>
                  <select>
                    <option>Coworking Space</option>
                    <option>Cafe</option>
                    <option>Kantor</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="container-deskripsi-detail">
        <div style={{ backgroundColor: "#30F5FF" }}>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="tentang" title="Tentang">
              <p>
                Hi, let me introduce my self my full name is Angeia Jolie I am a
                Software Engineer I specialize in a variety of skills, namely
                the development what technology that i use MERN stack MonggoDB,
                Express JS, React Js, and Node JS, state, Software engineering
                concepts, design patterns, and algorithms, UI & UX to code,
                Testing / Debugging and I am ready to collaborate with the team.
                My passion is a combination of business and information
                technology.
              </p>
            </Tab>
            <Tab eventKey="pengalaman" title="Pengalaman">
              <ul>
                <li>Software Engineer at Google 2017-2019</li>
                <li>Software Engineer at Microsoft 2019-2020</li>
                <li>Software Engineer at Microsoft 2019-2020</li>
              </ul>
            </Tab>
            <Tab eventKey="term" title="Terms and Condition">
              <p>
                <ul>
                  <li>
                    1.Untuk menjamin keamanan bersama kami terlebih dahulu
                    meminta data pribadi yang diperlukan dari user.
                  </li>
                  <li>
                    <h5>Tetap patuhi peraturan protokol kesehatan</h5>
                  </li>
                  <li> 1. Tetap waspada dan tidak panik.</li>
                  <li>
                    2. Hindari keramaian baik itu tempat tertutup maupun tempat
                    terbuka.
                  </li>
                  <li>
                    3. Gunakan masker di mana saja dan kapan saja bahkan dalam
                    ruangan.
                  </li>
                  <li>
                    4. Ciptakan ruangan dengan ventilasi yang baik seperti,
                    membuka jendela sesering mungkin.
                  </li>
                  <li>
                    5. Tetap jaga kebersihan tangan serta hindari menyentuh
                    bagian wajah sebelum mencuci tangan.
                  </li>
                  <li>
                    6. Selalu terapkan jaga jarak pada aktivitas sehari-hari.
                  </li>
                </ul>
              </p>
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
