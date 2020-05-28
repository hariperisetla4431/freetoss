import React from 'react';
// import "./signup2.css";
// import {Button } from 'react-bootstrap';
import firebase, { db, auth } from '../../services/firebase';
import Authenticate from '../../services/authenticate';
import { Link, withRouter } from 'react-router-dom';
import SignUp from './SignUp';

class SignUpLayout extends React.Component {
    constructor(props){
        super(props);
        this.signUpUser = this.signUpUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
          email: '',
          password: '',  
          displayName: ''
        }
      }
    
    
      signUpUser = (e) => {
        e.preventDefault();

         firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
         .then((userCredentials)=>{
             if(userCredentials.user){
               userCredentials.user.updateProfile({
                 displayName: `${this.state.displayName}`
               })
             }
         })
         .catch(function(error) {
           alert(error.message);
         });
      }
      

  handleChange(e) {
    this.setState({
       [e.target.name]: e.target.value
      
      });
  }

  handleClick(e) {
   e.preventDefault();
   this.props.history.push('/login');
 }


render() {
return (

   <SignUp handleChange={this.handleChange} handleClick={this.handleClick} signUpUser={this.signUpUser} signInGoogle = {this.props.signInGoogle}/>
   )
}
}

export default withRouter(SignUpLayout);