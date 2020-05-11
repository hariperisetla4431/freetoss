import React, {Component } from 'react';
import {storage, db} from '../../services/firebase';
import "./fileupload.css";

import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';


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
      progress: 0
    };
  }




  // handleFoldername(e) {
    
  //     if (this.state.value == 'image') {
  //       return 
  //   }
  //   if (this.state.value == 'pdf') {
  //       console.log('Hello JPEG');
  //   }
  //   if (this.state.value == 'word') {
  //       console.log('Hello PDF');
  //   }
   
  // }

  handleFilename(e) {
    this.setState({

        [e.target.name]: e.target.value
     
    })
  }
  
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      this.setState(() => ({ image
        
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
          <br/>
          <h2 className="green-text">React Firebase Image Uploader</h2>
          <br/>
          <br/>
        

        
        

          <progress className="progress-design" value={this.state.progress} max="100" className="uploader" />
        
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            

            <Form>
  <Form.File 
    id="custom-file-translate-scss"
    label="Upload"
      
    
    lang="en"
    custom

    onChange={this.handleChange}
  />
  <p>
      {this.state.image.name}</p>
</Form>

            {/* <input 
            type="file" onChange={this.handleChange} /> */}
          </div>
          
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" name="filename" defaultValue={this.state.filename} onChange={this.handleFilename}/>
          </div>
        </div>

        <Form.Group  controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" custom onChange={(e) => this.setState({ value: e.target.value })}>
      
        <option>Choose FileType</option>
        <option value="image">Image</option>
        <option value="pdf">PDF</option>
        <option value="word">Word</option>
      </Form.Control>
    </Form.Group>

        <Button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </Button>
        <br />
        <br />
        {/* <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        /> */}
      </div>
    );
  }
}




export default FileUpload;
