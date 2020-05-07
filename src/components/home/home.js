import React from 'react';
import Dashboard from '../dashboard/dashboard';
import { Button } from 'react-bootstrap';
import history from '../../services/history';
import { useHistory } from 'react-router-dom';
import Test from './Test';

function Home(props){

  const history = useHistory();
  const navigateTo = () => history.push('/login');

    return (
      
      <div>
      
      
      { props.user != null
        ? <Dashboard user={props.user} />
        : <div>
        <h1>FreeToss8</h1>
        <br />
        <h3>Welcome to FreeToss8. Please login to go to the Dashboard</h3>

        <Button onClick= {navigateTo} >Login</Button>

        </div>
      }
    


      {/* {
          props.user &&

            <div>
          <h1>FreeToss8</h1>
          <Dashboard user={props.user} photoURL = {props.photoURL} email = {props.email} displayName = {props.displayName} uid = {props.uid}/>
          </div>
        }
        
        {
          !props.user &&
          <div>
          <h1>FreeToss8</h1>
          <br />
          <h3>Welcome to FreeToss8. Please login to go to the Dashboard</h3>

          <Button onClick= {navigateTo} >Login</Button>

          </div>
        } */}

      
        
      </div>
    )
  }

export default Home;