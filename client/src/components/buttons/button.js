
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Button() {
  return (
    <>
    
    <Link to="/myGoals">
        <button variant="primary" size="lg" block>
        My Goals
        </button>
        </Link>
    <Link to="newGoal.js">
        <button variant="secondary" size="lg" block>
        New Goals
        </button>
        </Link>
    </>
  );
}

export default Button;

