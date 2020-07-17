import React from "react";
import { Container } from "react-bootstrap";
import NavTabs from "../NavTabs";
import Footer from "../Footer";

function About() {
  return (
    <div>
       <NavTabs />
      <Container>
        <h1>My Story</h1>
        <p>
          I've currently finished a 6 month Full Stack coding bootcamp with the University of Sydney and Trilogy Education Services.

          I have used HTML, CSS JavaScript to produce websites and web apps.

          I have been able to apply concepts learn through the bootcamp to build a fully functional MERN application.

          Through the bootcamp I have learn the skill to beable to research new concepts and apply them to any web application or website.

          Which has stimulated my thirst to continually apply my new skills within the industry.
        </p>
      </Container>
            <Footer />
    </div>
  );
}

export default About;
