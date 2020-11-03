import React from "react";
import "../css/Main.css";
import SectionOne from "./SectionOne";
import Profesi from "../../../components/profesi/Profesi";
import SliderProduk from "../../../components/sliderproduk/SliderProduk";

function Main() {
  return (
    <div>
      <SectionOne />
      <Profesi />
      <SliderProduk />
    </div>
  );
}

export default Main;
