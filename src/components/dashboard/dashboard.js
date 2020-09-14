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

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



class Dashboard extends React.Component {

    constructor(props){
      super(props);

      

      this.state = {
        onUpload: false,
        onFolders: false,
        onHelp: false,
      }
    }

    toggleHelp = () => {
      this.setState({
        onHelp: !this.state.onHelp
      })
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


      <div>
                  <Grid item xs={12} md={12} lg={12}>
                              
                              <Typography align="center" variant="h3" style={{ padding: "20px"}}>Welcome {this.props.user.displayName}</Typography>
                              
                              </Grid>
                
                            <Grid item xs={12} md={6} lg={6}>
                            <h3>Click to Add Files</h3>
                        <FileUpload user={this.props.user}/>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                            <h3>Click to Retrieve Files</h3>
                            
                            <img src={MyFiles} alt="Logo" width="50%" />
                            </Grid>
                            </div>


    )
  }
}

  export default Dashboard;