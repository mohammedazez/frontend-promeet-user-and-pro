import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Page
import Home from "./pages/home/js/Main";
import Professional from "./pages/professional/Professional";
import Detail from "./pages/detail/Detail";
import Booking from "./pages/booking/Booking";
import Login from "./pages/login/Login";
import SignupUser from "./pages/signup/SignupUser";
import SignupPro from "./pages/signup/SignupProfessional";
import Confirmation from "./pages/confirmation/Confirmation";
import ProfilUser from "./pages/profil/ProfilUser";
import ProfilPro from "./pages/profil/ProfilProfessional";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/professional">
            <Professional />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/signupuser">
            <SignupUser />
          </Route>
          <Route path="/signuppro">
            <SignupPro />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profiluser">
            <ProfilUser />
          </Route>
          <Route path="/profilpro">
            <ProfilPro />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
