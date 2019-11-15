import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import RegistrationForm from "./Componants/RegistrationForm";

function App() {
  return(
    <Router>
      <div className="App">
        <Route exact path="/register" component={RegistrationForm} />
        
      </div>
    </Router>
  )
}
export default App;