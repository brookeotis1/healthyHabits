import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import ReactDom from "react-dom";

function Notes(props) {
  const [goal, setGoal] = useState({})

  // When this component mounts, grab the goal with the _id of props.match.params.id
  // e.g. localhost:3000/goals/599dcb67f0f16317844583fc
  const { id } = useParams()
  useEffect(() => {
    API.getGoal(id)
      .then(res => setGoal(res.data))
      .catch(err => console.log(err));
  }, [])

  //Handles Image Upload
  const imageUploader = React.useRef(null);
  const uploadedImage = React.useRef(null);
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  };

  return (
    //goals
    <Container fluid>
      <Jumbotron>
        <h1>
          {goal.title}
        </h1>
      </Jumbotron>
      <Row>
        <Col size="md-6">
          <article>
            <h1>Notes</h1>
            <p>
              {goal.notes}
            </p>
          </article>
          <Row>
            <Link to="/">← Back to All Goals</Link>
             </Row>
         </Col>
         
        <Col size="md-6 sm-12">
          <div>
            <input
              type="file"
              accept="image/*"
              multiple="false"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{
                display: "none"
              }}
            />
            <div
              style={{
                height: "120px",
                width: "120px",
                border: "1px dashed black"
              }}
              onClick={() => imageUploader.current.click()}
            >
              <img
                ref={uploadedImage}
                style={{
                  height: "120px",
                width: "120px",
                   position: "absolute"
                }}
              />
            </div>
            Click to upload Image
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default Notes;
