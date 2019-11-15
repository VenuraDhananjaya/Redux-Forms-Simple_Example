import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import RegistrationForm from "./Componants/RegisterForm/RegistrationForm";
import LoginForm from "./Componants/LoginForm/LoginForm"

function App() {
  return(
    <Router>
      <div className="App">
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/login" component={LoginForm} />
        
      </div>
    </Router>
  )
}
export default App;