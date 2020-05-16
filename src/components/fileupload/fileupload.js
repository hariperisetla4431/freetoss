import React, {Component } from 'react';
import {storage, db} from '../../services/firebase';
import "./fileupload.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import ReactDOM from 'react-dom';



class FileUpload extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilename = this.handleFilename.bind(this);
    this.state = {
      fakefilename: "Upload a file",
      image: null,
      filename: "",
      image: "image",
      pdf: "pdf",
      word: "word",
      url: "",
      progress: 0,
      onUpload: false,
      
    };
  }

  componentDidMount() {
  M.AutoInit();
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
    if (e.target.files[0]) {
      const image = e.target.files[0];

      this.setState(() => ({ image,
        onUpload: !this.state.onUpload
        
      }));
    }
  };


  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`${this.props.user.uid}/${this.state.value}/${this.state.filename}`).put(image);
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
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };
  render() {

  

    return (
      <div className="container">
          {/* <br/>
            <h2 className="green-text">React Firebase Image Uploader</h2>
          <br/>
          <br/> */}
        

          
          {/* <div className="file-path-wrapper">
            <input className="file-path validate" type="text" name="filename" defaultValue={this.state.filename} onChange={this.handleFilename}/>
          </div> */}

    
        <div className="file-field input-field">
          
            
          <div className="image-upload">
  <label htmlFor="file-input">
    {/* <img src="https://www.psdgraphics.com/file/3d-push-button.jpg"/> */}
    <FontAwesomeIcon className="addFiles"  icon="plus-circle" size="9x"    />
  </label>

  <input id="file-input" style={{display: 'none'}} type="file" onChange={this.handleChange}/>



 { this.state.onUpload &&
    <div>
      <div>
      <p>
      {this.state.image.name}</p>


            {/* <input 
            type="file" onChange={this.handleChange} /> */}
          </div>
          
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" name="filename" defaultValue={this.state.filename} onChange={this.handleFilename}/>
          </div>
        
          {/* <progress className="progress-design" value={this.state.progress} max="100" className="uploader" /> */}

<div className="input-field col s12">
    <select className='browser-default' onChange={(e) => this.setState({ value: e.target.value})} >
      <option defaultValue="" disabled selected>Choose your File Type</option>
      <option defaultValue="image">Image</option>
      <option defaultValue="pdf">PDF</option>
      <option defaultValue="word">Word</option>
    </select>
    {/* <label>Materialize Select</label> */}
  </div>
<br />
<br/>

<div className="progress">
      <div className="determinate" style={{width: `${this.state.progress}%`}}></div>
      <p>{this.state.uploadStatus}</p>
  </div>

          

          {
            this.state.progress == 100 ?
            <p>Successfully Uploaded!</p> : <div>
              {
                
                  this.state.progress == 0 ?
                  <p>Click Upload to upload the file!</p> : <p>Uploading... {this.state.progress}</p>
                
                  
              }
              </div>
          }
  
        <a
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </a>
        </div>
   
 }

  <br />
  
        <br />
        <br />
        </div>
        </div>
      </div>
    );
  }
}




export default FileUpload;
