import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

export default ({
  heading = "",
  paragraph1="",
  paragraph2="",
  paragraph3="",
  paragraph4="",
  paragraph5="",
  paragraph6="",
  paragraph7="",
  imageSrc1="",
  imageAlt1="",
  imageSrc2="",
  imageAlt2=""
}) => {
 
  return (
    <Container fluid>
      <Jumbotron>
        <h1>
          {heading}
        </h1>
      </Jumbotron>
      <Row>
        <Col size="md-8">
         <p>{paragraph1}</p>
         <br/>
         <p>{paragraph2}</p>
         <br/>
         <p>{paragraph3}</p>
          <Row>
            </Row>
         </Col>
         
        <Col size="md-4 sm-12">
        <img
                height= "400px"
                background-repeat= "no-repeat"
                background-size= "cover"
                position= "relative"
                src={imageSrc1}
                alt={imageAlt1}
              />
        </Col>
      </Row>
      <Row>      
        <Col size="md-4 sm-12">
        <img
                height= "400px"
                background-repeat= "no-repeat"
                background-size= "cover"
                position= "relative"
                src={imageSrc2}
                alt={imageAlt2}
              />
        </Col>
        <Col size="md-8">
          <p>{paragraph4}</p>
          <br></br>
         <p>{paragraph5}</p>
         <br/>
         <p>{paragraph6}</p>
         <br/>
         <p>{paragraph7}</p>
          <Row>
            </Row>
         </Col>
      </Row>
      <Link to="/">← Back to Resources</Link>
    </Container>
  );
  };






