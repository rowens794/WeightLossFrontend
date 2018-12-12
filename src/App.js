import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from './Components/HeaderBar/HeaderBar';
import HomePage from './Components/HomePage/HomePage';
import FooterBar from './Components/FooterBar/FooterBar';
import Register from './Components/Register/Register';
import RegisterFromInvite from './Components/Register/RegisterFromInvite';
import RegistrationRecieved from './Components/RegistrationRecieved/RegistrationRecieved';
import Login from './Components/Login/Login';
import Verified from './Components/Login/AccountVerified';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import ResetPassword from './Components/ForgotPassword/ResetPassword'
import Dashboard from './Components/Dashboard/Dashboard';
import CreateComp from './Components/CreateComp/CreateComp';
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
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/resetpassword/:ID/:verificationString" component={ResetPassword} />
            <Route exact path="/verified" component={Verified} />
            <Route exact path="/register/" component={Register} />
            <Route exact path="/registrationrecieved" component={RegistrationRecieved} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/createcomp" component={CreateComp} />
            <Route exact path="/joinacompetition/:id" component={RegisterFromInvite}/> 
            <FooterBar />
          </div>
        </MyProvider>
      </Router>
    );
  }
}

export default App;
