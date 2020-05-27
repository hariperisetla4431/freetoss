import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
// import { Button, Row, Col, Container, Card, Form } from 'react-bootstrap';
import FileUpload from '../fileupload/fileupload';
import "./dashboard.css";
// import FileRetrieval from '../fileRetrive/fileRetrieval';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faFolderPlus } from '@fortawesome/fontawesome-free-solid'
// import 'materialize-css/dist/css/materialize.min.css'
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

    //  Copyright = () => {
    //   return (
    //     <Typography variant="body2" color="textSecondary" align="center">
    //       {'Copyright © '}
    //       <Link color="inherit" href="https://material-ui.com/">
    //         Your Website
    //       </Link>{' '}
    //       {new Date().getFullYear()}
    //       {'.'}
    //     </Typography>
    //   );
    // }

    render() {

      

    return (
      <div className="container">
        
      <div className="row">

      
        
        
      <div className="col s12">
        
        
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