import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function NavBar(props){
    return (
      <div>
        <Button>
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
        </Button>
        
      </div>
    )
  }

  export default NavBar;