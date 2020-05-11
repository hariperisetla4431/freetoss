import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Link, Switch} from 'react-router-dom';
import './App.css';
import firebase, { db, auth } from './services/firebase';
import Home from './components/home/home';
import NavBar from './components/navbar/navBar2';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import SignUp2 from './components/signup/signup2';
import Dashboard from './components/dashboard/dashboard';
import LoginAuthenticate from './services/authenticate';
import SignUpAuthenticate from './services/signupauthenticate';
import {useHistory as history} from 'react-router-dom';

import SideBar from './components/navbar/sideBar';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

// props is data in a component that does NOT change
// state is data in a component that does change




class App extends React.Component {
  state = {
    user: null,
    email: '',
    password: '' 
  }



  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        this.setState({ 
          user: {
            photoURL: user.photoURL,
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
          } 
        })

        
      } else {
        // No user is signed in.
        this.setState({ user: null })
      }
    });
  }



//   signInUser = (e) => {
//     e.preventDefault();

//     firebase.auth().signInWithEmailAndPassword(this.props.email, this.props.password).then((result) => {
//       const user = result.user;
//       console.log(user)
      
        

//     }).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//     });
// }


  signInUserGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {

      // The signed-in user info.
      const user = result.user;
      console.log(user)
      
      

      // ...
    }).catch(function(error) {
      console.log(error)

      // ...
    });
  }

  




  signOutUser = () => {
    auth.signOut();
    
  }

  render () {
    return (
      <div className="App">
        
        <Router history={history}>
          
        {/* <NavBar signout={this.signOutUser} user={this.state.user} />
        <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <SideBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col> 
                </Row>

            </Container> */}


        
        <Switch>
          <Route exact path="/" component={() => <LoginAuthenticate signinGoogle = {this.signInUserGoogle}
                              signout={this.signOutUser}
                              user={this.state.user} 
                              
                              /> } />
          <Route path="/login" component={() => 
                <LoginAuthenticate signinGoogle = {this.signInUserGoogle}
                signout={this.signOutUser}
                              user={this.state.user} 
                              
                              />} />
          <Route path="/signup" component={() => <SignUpAuthenticate user={this.state.user} />} signout={this.signOutUser}/>

          <Route path="/dashboard" component={() => <Home user = {this.state.user} />} />
          </Switch>
          
          
        </Router>

        
  
      </div>
    )
  }
}

export default App;