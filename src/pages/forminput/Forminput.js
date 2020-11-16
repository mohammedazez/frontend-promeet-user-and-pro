import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getUserInfoAction,
  getEditProfessional,
} from "../../redux/action/User.action";
import { getLocationAction } from "../../redux/action/Location.action";
import { getServiceAction } from "../../redux/action/Service.actions";
import { getProfesiAction } from "../../redux/action/Profesi.action";
// import DatePicker from "react-datepicker";
import "./Forminput.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import { Form, Button } from "react-bootstrap";

function Forminput() {
  const dispatch = useDispatch();
  const history = useHistory();

  const detailProfile = useSelector((state) => state.user.data);
  // const detailProfilePro =  useSelector((state) => state.user.data.profileId)

  useEffect(() => {
    if (detailProfile.length === 0) {
      dispatch(getUserInfoAction());
    } else {
      setProfile(detailProfile);
    }
  }, [dispatch, detailProfile]);

  const locate = useSelector((state) => state.location.listLocation);
  const service = useSelector((state) => state.service.listService);
  const listProfesi = useSelector((state) => state.profesi.profession);

  console.log("locate", locate);
  console.log("service", service);
  console.log("listProfesi", listProfesi);

  useEffect(() => {
    if (
      locate.length === 0 ||
      service.length === 0 ||
      listProfesi === undefined
    ) {
      dispatch(getLocationAction());
      dispatch(getServiceAction());
      dispatch(getProfesiAction());
    }
  }, [dispatch, locate, service, listProfesi]);

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    price: "",
    endDateAvailable: new Date(),
    numberPhone: "",
    description: "",
    locationId: "",
    profesiId: "",
    timeAvailable: new Date().getHours(),
  });

  // const handleChange = (e) => {
  //   setProfile({
  //     ...profile,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    dispatch(getEditProfessional(profile, detailProfile, event));
    history.push("/");
  };
  console.log("detail di componen", detailProfile);
  return (
    <div>
      <Header />

      <div className="container-forminput">
        <h1 className="judulutama-form">
          Berikan pengalaman terbaik untuk orang yang membutuhkan di kota anda
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
          />
          <label htmlFor="">Nama Lengkap</label>
          <br />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            name="numberPhone"
            value={profile.numberPhone}
            onChange={handleChange}
          />
          <label htmlFor="">No Hp</label>
          <br />
          <input
            type="number"
            name="price"
            value={profile.price}
            onChange={handleChange}
          />
          <label htmlFor="">Harga per Jam</label>
          <br />
          <input
            type="text"
            name="description"
            value={profile.description}
            onChange={handleChange}
          />
          <label htmlFor="">Deskripsi</label>
          <br />
          <input
            type="date"
            name="endDateAvailable"
            value={profile.endDateAvailable}
            onChange={handleChange}
          />
          <label htmlFor="">Tanggal Akhir</label>
          <br />
          <input
            type="date"
            name="timeAvailable"
            value={profile.timeAvailable}
            onChange={handleChange}
          />
          <label htmlFor="">Waktu</label>
          <br />
          <select
            name="locationId"
            value={profile.locationId}
            onChange={handleChange}
          >
            {locate.length !== 0 ? (
              locate.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.nameCity}
                </option>
              ))
            ) : (
              <p>Loading</p>
            )}
          </select>
          <label htmlFor="">Lokasi</label>
          <br />
          <select
            name="serviceId"
            value={profile.serviceId}
            onChange={handleChange}
          >
            {service.length !== 0 ? (
              service.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.nameService}
                </option>
              ))
            ) : (
              <p>Loading</p>
            )}
          </select>
          <label htmlFor="">Jasa Layanan</label>
          <br />

          <select
            name="profesiId"
            value={profile.profesiId}
            onChange={handleChange}
          >
            {listProfesi.length !== 0 ? (
              listProfesi.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.nameProfesi}
                </option>
              ))
            ) : (
              <p>Loading</p>
            )}
          </select>
          <label htmlFor="">Pilihan Profesi</label>
          <br />

          <br />

          <button>update</button>
        </form>

        {/* <Form onSubmit={handleSubmit} >

          <p className="judulform">Upload Foto profil anda :</p>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Nama Lengkap :</p>
            <Form.Control
            name="fullName"
              type="namalengkap"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              size="lg"
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Email :</p>
            <Form.Control type="email" name="email" value={profile.email} 
            onChange={handleChange} placeholder="Email" size="lg" />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Pekerjaan :</p>
            <Form.Control type="date" value={profile.timeAvailable} format = {"HH:mm:ss"} placeholder="Pekerjaan" size="lg" />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Jasa yang ditawarkan:</p>
            <Form.Control
              type="jasa"
              placeholder="Jasa apa yang ingin ditawarkan"
              size="lg"
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Tarif pertemuan /Hitungan perjam :</p>
            <Form.Control
              type="tarif"
              placeholder="Tarif meeting dihitung berdasarkan per jam"
              size="lg"
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">No.Handphone :</p>
            <Form.Control
              type="phone"
              name="numberPhone"
              value={profile.numberPhone}
              onChange={handleChange}
              placeholder="Nomor Handphone"
              size="lg"
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.SelectCustomSizeLg"
            className="grupform"
          >
            <p className="judulform">Lokasi :</p>
            <Form.Control as="select" size="lg" custom>
              <option>Jakarta</option>
              <option>Depok</option>
              <option>Bekasi</option>
              <option>Tangerang</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.SelectCustomSizeLg"
            className="grupform"
          >
            <p className="judulform">Jadwal Tersedia :</p>
      <Form.Control></Form.Control> 
    <div>
    </div>
    <Form.Control>
            </Form.Control>
            <Form.Control as="select" size="lg" custom>
         
              <option>08:00 WIB</option>
              <option>10:00 WIB</option>
              <option>12:00 WIB</option>
              <option>14:00 WIB</option>
              <option>18:00 WIB</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.SelectCustomSizeLg"
            className="grupform"
          >
            <p className="judulform">Tanggal Tersedia :</p>
            <Form.Control as="select" size="lg" custom>
              <option>08-11-2020</option>
              <option>09-11-2020</option>
              <option>10-11-2020</option>
              <option>11-11-2020</option>
              <option>12-11-2020</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Tempat :</p>
            <Form.Control
              type="tarif"
              placeholder="Tempat untuk meeting"
              size="lg"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Isi alamat lengkap tempat untuk meeting"
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Pengalaman :</p>
            <Form.Control
              type="tarif"
              placeholder="Pengalaman anda selama bekerja"
              size="lg"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <p className="judulform">Tentang Anda</p>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tulis Tentang anda"
            />
          </Form.Group>
          <Button onSubmit={handleSubmit} >Daftar Jadi Konsultan</Button>

          <Form.Group>
            <p className="judulform">Upload KTP anda</p>
            <Form.File id="exampleFormControlFile1" />
          </Form.Group>
        </Form> */}
      </div>
      <Footer />
    </div>
  );
}

export default Forminput;
