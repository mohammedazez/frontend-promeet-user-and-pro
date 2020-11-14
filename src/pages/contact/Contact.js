import React from "react";
import "./Contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function contact() {
  return (
    <div>
      <Header />
      <div className="container-contact">
        <form id="contact" action="" method="post">
          <h3>Contact us</h3>
          <h4>
            Fill out this form and we will get back to you as quickly as
            possible!
          </h4>
          <fieldset>
            <input placeholder="Full Name *" type="text" required />
          </fieldset>
          <fieldset>
            <input placeholder="Email Address *" type="email" required />
          </fieldset>
          <fieldset>
            <input placeholder="Phone Number" type="tel" />
          </fieldset>
          <fieldset>
            <input placeholder="Street Address" type="url" />
          </fieldset>
          <fieldset>
            <input placeholder="Street Address Line 2" type="url" />
          </fieldset>
          <fieldset>
            <input placeholder="City, State, Zip" type="url" />
          </fieldset>
          <fieldset>
            <textarea placeholder="Your Message Here.... *" required></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default contact;
