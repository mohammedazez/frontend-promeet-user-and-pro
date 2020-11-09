import React from "react";
import "../css/Main.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Profesi from "../../../components/profesi/Profesi";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import SliderProduk from "../../../components/sliderproduk/SliderProduk";

function Main() {
  return (
    <div>
      <Header />
      <SectionOne />
      <Profesi />
      <SliderProduk />
      <SectionTwo />
      <SliderProduk />
      <SectionFour />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default Main;
