import React from "react";
import "./dropdown.css";
import { useHistory } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

function Dropdwon() {
  const history = useHistory();
  const listProfesi = useSelector((state) => state.profesi);
  const { profession } = listProfesi;

  const handleClick = (_id) => {
    history.push(`/professional/${_id}`);
  };
  return (
    <div>
      <NavDropdown title="Profesi" id="basic-nav-dropdown">
        {/* Mapping */}
        {profession.map((profesi, index) => (
          <NavDropdown.Item
            key={index}
            className="kotak-dropdown"
            onClick={() => handleClick(profesi._id)}
          >
            <img
              src={`${profesi.imgUrl}`}
              alt="soft"
              className="img-dropdown"
            />
            {profesi.nameProfesi}
          </NavDropdown.Item>
        ))}
        {/* Mapping */}
      </NavDropdown>
    </div>
  );
}

export default Dropdwon;
