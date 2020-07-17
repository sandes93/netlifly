import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm";
import Rows from "../Rows/Rows"

function Contact() {
  return (
    <div>
      <Container>
        <Rows></Rows>
        <h1>Contact Page</h1>
        <div className="row top-border"></div>
        <ContactForm></ContactForm>
  
      </Container>
    </div>
  );
}

export default Contact;
