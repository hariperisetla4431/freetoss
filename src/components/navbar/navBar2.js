import React from 'react';
import {NavLink} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import { LinkContainer, Link } from "react-router-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/Navbar';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';
import 'materialize-css/dist/css/materialize.min.css'
import './navbar.css'
import SideBar from './sideBar'

function NavBar(props){
    return (
      
        <div>
      <div class="navbar-fixed">
      
      <nav class="nav-wrapper indigo">
      <SideBar />
        <div class="container">
          
          <a href="#" class="brand-logo">Site Title</a>
          <a href="#" class="sidenav-trigger" data-target="mobile-links">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><NavLink to="/login">Login</NavLink></li>
     <li><NavLink to="/login" onClick={props.signout} >Logout</NavLink></li>
            {/* {
          props.user &&
          <a to="/login" onClick = {props.signout} >
          <Nav.Link onClick={props.signout}>Log Out</Nav.Link>
                  </a>
          
  
        } */}
          </ul>
        </div>
      </nav>
    </div>
  
    {/* //     <nav className="nav-wrapper grey darken-3">
        
    // <div className="container">

    // <a href="#" className="left brand-logo">FreeToss8</a>
    // <a href="#" className="sidebar-trigger">
    //   <i className="material-icons">menu</i>
    // </a>
      
    //   <ul id="nav-mobile" className="right hide-on-med-and-down">
    //     <li><NavLink to="/login">Login</NavLink></li>
    //     <li><NavLink to="/login" onClick={props.signout} >Logout</NavLink></li>
    //     <li><a href="collapsible.html">JavaScript</a></li>
    //   </ul>
    // </div> */}

    <ul class="sidenav" id="mobile-links">
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Contact</a></li>
  </ul>
{/* <Navbar bg="dark" variant="dark" expand="lg" >
    <LinkContainer to="/login">
  <Navbar.Brand href="#home">FreeToss8</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/">
    <Nav.Link>Home</Nav.Link>
            </LinkContainer>
      
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    <Nav>
    {
          props.user &&
          <LinkContainer to="/login" onClick = {props.signout} >
          <Nav.Link onClick={props.signout}>Log Out</Nav.Link>
                  </LinkContainer>
          
  
        }
        {
          !props.user &&
          <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
        
        }


            <LinkContainer to="/signup">
    <Nav.Link >Sign Up</Nav.Link>
            </LinkContainer>
    </Nav>

    <Form inline> */}

        
{/*      
    </Form>
  </Navbar.Collapse>
</Navbar> */}

     </div>  
      
    )
  }

  export default NavBar;

