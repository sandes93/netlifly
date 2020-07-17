import React, { Component } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import * as emailjs from "emailjs-com";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_email: email,
      from_name: name,
      to_name: "janice_leung2008_gmail_com",
      subject: subject,
      message_html: message,
    };
    emailjs
      .send(
        "janice_leung2008_gmail_com",
        "template_sYCO5dys",
        templateParams,
        "user_ypCug9vMhcn9NXIGPNpty",
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup controlid="formBasicName">
          <Label className="text-muted">Name </Label>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            className="text-primary"
            onChange={this.handleChange.bind(this, "name")}
            placeholder="Name"
          />
        </FormGroup>

        <FormGroup controlid="formBasicEmail">
          <Label className="text-muted">Email address</Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            className="text-primary"
            onChange={this.handleChange.bind(this, "email")}
            placeholder="Enter email"
          />
        </FormGroup>

        <FormGroup controlid="formBasicSubject">
          <Label className="text-muted">Subject</Label>
          <Input
            type="text"
            name="subject"
            className="text-primary"
            value={this.state.subject}
            onChange={this.handleChange.bind(this, "subject")}
            placeholder="Subject"
          />
        </FormGroup>

        <FormGroup controlid="formBasicMessage">
          <Label className="text-muted">Message</Label>
          <Input
            as="textarea"
            rows="3"
            type="textarea"
            name="message"
            className="text-primary"
            value={this.state.message}
            onChange={this.handleChange.bind(this, "message")}
          />
        </FormGroup>

        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
