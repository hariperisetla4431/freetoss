import React, { Component } from 'react';
import "./SignIn.css";
// import {Button, Row, Col } from 'react-bootstrap'
import Dashboard from '../dashboard/dashboard';
import {Link, Redirect, useHistory, withRouter} from 'react-router-dom';
import firebase, { db, auth } from '../../services/firebase';
import Authenticate from '../../services/authenticate';
import Input from '../input_test';
import SignIn from './SignIn';

class SignInLayout extends React.Component {
  constructor(props){
    super(props);
    this.signInUser = this.signInUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleResetPassword = this.handleResetPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: '',
      password: ''  
    }
  }

  resetPassword = (e) => {
    var auth = firebase.auth();
    var emailAddress = "user@example.com";

    auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    }).catch(function(error) {
    // An error happened.
    });
  }
  
  signInUser = (e) => {

    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
      const user = result.user;

      if(user.emailVerified === false){
        alert("Your are not a verified user. Please verify your email to continue!")
        
      }
      // console.log(user);
      return <Redirect to="/" />
      

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode + " : " + errorMessage);
      // ...
    });
}

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/signup');
  }

  handleResetPassword(e) {
    e.preventDefault();
    this.props.history.push('/password-reset');
  }

  handleChange(e) {
    this.setState({
       [e.target.name]: e.target.value
      
      });
  }

  render() {
    return (
      <SignIn signInGoogle={this.props.signInGoogle} handleChange={this.handleChange} handleClick={this.handleClick} handleResetPassword={this.handleResetPassword} signInUser={this.signInUser} />
    );
  }
}

export default withRouter(SignInLayout);


