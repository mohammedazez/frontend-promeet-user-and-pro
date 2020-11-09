import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/js/Main";
import Professional from "./pages/professional/Professional";
import Detail from "./pages/detail/Detail";
import Booking from "./pages/booking/Booking";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import SignupUser from "./pages/signup/SignupUser";
import SignupPro from "./pages/signup/SignupProfessional";
import Confirmation from "./pages/confirmation/Confirmation";
import ProfilUser from "./pages/profil/ProfilUser";
import ProfilPro from "./pages/profil/ProfilProfessional";
import Forminput from "./pages/forminput/Forminput";

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route path="/signup/user">
            <SignupUser />
          </Route>
          <Route path="/signup/pro">
            <SignupPro />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profil/user">
            <ProfilUser />
          </Route>
          <Route path="/profil/professional">
            <ProfilPro />
          </Route>
          <Route path="/forminput">
            <Forminput />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
