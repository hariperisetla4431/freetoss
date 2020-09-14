import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import firebase, { db, auth } from './services/firebase';
import Home from './components/home/home';
import SigninAuthenticate from './services/authenticate';
import SignUpAuthenticate from './services/signupauthenticate';
import {useHistory as history} from 'react-router-dom';
import Resume from './components/resume/resumeLayout';
import ResetPassword from './components/signin/resetPasswordLayout';
import Dock from './components/dock/dock';
import Error from './components/404';
import OpenGraph from './components/opengraph';

// props is data in a component that does NOT change
// state is data in a component that does change
import Test from './components/home/Test';

// error 404 - page not found
const NoMatch = ({ location }) => (

  // error component
  <Error />
);

class App extends React.Component {
  state = {
    user: null,
    email: '',
    password: '',
    onHelp: false,
  }

  // componentDidMount()
  componentDidMount(){

    // auth state change
    firebase.auth().onAuthStateChanged((user) => {

      if (user != null && user.emailVerified) {    

        // User is signed in.
        this.setState({
          user: {
            photoURL: user.photoURL,
            email: user.email,
            displayName: user.displayName,
            displayImage: user.displayImage,
            uid: user.uid,
          } 
        })  

      } else {
        // No user is signed in.
        this.setState({ user: null })
      }
    });
    
  }

  toggleHelp = () => {
    this.setState({
      onHelp: !this.state.onHelp
    })
  }

  // google signin
  signInUserGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {

      // The signed-in user info.
      const user = result.user;
      // console.log(user)
      // ...
    }).catch(function(error) {
      console.log(error)

      // ...
    });
  }

  // user signout
  signOutUser = () => {
    auth.signOut().then(() => {
      return <Redirect to="/login"/>
    });
    
  }



  // rendering
  render () {

    return (
      <div className="App">
        
        {/* router */}
        <Router history={history}>

          <Switch>

            {/* signin page /exact path */}
            <Route exact path="/" component={() => <SigninAuthenticate signInGoogle = {this.signInUserGoogle}
                                                                      signout={this.signOutUser}
                                                                      user={this.state.user} /> } />

            {/* signin page fallback path */}
            <Route path="/login" component={() => <SigninAuthenticate  signInGoogle = {this.signInUserGoogle} 
                                                                      signout = {this.signOutUser}
                                                                      user={this.state.user} />} />

            {/* signup path */}
            <Route path="/signup" component={() => <SignUpAuthenticate  user={this.state.user} 
                                                                        signout={this.signOutUser} 
                                                                        signInGoogle = {this.signInUserGoogle} />} />

                     {/* dashboard path */}
            <Route path="/dashboard" component={() => <Home user = {this.state.user} signout={this.signOutUser}/>} />

            <Route path="/help&feedback" component={() => <Home toggleHelp = {this.toggleHelp} user = {this.state.user} signout={this.signOutUser} page = 'help' />} />

            <Route path="/documents" component={() => <Home toggleHelp = {this.toggleHelp} user = {this.state.user} signout={this.signOutUser} page = 'documents' />} />

            {/* dock path */}
            <Route path="/:id/dock" component={Dock} />

            {/* resume path */}
            <Route path="/:id/resume" component={Resume} />

            {/* password reset path */}
            <Route path="/password-reset" component={ResetPassword} />

            {/* og image route */}
            <Route path="/open-graph-img-previewer" component={OpenGraph} />

            {/* error path */}
            <Route component = {NoMatch} />

            </Switch>
        </Router>
      </div>
    )
  };
}

export default App;