import React from "react";
import CardProject from "../../components/ProjectCards/CardProject";
import { Container } from "react-bootstrap";
import Data from "../../utils/DATA.json"


function Projects() {
  return (
    <div>
      <Container>
        <h1>Projects </h1>
        
        {Data.map((item) => (
             <CardProject
             key={item.id}
             card_image={item.card_image}
             card_title={item.card_title}
             card_text={item.card_text}
             link={item.link}
             ></CardProject>
        ))}
      
      </Container>
    </div>
  );
}

export default Projects;
