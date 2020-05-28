import React from 'react';
import SignInLayout from '../components/signin/SignInLayout';
import Home from '../components/home/home';
import {Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SignUp from '../components/signup/SignUpLayout';

function LoginAuthenticate(props){

  const history = useHistory();
  const navigateTo = () => props.history.push('/dashboard');

    return (
      <div>
        

     {props.user &&
     
          
     <Redirect to="/dashboard" />
     
     }
               
          
  {!props.user &&
    
    <SignInLayout signInGoogle= {props.signInGoogle} />
     
  }
    
          

        


            
            </div>


        );
    }
    


export default LoginAuthenticate;


