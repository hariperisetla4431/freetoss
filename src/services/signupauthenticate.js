import React from 'react';
import SignIn from '../components/signin/SignIn';
import Home from '../components/home/home';
import {Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SignUp from '../components/signup/signup2';

function SignUpAuthenticate(props){

  const history = useHistory();
  const navigateTo = () => props.history.push('/dashboard');

    return (
      <div className="container ">
        


{props.user &&
         <Home  user={props.user} />
}
                     

            
          {!props.user &&
                      <SignUp signinGoogle= {props.signinGoogle} signin = {props.signin} />

          }          



            
            </div>


        );
    }
    


export default SignUpAuthenticate;


