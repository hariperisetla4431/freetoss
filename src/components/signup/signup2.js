import React from 'react';
import "./signup2.css";
// import {Button } from 'react-bootstrap';
import firebase, { db, auth } from '../../services/firebase';
import Authenticate from '../../services/authenticate';
import { Link } from 'react-router-dom';

class SignUp2 extends React.Component {
    constructor(props){
        super(props);
        this.signUpUser = this.signUpUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          email: '',
          password: '',  
          name: ''
        }
      }
    
    
      signUpUser = (e) => {
        e.preventDefault();
      

       
         // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((userCredentials)=> {
         // if(userCredentials.user){
         //   userCredentials.user.updateProfile({
         //     displayName: 'Frank S. Andrew'
         //   }).catch(function(error) {
         //   // Handle Errors here.
       
         //   var errorCode = error.code;
         //   var errorMessage = error.message;
         //   alert(errorMessage);
           
         // });
         // }
         
         firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
         .then((userCredentials)=>{
             if(userCredentials.user){
               userCredentials.user.updateProfile({
                 displayName: `${this.state.name}`
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


render() {
return (
<div className="container">
      <div className="col-md-6 mx-auto text-center">
         <div className="header-title">
            <h1 className="wv-heading--title">
               FreeToss8 Sign Up!
            </h1>
            <h4 className="wv-heading--subtitle">
               Create your free FreeToss8 Account for free.
            </h4>
         </div>
      </div>

      <div className="row">
          
         <div className="col-md-4 mx-auto">
             
            <div className="myform form ">
               <form action="" method="post" name="login">
                  <div className="form-group">
                     <input type="text" name="name" defaultValue={this.state.name} onChange={this.handleChange} className="form-control my-input" id="name" placeholder="Name" />
                  </div>
                  <div className="form-group">
                     <input type="email" name="email" defaultValue={this.state.email} onChange={this.handleChange}  className="form-control my-input" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                     <input type="password" name="password" defaultValue={this.state.password} onChange={this.handleChange} className="form-control my-input" placeholder="Password" />
                  </div>
                  <div className="text-center signup-btn">
                     <button type="submit" onClick={this.signUpUser} className=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
                  </div>
                  <div className="col-md-12 ">
                     <div className="login-or">
                        <hr className="hr-or" />
                        <span className="span-or">or</span>
                     </div>
                  </div>
                  
                  <a type="button" variant="light" className="google-button" onClick={this.props.signinGoogle} >
  <span className="google-button__icon">
    <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/></svg>
    </span>
  <span className="google-button__text">Sign up with Google</span>
</a>
                  <p className="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" className="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                  </p>

                  <p className="small mt-3">Already have an account? <Link to="/login" >Login here</Link>
                  </p>
               </form>
            </div>
         </div>
      </div>
   </div>
   )
}
}

export default SignUp2;