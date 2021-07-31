import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; //then add <Route component = {Component} /> to <div className-"App"> for Route
import SignupPage from '../src/Pages/SignupPage/SignupPage';
import LoginPage from '../src/Pages/LoginPage/LoginPage';
import MainPage from './Pages/Main/Main';
import userService from './utilities/userService';

class App extends Component {
    constructor() {
      super();
      this.state = {
        // ...this.getInitialState(),
        // Initialize user if there's a token, otherwise null
        user: userService.getUser()
      };
    }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  render() {
    return (
      <div>
        <header className='header-footer'>What To Pack</header>
        <Switch>
            <Route exact path='/signup' render={({ history }) => 
            <SignupPage signup={this.handleSignupOrLogin}
              history={history}
            />
          }/>
          <Route exact path='/login' render={() => 
            <LoginPage login={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={() =>
            <MainPage user={this.state.user}
          />
        }/>
        </Switch>
      </div>
    )
  };
}

export default App;