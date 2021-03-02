import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from "react-router-dom";
import stress from "../images/stress.jpg"

function Resources() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Resources</h1>
          </Jumbotron>
        </Col>
      </Row>
      <CardGroup>
  <Card>
    <Card.Img src={stress} size="100px160"/>
    <Card.Body>
      <Card.Title>Stress</Card.Title>
      <Card.Text>
        When stress is managed it can help us maximize our potential and performance.
      </Card.Text>
      <Card.Footer>  <Link to={"/stress"}>Learn More About Stress</Link></Card.Footer>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
    </Container>
  );
}

export default Resources;
