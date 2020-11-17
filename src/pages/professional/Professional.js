import React, { useEffect } from "react";
import { Row, Button } from "react-bootstrap";
// import { FcSearch } from "react-icons/fc";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Movepage from "../../components/pagination/Movepage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Professional.css";
import { getProfesiById } from "../../redux/action/Profesi.action";

function Professional() {
  const dispatch = useDispatch();
  const detailProfesi = useSelector((state) => state.profesi.professionDetails);
  // console.log(detailProfesi);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProfesiById(id));
    // eslint-disable-next-line
  }, []);

  const handleClick = (id) => {
    history.push(`/detail/${id}`);
  };

  // const [input, setInput] = useState("");
  // const [search, setSearch] = useState([]);

  // const handlechange = (e) => {
  //   e.preventDefault();
  //   setInput(e.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (input.length > 0) {
  //     let cari = detailProfesi.profileId.filter((i) => {
  //       return i.userId.fullName === input;
  //     });

  //     console.log(cari);
  //   }
  // };

  return (
    <div>
      <Header />
      <div className="containerprofessional">
        {/* Search Bar */}
        {/* <div>
          <form onSubmit={handleSubmit}>
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
          </form>
        </div> */}
        {/* <div className="containerfilter"> */}
        {/* Filter Lokasi */}
        {/* <div className="box">
            <select>
              <option>---</option>
              <option>Jakarta</option>
              <option>Depok</option>
              <option>Bekasi</option>
              <option>Tangerang</option>
            </select>

          </div>
          {/* Filter harga */}
        {/* <div className="box">
          <h5>Cari berdasarkan harga</h5>

            <select>
              <option>---</option>
              <option>Termurah</option>
              <option>Termahal</option>
            </select>
          </div> */}

        {/* Filter kategori */}
        {/* <div className="box">
          <h5>Cari berdasarkan pekerjaan</h5>

            <select>
              <option>---</option>
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
                    src={people.imgUrl}
                    height={144}
                    width={179}
                  />
                  <div className="card-body">
                    <h5 style={{ fontSize: "20px", fontWeight: "900" }}>
                      {people.userId.fullName}
                    </h5>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "blue",
                      }}
                    >
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
        {/* <div className="moveprofessional">
          <Movepage />
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Professional;
