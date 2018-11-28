import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from './Components/HeaderBar/HeaderBar';
import HomePage from './Components/HomePage/HomePage';
import FooterBar from './Components/FooterBar/FooterBar';
import Register from './Components/Register/Register';
import RegistrationRecieved from './Components/RegistrationRecieved/RegistrationRecieved';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateHunt from './Components/CreateHunt/CreateHunt';
import { MyProvider } from './Components/ContextProvider/ContextProvider';



class App extends Component {
  
  render() {
    return (
      <Router>
        <MyProvider>
          <div className="App">
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register/" component={Register} />
            <Route exact path="/registrationrecieved" component={RegistrationRecieved} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/createhunt" component={CreateHunt} />
            <FooterBar />
          </div>
        </MyProvider>
      </Router>
    );
  }
}

export default App;
