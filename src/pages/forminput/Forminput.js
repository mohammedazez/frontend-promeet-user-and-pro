import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import {getUserInfoAction} from '../../redux/action/User.action';
import {getEditProfessional} from '../../redux/action/User.action'

import DatePicker from "react-datepicker";

import "./Forminput.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Form, Button } from "react-bootstrap";

function Forminput() {
  const  dispatch = useDispatch();
  const history = useHistory();


  const detailProfile = useSelector((state) => state.user.data)
  console.log('detail di form input', detailProfile);

  useEffect(() => {
   if(detailProfile.length === 0) {
     dispatch(getUserInfoAction());
   } else {
     setProfile(detailProfile )
   } 
  }, [dispatch, detailProfile]);
  
  const [profile, setProfile] = useState({
    fullName : "",
  })

  // const [startDate, setStartDate] = useState(new Date());
  

const handleChange = e => {
  setProfile({
    ...profile,
    [e.target.name] : e.target.value
  })
}



const handleSubmit = (event) => {
  dispatch(getEditProfessional(profile, detailProfile, event))
  history.push('/');
}
// const handleCalendarClose = () => console.log("Calendar closed");
// const handleCalendarOpen = () => console.log("Calendar opened");
  // console.log('profile', profile.profileId.experience[0])
  console.log('detail di componen', profile)
  console.log('_id', profile._id)

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} />
        <label htmlFor="">Nama Lengkap</label><br />
     
        <button >update</button>
  </form>

    // <div>
    //   <Header />
    //   <div className="container-forminput">
    //     <h1 className="judulutama-form">
    //       Berikan pengalaman terbaik untuk orang yang membutuhkan di kota anda
    //     </h1>
    //     <Form >
    //       <p className="judulform">Upload Foto profil anda :</p>
    //       <Form.Group>
    //         <Form.File id="exampleFormControlFile1" />
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.ControlInput1"
    //         className="grupform"
    //       >
    //         <p className="judulform">Nama Lengkap :</p>
    //         <Form.Control
    //         name="fullName"
    //           type="namalengkap"
    //           value={profile.fullName}
    //           onChange={handleChange}
    //           placeholder="Nama Lengkap"
    //           size="lg"
    //         />
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.ControlInput1"
    //         className="grupform"
    //       >
    //         <p className="judulform">Email :</p>
    //         <Form.Control type="email" name="email" value={profile.email} 
    //         onChange={handleChange} placeholder="Email" size="lg" />
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.ControlInput1"
    //         className="grupform"
    //       >
    //         <p className="judulform">Pekerjaan :</p>
    //         <Form.Control type="pekerjaan" placeholder="Pekerjaan" size="lg" />
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.ControlInput1"
    //         className="grupform"
    //       >
    //         <p className="judulform">Jasa yang ditawarkan:</p>
    //         <Form.Control
    //           type="jasa"
    //           placeholder="Jasa apa yang ingin ditawarkan"
    //           size="lg"
    //         />
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.ControlInput1"
    //         className="grupform"
    //       >
    //         <p className="judulform">Tarif pertemuan /Hitungan perjam :</p>
    //         <Form.Control
    //           type="tarif"
    //           placeholder="Tarif meeting dihitung berdasarkan per jam"
    //           size="lg"
    //         />
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.ControlInput1"
    //         className="grupform"
    //       >
    //         <p className="judulform">No.Handphone :</p>
    //         <Form.Control
    //           type="phone"
    //           name="numberPhone"
    //           value={profile.numberPhone}
    //           onChange={handleChange}
    //           placeholder="Nomor Handphone"
    //           size="lg"
    //         />
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.SelectCustomSizeLg"
    //         className="grupform"
    //       >
    //         <p className="judulform">Lokasi :</p>
    //         <Form.Control as="select" size="lg" custom>
    //           <option>Jakarta</option>
    //           <option>Depok</option>
    //           <option>Bekasi</option>
    //           <option>Tangerang</option>
    //         </Form.Control>
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.SelectCustomSizeLg"
    //         className="grupform"
    //       >
    //         <p className="judulform">Jadwal Tersedia :</p>
    //         {/* <Form.Control></Form.Control> */}
    //         {/* <Form.Control> */}
    //         <div>
    //         <DatePicker selected={startDate}
    //             dateFormat="h:mm aa"
    //         onChange={date => setStartDate(date)} />
    //         </div>
              
    //         {/* </Form.Control> */}
    //         {/* <Form.Control as="select" size="lg" custom> */}
         
    //           {/* <option>08:00 WIB</option>
    //           <option>10:00 WIB</option>
    //           <option>12:00 WIB</option>
    //           <option>14:00 WIB</option>
    //           <option>18:00 WIB</option> */}
    //         {/* </Form.Control> */}
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.SelectCustomSizeLg"
    //         className="grupform"
    //       >
    //         <p className="judulform">Tanggal Tersedia :</p>
    //         <Form.Control as="select" size="lg" custom>
    //           <option>08-11-2020</option>
    //           <option>09-11-2020</option>
    //           <option>10-11-2020</option>
    //           <option>11-11-2020</option>
    //           <option>12-11-2020</option>
    //         </Form.Control>
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.ControlInput1"
    //         className="grupform"
    //       >
    //         <p className="judulform">Tempat :</p>
    //         <Form.Control
    //           type="tarif"
    //           placeholder="Tempat untuk meeting"
    //           size="lg"
    //         />
    //       </Form.Group>
    //       <Form.Group controlId="exampleForm.ControlTextarea1">
    //         <Form.Control
    //           as="textarea"
    //           rows={3}
    //           placeholder="Isi alamat lengkap tempat untuk meeting"
    //         />
    //       </Form.Group>
    //       <Form.Group
    //         controlId="exampleForm.ControlInput1"
    //         className="grupform"
    //       >
    //         <p className="judulform">Pengalaman :</p>
    //         <Form.Control
    //           type="tarif"
    //           placeholder="Pengalaman anda selama bekerja"
    //           size="lg"
    //         />
    //       </Form.Group>
    //       <Form.Group controlId="exampleForm.ControlTextarea1">
    //         <p className="judulform">Tentang Anda</p>
    //         <Form.Control
    //           as="textarea"
    //           rows={3}
    //           placeholder="Tulis Tentang anda"
    //         />
    //       </Form.Group>
    //       <Form.Group>
    //         <p className="judulform">Upload KTP anda</p>
    //         <Form.File id="exampleFormControlFile1" />
    //       </Form.Group>
    //     <Button onSubmit={handleSubmit}>Daftar Jadi Konsultan</Button>
    //     </Form>
    //   </div>
    //   <Footer />
    // </div>
 
  );
}

export default Forminput;
