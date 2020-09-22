import React, {Component } from 'react';
import {storage, db} from '../../services/firebase';
// import "./fileupload.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css/dist/js/materialize.min.js'
import ReactDOM from 'react-dom';
import { IconButton, Input } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';
import Upload from '../../img/upload.svg';
import UploadForm from './uploadForm';

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import {withRouter} from 'react-router-dom'
import {DropzoneArea} from 'material-ui-dropzone'
import firebase from '../../services/firebase';


class FileUpload extends Component {

  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleFilename = this.handleFilename.bind(this);
    this.state = {
      fakefilename: "Upload a file",
      image: null,
      ext: "",
      filename: "",
      image: "image",
      pdf: "pdf",
      word: "word",
      url: "",
      progress: 0,
      onUpload: true,
      // Extension: null
      // files: []
      
    };
  }

  componentDidMount() {
    
    firebase.firestore().collection('users/').doc(this.props.user.uid).set({
      username: this.props.user.displayName,
      
  })
  console.log('added name')
}


  toggleUploadDetails = () => {

   
    this.setState({
      onUpload: !this.state.onUpload
    })

  }
  
 

  handleFilename(e) {
    this.setState({

        [e.target.name]: e.target.value,
        
    })
  }
  
  handleChange = e => {
    var fileLimit = 30 * 1024 * 1024;

    var size = e.target.files[0].size;

    if(size <= fileLimit){
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ 
        image,
        // onUpload: !this.state.onUpload,
        
      }));
    }
  }
  else {
    alert('file size exceeded 30mb')
  }
  };

  // handleChange(files){
  //   this.setState({
  //     files: files
  //   });}


  // handleExtension = () => {
  //   const { image } = this.state;

    
  // }

  handleUpload = () => {

    const { image } = this.state;



    var Extension = `${this.state.image.name}`.substring(`${this.state.image.name}`.lastIndexOf('.') + 1).toLowerCase();
    
    console.log(Extension);
          if (Extension === "jpg" || Extension === "png" || Extension === "bmp" || Extension === "jpeg") {
            console.log('image')
              Extension = 'image'
          }
          else if (Extension === "pdf") {
            console.log('pdf')
              Extension = 'pdf'
          }
          else if (Extension === "doc" || Extension === "docx" || Extension === "docm" || Extension === "dot" || Extension === "dotm" || Extension === 'txt') {
            console.log('word')
              Extension = 'word'
            }
          else {
            console.log('other')
              Extension = 'other'
          }
    

console.log('upload')

var fileLimit = 30 * 1024 * 1024;





if(Extension !== ''){

console.log('inner ' + Extension)

  const uploadTask = storage.ref(`/${this.props.user.uid}/` + Extension + `/${this.state.image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
        alert(error);
      },
      
      
      () => {
        // complete function ...
        storage
          .ref(`${this.props.user.uid}/` + Extension)
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
    }

  };
  render() {

    return (
          
          <UploadForm handleChange={this.handleChange} handleUpload={this.handleUpload} name={this.state.image.name} progress={this.state.progress} />
    );
  }
}




export default withRouter(FileUpload);
