import React, { Component, useState, Link } from "react";
import DisplayGoal from "../components/Card/GoalCard";


class Profile extends Component {
    render() {
        return(
            <div>
                <h1>Profile Page</h1>
            
       <DisplayGoal
       header={"test header"}
       title={"test title"}
       text={"test text"}
       />
        </div> 
        )
    }
}

export default Profile;
