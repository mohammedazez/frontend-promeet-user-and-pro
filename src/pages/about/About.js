import React from "react";
import "./About.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function about() {
  return (
    <div>
      <Header />
      <div className="container-about">
        <div className="wrapper_team">
          <div className="title_team">
            <h1 className="judul-team-about">Meet the Promeet Team</h1>
            <p className="deskripsi-team-about ">
              Promeet adalah platform yang mempertemukan user dengan seorang
              professional, misal dalam kasusnya seorang user membutuhkan tips
              konsultasi ke seseorang yang ahli di bidang tertentu tapi tidak
              punya relasi siapapun, sehingga dengan masalah tersebut kami
              memberikan wadah /platform untuk mempertemukan user dan
              professional untuk bisa memberikan jadwal dan saling bertemu.
            </p>
          </div>
          <div className="team_box">
            <div className="teamcontent">
              <div className="container-left">
                <div className="bigimg" height="260" width="225">
                  &nbsp;
                </div>
              </div>

              <div className="container-right teamdetails">
                <h2 id="bigname">Name</h2>
                <h3 id="bigjob">Title</h3>
                <p id="bigdesc">A brief description.</p>
              </div>
            </div>
          </div>
          <ul className="team clearfix">
            {/* satu */}
            <li>
              <div className="profile_container">
                <img
                  alt="Jane Doe"
                  className="profilepic"
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1605358708/people/2732f2d35f55e96b0a597df76f6b9b85_ubitfi.jpg"
                />
                <div className="bigimg-overlay">
                  <div className="bigimg-text">
                    <strong>Ironman</strong> <br />
                    Fight for enemy
                  </div>
                </div>
              </div>
            </li>

            {/* Dua */}
            <li>
              <div className="profile_container">
                <img
                  alt="Jane Doe"
                  className="profilepic"
                  src="https://essayslimmer.com/assets/avatars/stevie.jpg"
                />
                <div className="bigimg-overlay">
                  <div className="bigimg-text">
                    <strong>Moh Amilin</strong> <br />
                    CEO (Chief Executive Officer) Promeet.com
                  </div>
                </div>
              </div>
            </li>

            {/* Tiga */}
            <li>
              <div className="profile_container">
                <img
                  alt="Jane Doe"
                  className="profilepic"
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1605359104/people/Instinct_yr7bnp.jpg"
                />
                <div className="bigimg-overlay">
                  <div className="bigimg-text">
                    <strong>Muhamad Aziz</strong> <br />
                    CTO (Chief Technology Officer) Promeet.com
                  </div>
                </div>
              </div>
            </li>

            {/* Empat */}
            <li>
              <div className="profile_container">
                <img
                  alt="Jane Doe"
                  className="profilepic"
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1605359102/people/The-Focus-2_lu6eij.jpg"
                />
                <div className="bigimg-overlay">
                  <div className="bigimg-text">
                    <strong>Mohammad Yogi</strong> <br />
                    Head of Engineering Promeet.com
                  </div>
                </div>
              </div>
            </li>

            {/* Empat */}
            <li>
              <div className="profile_container">
                <img
                  alt="Jane Doe"
                  className="profilepic"
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1605358977/people/photo_2019-10-11_10-24-32_lbw2sp.jpg"
                />
                <div className="bigimg-overlay">
                  <div className="bigimg-text">
                    <strong>Krisna Firdaus</strong> <br />
                    Head of Product Promeet.com
                  </div>
                </div>
              </div>
            </li>

            {/* Empat */}
            <li>
              <div className="profile_container">
                <img
                  alt="Jane Doe"
                  className="profilepic"
                  src="https://res.cloudinary.com/def4tydoe/image/upload/v1605358708/people/6720e54ed2db8832669327cc6b8a4e50_w2dqcw.jpg"
                />
                <div className="bigimg-overlay">
                  <div className="bigimg-text">
                    <strong>Robocop</strong> <br />
                    Fight for competitor
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
