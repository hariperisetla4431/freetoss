import React from 'react';
import "./signup2.css";
import {Button } from 'react-bootstrap';
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
          password: ''  
        }
      }
    
    
      signUpUser = (e) => {
        e.preventDefault();
      
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
            const user = result.user;
      console.log(user)
        }).catch(function(error) {
          
            // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // ...
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
                     <input type="text" name="name"   className="form-control my-input" id="name" placeholder="Name" />
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
                  <div className="form-group">
                     <a className="btn btn-block g-button" href="#">
                     <i className="fa fa-google"></i> Sign up with Google
                     </a>
                  </div>
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