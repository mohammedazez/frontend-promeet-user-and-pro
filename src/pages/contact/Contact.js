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
            <input
              placeholder="Full Name *"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Email Address *"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input placeholder="Phone Number" type="tel" tabindex="3" />
          </fieldset>
          <fieldset>
            <input placeholder="Street Address" type="url" tabindex="4" />
          </fieldset>
          <fieldset>
            <input
              placeholder="Street Address Line 2"
              type="url"
              tabindex="5"
            />
          </fieldset>
          <fieldset>
            <input placeholder="City, State, Zip" type="url" tabindex="6" />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Your Message Here.... *"
              tabindex="7"
              required
            ></textarea>
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
