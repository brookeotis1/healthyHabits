import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Goals() {
  // Setting our component's initial state
  const [goals, setGoals] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Goals and store them with setGoals
  useEffect(() => {
    loadGoals()
  }, [])

  // Loads all Goals and sets them to Goals
  function loadGoals() {
    API.getGoals()
      .then(res => 
        setGoals(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a Goal from the database with a given id, then reloads Goals from the db
  function deleteGoal(id) {
    API.deleteGoal(id)
      .then(res => loadGoals())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

   // When the form is submitted, use the API.saveGoal method to save the goal data
  // Then reload goals from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
    API.saveGoal({
        title: formObject.title,
        measurement: formObject.measurement,
        duration: formObject.duration,
        notes: formObject.notes
      })
        .then(res => loadGoals())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Set New Goal</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Run 1 mile"
              />
              <Input
                onChange={handleInputChange}
                name="measurement"
                placeholder="3 times a week"
              />
              <Input
                onChange={handleInputChange}
                name="duration"
                placeholder="For a Month"
              />
              <TextArea
                onChange={handleInputChange}
                name="notes"
                placeholder="I plan on running MWF at 7:00am (Optional)"
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Add Goal
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Goals</h1>
            </Jumbotron>
            {goals.length ? (
              console.log(goals),
              <List>
                {goals.map(goal => (
                  <ListItem key={goal._id}>
                    <Link to={"/goals/" + goal._id}>
                      <strong>
                        {goal.title} for {goal.measurement} for {goal.duration}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteGoal(goal._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Current Goals</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Goals;
