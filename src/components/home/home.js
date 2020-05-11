import React from 'react';
import Dashboard from '../dashboard/dashboard';
import { Button, Row, Col, Container } from 'react-bootstrap';
import history from '../../services/history';
import { useHistory } from 'react-router-dom';
import Test from './Test';
import NavBar from '../navbar/navBar2';
import SideBar from '../navbar/sideBar';

function Home(props){

  const history = useHistory();
  const navigateTo = () => history.push('/login');

    return (
      
      <div>
      
      
      { props.user != null
        ? <div>
          <NavBar signout={props.signout} user={props.user} />
        <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <SideBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                    <Dashboard user={props.user} signout={props.signout}/>
                    </Col> 
                </Row>

            </Container>
          
          </div>
        : <div>
        <h1>FreeToss8</h1>
        <br />
        <h3>Welcome to FreeToss8. Please login to go to continue.</h3>

        <Button onClick= {navigateTo} >Login</Button>
        <Button onClick= {props.signOut()} >Log Out</Button>
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