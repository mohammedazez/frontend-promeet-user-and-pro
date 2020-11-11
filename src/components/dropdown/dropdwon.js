import React from "react";
import "./dropdown.css";
import { useHistory } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function Dropdwon() {
  let history = useHistory();
  function handleClick() {
    try {
      history.push("/professional");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <NavDropdown title="Profesi" id="basic-nav-dropdown">
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/032-software_developer_gu5wbe.png"
            alt="soft"
            className="img-dropdown"
          />
          Software Engineer
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385581/profesi/002-actress_ylpprb.png"
            alt="soft"
            className="img-dropdown"
          />
          Actress
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385581/profesi/003-architecture_sam5bq.png"
            alt="soft"
            className="img-dropdown"
          />
          Arsitek
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385581/profesi/001-accountant_hhyxvk.png"
            alt="soft"
            className="img-dropdown"
          />
          Akuntan
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/033-teacher_evhunm.png"
            alt="soft"
            className="img-dropdown"
          />
          Guru
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385579/profesi/024-photographer_jod3m1.png"
            alt="soft"
            className="img-dropdown"
          />
          Fotografer
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385579/profesi/020-judge_ayvf3t.png"
            alt="soft"
            className="img-dropdown"
          />
          Hakim
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385579/profesi/027-pilot_fbihd4.png"
            alt="soft"
            className="img-dropdown"
          />
          Pilot
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/018-graphic_designer_mbovtn.png"
            alt="soft"
            className="img-dropdown"
          />
          Desainer Grafis
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/015-financial_advisor_ll3taj.png"
            alt="soft"
            className="img-dropdown"
          />
          Ahli Keuangan
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/014-fashion_designer_t7i3t8.png"
            alt="soft"
            className="img-dropdown"
          />
          Fashion Designer
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/010-marketer_wqjnlm.png"
            alt="soft"
            className="img-dropdown"
          />
          Marketing
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/005-baker_kbf01e.png"
            alt="soft"
            className="img-dropdown"
          />
          Koki
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/004-astronomer_g1ipoa.png"
            alt="soft"
            className="img-dropdown"
          />
          Astronom
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385577/profesi/009-technician_y09izh.png"
            alt="soft"
            className="img-dropdown"
          />
          Teknisi Elektronik
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/031-scientist_yykndv.png"
            alt="soft"
            className="img-dropdown"
          />
          Ilmuan
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385578/profesi/012-electrician_zt0xpf.png"
            alt="soft"
            className="img-dropdown"
          />
          Teknisi listrik
        </NavDropdown.Item>
        <NavDropdown.Item className="kotak-dropdown" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/def4tydoe/image/upload/v1604385580/profesi/034-businessman_jtateq.png"
            alt="soft"
            className="img-dropdown"
          />
          Pengusaha
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default Dropdwon;
