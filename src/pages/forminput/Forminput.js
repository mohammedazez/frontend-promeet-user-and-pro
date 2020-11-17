import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

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
import ReactFilestack from "filestack-react";
import { Form, Button } from "react-bootstrap";

function Forminput() {
  const dispatch = useDispatch();
  // const history = useHistory();

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

  // console.log("locate", locate);
  // console.log("service", service);
  // console.log("listProfesi", listProfesi);

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
    userId: detailProfile._id,
    fullName: "",
    email: "",
    price: "",
    imgUrl: "",
    imgKtp: "",
    startDateAvailable: new Date(),
    endDateAvailable: new Date(),
    numberPhone: "",
    price: "",
    description: "",
    // timeAvailable: "",
    startDateAvailable: "",
    // endDateAvailable: "",
    locationId: "",
    profesiId: "",
    serviceId: "",
    nameExperience: "",
    yearExperience: "",
    imgUrl: "",
    imgKtp: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    dispatch(getEditProfessional(profile, detailProfile, event));
    // history.push("/");
  };
  console.log("profile di componen", profile);
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
            type="text"
            name="imgurl"
            value={profile.imgUrl}
            onChange={handleChange}
          />
          <label htmlFor="">ImageURL</label>
          <br />
          <input
            type="text"
            name="imgktp"
            value={profile.imgKtp}
            onChange={handleChange}
          />
          <label htmlFor="">ImageKTP</label>
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
            name="startDateAvailable"
            value={profile.startDateAvailable}
            onChange={handleChange}
          />
          <label htmlFor="">Tanggal mulai</label>
          <br />
          <input
            type="date"
            name="endDateAvailable"
            value={profile.endDateAvailable}
            onChange={handleChange}
          />
          <label htmlFor="">Tanggal akhir</label>
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
            <Form.Control
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email"
              size="lg"
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Profesi yang Dipilih :</p>
            <Form.Control
              as="select"
              size="lg"
              custom
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
            </Form.Control>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Jasa yang ditawarkan:</p>
            <Form.Control
              as="select"
              size="lg"
              custom
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
            </Form.Control>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Tarif pertemuan /Hitungan perjam :</p>
            <Form.Control
              type="number"
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
              type="text"
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
            <Form.Control
              name="locationId"
              value={profile.locationId}
              onChange={handleChange}
              as="select"
              size="lg"
              custom
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
            </Form.Control>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.SelectCustomSizeLg"
            className="grupform"
          >
            <p className="judulform">Tanggal Tersedia :</p>
            <Form.Control
              size="lg"
              custom
              type="date"
              name="startDateAvailable"
              value={profile.startDateAvailable}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlInput1"
            className="grupform"
          >
            <p className="judulform">Pengalaman :</p>
            <Form.Control
              type="text"
              name="nameExperience"
              value={profile.nameExperience}
              placeholder="Pengalaman anda selama bekerja"
              size="lg"
            />
            <Form.Control
              type="text"
              name="yearExperience"
              value={profile.yearExperience}
              placeholder="Tahun"
              size="lg"
            />
          </Form.Group>
          <p className="judulform">Upload Foto profil anda :</p>
          <Form.Group>
            <ReactFilestack
              apikey={"ApW8Eq4TGSN69zPGRbKtMz"}
              onSuccess={(res) => {
                setProfile({
                  ...profile,
                  imgKtp: res.filesUploaded[0].url,
                });
              }}
              ewqa23d5td
            />
            <p className="judulform">Upload KTP anda</p>
            <ReactFilestack
              apikey={"ApW8Eq4TGSN69zPGRbKtMz"}
              onSuccess={(res) => {
                setProfile({
                  ...profile,
                  imgKtp: res.filesUploaded[0].url,
                });
              }}
              ewqa23d5td
              id="exampleFormControlFile1"
            />
          </Form.Group>
          <Button onSubmit={handleSubmit}>Daftar Jadi Konsultan</Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Forminput;
