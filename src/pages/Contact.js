import React from "react";
import Email from "../components/Email";
import "../styles/contact.css";
import Whatsapp from "../components/Whatsapp";

const Contact = () => {
  return (
    <div
      className=" border-primary mb-3 contact" /* style="max-width: 20rem;" */
    >
      <h2 className="header-contact">Choose Contact Method</h2>

      <div className="cards">
        <Whatsapp />
        <Email />
      </div>
    </div>
  );
};

export default Contact;
