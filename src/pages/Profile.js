import React, { Component, useState, Link } from "react";
import DisplayGoal from "../components/Card/GoalCard";

function PullGoals(){
    const [savedGoals, setSavedGoals] = useState([])
}

class Profile extends Component {
    render() {
        return(
            <div>
                <h1>Profile Page</h1>
            
       <DisplayGoal
       header={"test header"}
       title={"test title"}
       text={savedGoals}
       />
        </div> 
        )
    }
}

export default Profile;
