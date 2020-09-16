import React from 'react';
// import "./signup2.css";
// import {Button } from 'react-bootstrap';
import firebase from '../../services/firebase';
import { withRouter, Redirect } from 'react-router-dom';
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
          displayName: '',
          onAlert: false,
          // termsCheck: false
        }
      }
    

      toggleAlert = () => {
        this.setState({
          onAlert: !this.state.onAlert
        })
      }

      handleOpen = () => {
        this.setState({
          setOpen: true
        });
      };

      signUpUser = (e) => {
        e.preventDefault();
        console.log(this.state.email+ " | " + this.state.password + " | " + this.state.termsCheck)
        if(this.state.email != null && this.state.password != null && this.state.displayName != null){
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
         .then((userCredentials)=>{

             if(userCredentials.user){
               userCredentials.user.updateProfile({
                 displayName: `${this.state.displayName}`
               })
               var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  return <div>
  alert("Thanks for signing up! Please verify your email and refresh the page!")
  <Redirect to="/login" />
  </div>
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
             }
             
         })
         .catch(function(error) {
           alert(error.message);
         });


        }

        else {

        }

         
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

   <SignUp signInGoogle = {this.props.signInGoogle} handleChange={this.handleChange} handleClick={this.handleClick} signUpUser={this.signUpUser} />
   )
}
}

export default withRouter(SignUpLayout);