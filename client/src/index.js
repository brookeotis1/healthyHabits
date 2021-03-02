import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from "./utils/context"




ReactDOM.render((
  <AuthProvider>
    <BrowserRouter>
     <App /> {/* The various pages will be displayed by the `Main` component. */}
    </BrowserRouter>
  </AuthProvider>
  ), document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));



