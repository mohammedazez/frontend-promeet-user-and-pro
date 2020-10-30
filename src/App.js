import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Page
import Home from "./pages/home/js/Main";
import Produk from "./pages/produk/Produk";
import Detail from "./pages/detail/Detail";
import Maps from "./pages/mapslocation/Mapslocation";
import Keranjang from "./pages/keranjang/Keranjang";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Booking from "./pages/booking/Booking";
import Success from "./pages/success/Success";
import Profil from "./pages/profil/Profil";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/produk">
            <Produk />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/maps">
            <Maps />
          </Route>
          <Route path="/keranjang">
            <Keranjang />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
