import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import firebase, {storageRef } from '../../services/firebase';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { IconButton, Input } from '@material-ui/core';
import Download from '../../img/download.svg';
import Upload from '../../img/upload.svg';

import {Link} from 'react-router-dom';


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


     
        <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Typography align="center" variant="h3" style={{ padding: "20px"}}>Welcome {this.props.user.displayName}</Typography>
                      <img src={this.props.user.displayImage} />
                  </Grid>
                
                  <Grid item xs={12} md={6} lg={6}>
                      <h3>Click to Add Files</h3>
                      <IconButton color="primary" aria-label="upload picture" component="span"  >
        <Link to="/upload">
        {/* <Icon color="primary" style={{ fontSize: 300 }}>add_circle</Icon> */}
        <img src={Upload} alt="myfile" width="100%" style={{ width: "192px" }} />
        </ Link>
        </IconButton>
                  </Grid>
                            
                  <Grid item xs={12} md={6} lg={6}>
                    <h3>Click to Retrieve Files</h3>
                    <IconButton color="primary" aria-label="upload picture" component="span" >
                      <Link to="/documents">
                        <img src={Download} alt="myfile" width="100%" style={{ width: "192px" }} />
                      </Link>
                    </IconButton>                
                    
                  </Grid>
                </Grid>
                           


    )
  }
}

  export default Dashboard;