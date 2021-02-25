import React, { Component } from "react";
import Header from './components/header/navbar'
import Main from "./components/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


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




