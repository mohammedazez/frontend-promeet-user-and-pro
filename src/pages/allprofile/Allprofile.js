import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Allprofile.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getProfileAction } from "../../redux/action/Allprofile.action";

function Allprofile() {
  const dispatch = useDispatch();
  const listProfil = useSelector((state) => state.profile);
  console.log("Ini Product di view", listProfil);

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="container-allprofile">
        <h1>All profile</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Allprofile;
