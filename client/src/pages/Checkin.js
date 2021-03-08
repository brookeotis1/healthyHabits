import React, { Component } from "react";
import Checklist from "../components/Checklist";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


class Checkin extends Component {
    render() {
        return(
            <div>
                <Jumbotron>
            <h1>Goal Check-in</h1>
          </Jumbotron>
                <Container>
                <Checklist />
                </Container>
                
                
                
                
            </div>
        )
    }
}

export default Checkin;


{/* <h1>Check-in Page</h1> */}