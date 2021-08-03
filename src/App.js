import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import SignupPage from '../src/Pages/SignupPage/SignupPage';
import LoginPage from '../src/Pages/LoginPage/LoginPage';
// import MainPage from './Pages/Main/Main';
import userService from './utilities/userService';
import NavBar from '../src/components/NavBar/NavBar';
import Traveller from './Pages/Traveller/Traveller'
import Places from './components/Places/Places';




class App extends Component {
    constructor() {
      super();
      this.state = {
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
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
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
          <Traveller />
          <Places />
        </Switch>
      </div>
    )
  };
}

export default App;