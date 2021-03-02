import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apiAuth } from "./utils/api/index";
//import { API } from "./utils/API";
import { useAuth } from "./utils/context/index";
//import { Navbar}
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register"
import { Profile } from "./pages/Profile" 
import NoMatch from "./pages/NoMatch";
import Main from "./components/main";
import Header from "./components/header/navbar";



function App() {
  const [state, setState] = useState({
    isReady: false,
  });
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const res = apiAuth.getAuth();
    if (res) {
      setAuth({ ...auth, ...res });
    }
    setState({ ...state, isReady: true });
  }, []);

  if (!state.isReady) {
    return null;
  }

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



// import React, { Component } from "react";
// import Header from './components/header/navbar'
// import Main from "./components/main";
// import 'bootstrap/dist/css/bootstrap.min.css';
// //import './src/app.css';
// //import LoginForm from "./components/LoginForm";


// class App extends Component {
  
//   render() {

//     return (
//       <div className="App">
        
//         <Header/>
//         <main className="main">
//       <Main />        
//         </main> 
//       </div>
//     );
//   }

// }

// export default App; 




