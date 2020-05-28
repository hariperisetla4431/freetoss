import React from 'react';
import Home from '../components/home/home';
import {Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SignUp from '../components/signup/SignUpLayout';

function SignUpAuthenticate(props){

  const history = useHistory();
  const navigateTo = () => props.history.push('/dashboard');

    return (
      <div>
        


{props.user &&

        <Redirect to="/dashboard" />
        //  <Home  user={props.user} signout={props.signout} />
}
                           
      {!props.user &&
      <SignUp signInGoogle = {props.signInGoogle} />
      }
    </div>
  );
}
    
export default SignUpAuthenticate;


