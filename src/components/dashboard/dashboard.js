import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FileUpload from '../fileupload/fileupload';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

function Dashboard(props){

    

    return (
      <div> 

        <h1>Welcome Home</h1>
        <h3>{props.user.email}</h3>


      </div>


    //     {/* {
    //     props.user &&
    //     <div className="container"> */}
    //       {/* <h2>{props.displayName }</h2>
    //         <h2>{props.user.email}</h2>
    //         <h2>{props.user.uid}</h2> */}

    //         {/* <Col xs={2} md={1} lg={1}>
    //   <Image src={props.user.photoURL} roundedCircle />
    // </Col> */}

    //         {/* <FileUpload user={props.user}/>
    //     </div> */}
        
    //     }
    //     {
    //       // !props.user &&
    //       // <Redirect to="/" />
    //     }
            
            
  

        
      // </div>
    )
  }

  export default Dashboard;