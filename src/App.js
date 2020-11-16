import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/js/Main";
import AllProfile from "./pages/allprofile/Allprofile";
import Professional from "./pages/professional/Professional";
import Detail from "./pages/detail/Detail";
import Booking from "./pages/booking/Booking";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import SignupUser from "./pages/signup/SignupUser";
import SignupPro from "./pages/signup/SignupProfessional";
import Confirmation from "./pages/confirmation/Confirmation";
import Forminput from "./pages/forminput/Forminput";
import ProfilUser from "./pages/profil/user/js/ProfilUser";
import BookingSayaUser from "./pages/profil/user/js/BookingSayaUser";
import CompletedUser from "./pages/profil/user/js/CompletedUser";
import ProfilPro from "./pages/profil/pro/js/ProfilPro";
import PesananSayaPro from "./pages/profil/pro/js/PesananSayaPro";
import CompletedPro from "./pages/profil/pro/js/CompletedPro";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/allprofile">
            <AllProfile />
          </Route>
          <Route path="/professional/:id">
            <Professional />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/signup/user">
            <SignupUser />
          </Route>
          <Route path="/signup/pro">
            <SignupPro />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forminput">
            <Forminput />
          </Route>
          <Route path="/profil/user">
            <ProfilUser />
          </Route>
          <Route path="/bookingsaya/user">
            <BookingSayaUser />
          </Route>
          <Route path="/completed/user">
            <CompletedUser />
          </Route>
          <Route path="/profil/pro">
            <ProfilPro />
          </Route>
          <Route path="/pesanansaya/pro">
            <PesananSayaPro />
          </Route>
          <Route path="/completed/pro">
            <CompletedPro />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
