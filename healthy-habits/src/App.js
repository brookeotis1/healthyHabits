import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import "./App.css";


function App() {
  return (
    <Router>
      <div>


        <Route exact path="/signup" component={Signup} />

      </div>
    </Router>
    
  );
}

export default App;
