import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default ({
  header = "",
  title = "",
  text = "",
}) => {

  return (
    <>
<Card.Header>{header}</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Button variant="primary" link="/progress">Track Progress</Button>
            </Card.Body>
            </>
  );
};