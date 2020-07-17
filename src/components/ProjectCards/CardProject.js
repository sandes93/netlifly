import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function CardProject(props) {
  return (
    <div>
    <Row style={{ marginTop: "3rem" }}>
      <Col xs lg="2">
    {
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{height: "250px", width: "18rem"}} className="image" variant="top" src={props.card_image}></Card.Img>
        <Card.Body>
          <Card.Title>{props.card_title}</Card.Title>
          <Card.Text>
            {props.card_text}
          </Card.Text>
          <Button variant="primary" 
           href={props.link} target="_blank">{props.card_title}</Button>
        </Card.Body>
      </Card>
    }
    </Col>
    </Row>  
    </div>
  );
}

export default CardProject;
