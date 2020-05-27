import React, { Component } from 'react';
import "./SignIn.css";
// import {Button, Row, Col } from 'react-bootstrap'
import Dashboard from '../dashboard/dashboard';
import {Link, Redirect, useHistory, withRouter} from 'react-router-dom';
import firebase, { db, auth } from '../../services/firebase';
import Authenticate from '../../services/authenticate';
import Input from '../input_test';
import SignIn from './SignIn';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.signInUser = this.signInUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      email: '',
      password: ''  
    }
  }

  
  
  signInUser = (e) => {


    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
      const user = result.user;
      console.log(user);
      return <Redirect to="/" />
      

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
}



  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/signup');
  }

  //   signIn = (e) => {
  //     e.preventDefault();

  //   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
  //   }).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });
  // }

  handleChange(e) {
    this.setState({
       [e.target.name]: e.target.value
      
      });
  }

  render() {
    return (

      <SignIn signInGoogle={this.props.signInGoogle} handleChange={this.handleChange} handleClick={this.handleClick} signInUser={this.signInUser} />

        );
    }
    }
    


export default withRouter(Login);


