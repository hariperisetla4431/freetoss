import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import { Button, Row, Col, Container } from 'react-bootstrap';
import FileUpload from '../fileupload/fileupload';
import Image from 'react-bootstrap/Image'
import "./dashboard.css";
import FileRetrieval from '../fileRetrive/fileRetrieval';

class Dashboard extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        onUpload: false,
        onFolders: false
      }
    }


    toggleUpload = () => {
      this.setState({
        onUpload: !this.state.onUpload
      })
    }

    toggleFolders = () => {
      this.setState({
        onFolders: !this.state.onFolders
      })
    }

    render() {
    return (
      <div> 
        <Row>
          <Col xs={12}>
          <h1> Welcome {this.props.user.displayName}</h1>
        <h3>{this.props.user.email}</h3>
        <Button onClick= {this.props.signout} >Log Out</Button>
        </Col>
        
        </Row>

        <br />
        <br />
<Row>
  <Col> 
        <Button onClick= {this.toggleUpload} >File Upload</Button>
        <br /><br />
        <Button onClick={this.toggleFolders} >My Files</Button>
        </Col>
        </Row>
      { this.state.onUpload && 
        <FileUpload user={this.props.user}/>
      }

        

      
        
        
        { this.state.onFolders && 
        <FileRetrieval user={this.props.user}/>
      }
        
        

      

        
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
}

  export default Dashboard;