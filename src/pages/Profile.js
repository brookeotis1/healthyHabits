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
       header={savedGoals}
       title={"test title"}
       text={"test text"}
       />
        </div> 
        )
    }
}

export default Profile;
