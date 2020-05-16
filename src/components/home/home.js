import React from 'react';
import Dashboard from '../dashboard/dashboard';
import history from '../../services/history';
import { useHistory } from 'react-router-dom';
import Test from './Test';
import NavBar from '../navbar/navBar2';
import SideBar from '../navbar/sideBar';
import 'materialize-css/dist/css/materialize.min.css'


function Home(props){

  const history = useHistory();
  const navigateTo = () => history.push('/login');

    return (
      
      <div>
      
      
      { props.user != null
        ? <div>
          <NavBar signout={props.signout} user={props.user} />

          {/* <div className="container">
            <div className="row">
              <div className="col s12">Test</div>
              <div className="col s6">Test1</div>
              <div className="col s6">Test 2</div>
            </div>
          </div> */}

        {/* <Container style={{ padding: '100px'}}>
                <Row> */}
                    {/* <Col xs={2} id="sidebar-wrapper">      
                      {/* <SideBar /> */}
                    {/* </Col> */}
                    {/* <Col  xs={10} id="page-content-wrapper"> */}
                    <Dashboard user={props.user} signout={props.signout}/>
                    {/* </Col>  */}
                {/* </Row> */}

            {/* // </Container> */}
          
          </div>
        : <div>
        <h1>FreeToss8</h1>
        <br />
        <h3>Welcome to FreeToss8. Please login to go to continue.</h3>

        <a class="waves-effect waves-light btn"onClick= {navigateTo} >Login</a>
        <a class="waves-effect waves-light btn" onClick= {props.signOut()} >Log Out</a>
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