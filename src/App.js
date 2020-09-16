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
            
            <Route path="/profile" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'profile' />} />

            <Route path="/dashboard" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'dashboard' />} />

            <Route path="/upload" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'upload' />} />

            <Route path="/dock-upload" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'dock-upload' />} />

            <Route path="/documents" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'my documents' />} />

            <Route path="/documents-image" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'image' />} />

            <Route path="/documents-pdf" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'pdf' />} />

            <Route path="/documents-word" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'word'/>} />
            
            <Route path="/documents-other" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'other'/>} />
            
            <Route path="/documents-dock" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'dock-user' comp='retrieve' />} />            

            <Route path="/share" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'share' />} />

            <Route path="/privacy" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'privacy' />} />

            <Route path="/help&feedback" component={() => <Home user = {this.state.user} signout={this.signOutUser} page = 'help & feedback' />} />

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