import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/Navbar';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';
import "./navbar.css"


function NavBar(props){
    return (
      <div>
        

<Navbar bg="dark" variant="dark" expand="lg" >
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

    <Form inline>

        
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button> */}
    </Form>
  </Navbar.Collapse>
</Navbar>

        {/* <Button>
          <NavLink to="/">Home</NavLink>
        </Button>
        {
          props.user &&
          <Button onClick={props.signout}>Sign Out</Button>
  
        }
        {
          !props.user &&
           <Button>
          <NavLink to="/login">Login</NavLink>
        </Button>
        
        }
        
        <Button>
          <NavLink to="/signup">Signup</NavLink>
        </Button> */}
        
      </div>
    )
  }

  export default NavBar;

