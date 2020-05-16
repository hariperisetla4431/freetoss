import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
// import { Button, Row, Col, Container, Card, Form } from 'react-bootstrap';
import FileUpload from '../fileupload/fileupload';
import "./dashboard.css";
// import FileRetrieval from '../fileRetrive/fileRetrieval';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faFolderPlus } from '@fortawesome/fontawesome-free-solid'
import 'materialize-css/dist/css/materialize.min.css'
import MyFiles from '../../img/my-files-01.png'

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
      <div className="container">
      <div className="row">

        {/* <Container> 
        <Row>
          <Col xs={12}> */}
          

          

        {/* <h3>{this.props.user.email}</h3> */}
        {/* <Button onClick= {this.props.signout} >Log Out</Button> */}
        {/* </Col>
        <Col xs={12} align="center"> */}
        
           {/* <div style={{display: 'block'}} className="plus radius"> */}
           {/* <FontAwesomeIcon className="addFiles"  icon="plus-circle" size="9x"    />
    */}


        {/* <input style={{ size: '20rem', display: 'none'}} type="file" onChange={this.fileChangedHandler}  / >
     </div> */}




    

    {/* <i className="fas fa-plus"></i> */}

          
        {/* </Col>
        </Row>
        </Container> */}
        
        {/* <br />
        <br />
<Row>

  <Col>  */}
  
     
        {/* <Button onClick= {this.toggleUpload} >File Upload</Button>
        <br /><br />
        <Button onClick={this.toggleFolders} >My Files</Button> */}
        {/* </Col>
        </Row> */}
      
       
      

        

      
        
{/*         
        { this.state.onFolders && 
        <FileRetrieval user={this.props.user}/>
      } */}
        
        
      <div className="col s12">
        <h1 style={{ padding: "20px"}}> Welcome {this.props.user.displayName}</h1>
        
        </div>
      <div className="col s12 m6">
      <h3>Click to Add Files</h3>
        <FileUpload user={this.props.user}/></div>
      <div className="col s12 m6">
      <h3>Click to View Files</h3>
        <img src={MyFiles} alt="Logo" width="50%" /></div>
    </div>

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