import React, { useEffect } from "react";
import "./Profesi.css";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfesiAction } from "../../redux/action/Profesi.action";

function Profesi() {
  const dispatch = useDispatch();
  const history = useHistory();
  const listProfesi = useSelector((state) => state.profesi);
  const { profession } = listProfesi;

  useEffect(() => {
    dispatch(getProfesiAction());
  }, [dispatch]);

  const handleClick = (_id) => {
    history.push(`/professional/${_id}`);
  };

  return (
    <div className="container-profesi">
      <h1 className="judul-profesi">Profesi</h1>
      {/* Mapping */}
      <Row>
        {profession.map((profesi, index) => (
          <div className="container-profesi-logo" key={index}>
            <img
              src={`${profesi.imgUrl}`}
              alt="img"
              className="img-profesi"
              onClick={() => handleClick(profesi._id)}
            />
            <p className="p-profesi" onClick={() => handleClick(profesi._id)}>
              {profesi.nameProfesi}
            </p>
          </div>
        ))}
      </Row>
      {/* Mapping */}
    </div>
  );
}

export default Profesi;
