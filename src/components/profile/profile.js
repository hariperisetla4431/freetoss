import React from 'react';
// import "./signup2.css";
// import {Button } from 'react-bootstrap';
import firebase from '../../services/firebase';
import { withRouter, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import ProfileUpdater from './profileUpdater'

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.updateUser = this.updateUser.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
          email: '',
          password: '',  
          displayName: '',
          onAlert: false,
          // termsCheck: false
        }
      }
    
updateUser = (e) => {

    e.preventDefault();

    if(this.state.displayName != null){

    var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: `${this.state.displayName}`,
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
    alert('updated')
    window.location.reload();
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
    }
}


      signUpUser = (e) => {
        e.preventDefault();
             
      }

  handleChange(e) {
    this.setState({
       [e.target.name]: e.target.value
      });
  }

render() {
return (
    <div>
        <h1>Update your Display Name</h1>
        <ProfileUpdater handleChange={this.handleChange} updateUser={this.updateUser} />
            {/* <TextField id="outlined-basic" label="Display Name" variant="outlined" style={{ width: '100%'}} defaultValue={this.state.displayName} onChange={this.handleChange} />
            <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: '15px', background: '#407bff' }}
        startIcon={<PersonIcon />}
        component="span"
        onClick={this.updateUser}
        >
          Update
        </Button> */}
        </div>
//    <SignUp signInGoogle = {this.props.signInGoogle} handleChange={this.handleChange} handleClick={this.handleClick} signUpUser={this.signUpUser} />
   )
}
}

export default withRouter(Profile);