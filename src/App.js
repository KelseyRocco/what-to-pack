import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom'; 
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
    console.log("handle signup or log in", this.state.user)
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
          <Route exact path='/login' render={({history}) => 
            <LoginPage handleSignupOrLogin={this.handleSignupOrLogin}
            history={history}
            />
          }/> 
          <Route exact path="/main" render={() => 
            userService.getUser() ?
              <Main user={this.state.user}/>
            :
            <Redirect to='/' />}
          />         
        </Switch>
      </div>
    )
  };
}

export default App;
