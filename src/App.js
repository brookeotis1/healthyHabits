import React, { Component } from "react";
import './App.css';
import Header from './components/header/navbar'
//import Main from './components/main'
//import Footer from './components/footer' 
//import Button from './components/buttons'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import NavTabs from "./pages/NavTabs";
//import Goal from "./pages/newGoal";
import Main from "./components/main";
import 'bootstrap/dist/css/bootstrap.min.css';


//import Signup from "./pages/Signup";



//state that houses form details (pull from state to render on page)

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Header/>
        <main className="main">
       <Main />
        
        </main> 
      </div>
    );
  }

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