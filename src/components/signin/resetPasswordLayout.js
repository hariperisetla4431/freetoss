import React from 'react';
import ResetPassword from './resetPassword';
import {withRouter} from 'react-router-dom';
import firebase, { db, auth } from '../../services/firebase';


class ResetPasswordLayout extends React.Component{
    
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state ={
            email: '',
            
        };
    }

    handleResetPassword = (e) => {
        var auth = firebase.auth();
var emailAddress = this.state.email;

auth.sendPasswordResetEmail(emailAddress).then(function() {
    alert("Password reset link is sent to your mail.")
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
    }

handleChange(e) {
    this.setState({
       [e.target.name]: e.target.value
      
      });
    }


    render(){

        return(
            <div>
            <h1>Reset Password</h1>
            
            <ResetPassword handleChange={this.handleChange} handleResetPassword={this.handleResetPassword} />
            </div>

        )
    }
}

export default withRouter(ResetPasswordLayout);