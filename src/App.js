import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import SignupPage from '../src/Pages/SignupPage/SignupPage';
import LoginPage from '../src/Pages/LoginPage/LoginPage';
import Main from './Pages/Main/Main';
import userService from './utilities/userService';
import NavBar from '../src/components/NavBar/NavBar';



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
            <SignupPage handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
          <Route exact path='/login' render={() => 
            <LoginPage handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/> 
          <Route exact path="/main" render={() => 
            <Main user={this.state.user}/>}
          />         
        </Switch>
      </div>
    )
  };
}

export default App;
