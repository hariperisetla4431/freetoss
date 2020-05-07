import React from 'react';
import SignIn from '../components/signin/SignIn';
import Home from '../components/home/home';
import {Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SignUp from '../components/signup/signup2';

function LoginAuthenticate(props){

  const history = useHistory();
  const navigateTo = () => props.history.push('/dashboard');

    return (
      <div className="container ">
        

     
               <div>      
         <Home  user={props.user}/>
         </div>
          
  
    
          <div>
          <SignIn signinGoogle= {props.signinGoogle} />
           </div>

        


            
            </div>


        );
    }
    


export default LoginAuthenticate;


