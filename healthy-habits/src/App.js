import React from "react";
import './App.css';
import Header from './components/header'
//import Main from './components/main'
//import Footer from './components/footer' 
import Button from './components/buttons'
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Button /> 
      
      </main> 
      
    </div>

);
}

export default App; 




    /*<Router>
      <div>


        <Route exact path="/signup" component={Signup} />

      </div>
    </Router>
    
  );
}

export default App; 

*/