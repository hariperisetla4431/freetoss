import React from 'react';
import firebase from '../../services/firebase';
// import 'materialize-css/dist/css/materialize.min.css'
import "./retrieve.css";
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Link, withRouter} from 'react-router-dom'
import Input from '@material-ui/core/Input';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ViewFile from './viewFile';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ModalImage from "react-modal-image";


class Retrieve extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      itemList: [""],
      download: [""],
      user: `${this.props.user.uid}`,
    email: '',
    password: '',
    isOpen: false,      
    } 
}


  componentDidMount() {
     
    

    // const storageRef = firebase.storage().ref(`${this.props.match.params.id}/profile`);
    const storageRef = firebase.storage().ref(`${this.state.user}/${this.props.page}/`);

    storageRef.listAll().then( res => {

      const download = []
      
      res.items.forEach( down => {
        down.getDownloadURL().then( url => {
      
          download.push(url); 
          // console.log(url)
          if(res.items.length===download.length){
            this.setState({ download: download})
          }
        })
      })
    })

    firebase.auth().onAuthStateChanged((user) => {
  
      // User is signed in.
      this.setState({
        user: {
          // photoURL: user.photoURL,
          // email: user.email,
          displayName: user.displayName,
          displayImage: user.displayImage,
          uid: user.uid,
        } 
      })
  });
      
          // const storageRef = firebase.storage().ref(this.state.folderRef);
          storageRef.listAll().then( res => {
            // for folders
        
        
            const itemList = []
        
            res.items.forEach(function(item, urls)  {
              item.getDownloadURL().then( url => {
      
                //  res.items.forEach( item => {
               
                   itemList.push(url); 
                  // console.log(itemList)
                 })
      
      
          itemList.push(item)
            })
          this.setState({ itemList: itemList}) 
          
          const download = []
      
        res.items.forEach( down => {
         down.getDownloadURL().then( url => {
      
       //  res.items.forEach( item => {
      
          download.push(url); 
         // console.log(url)
        })
        this.setState({ download: download})
         
         
          //  this.setState({ itemUrl: itemUrl })
        })
      
      
      
      })
      
    

}


   viewFile = () => {
return <ViewFile
            alt="Here is the caption"
            small="example_img_small.jpg"
            medium="example_img_medium.jpg"
            large="example_img_large.jpg"
          />

   }

   handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log('cliked');
  };

 showTable = () => {
  
return this.state.itemList.map((ele,index) => {
  
let jsx = (
  <tr key={index}>
    <td data-th="Sl. No"><Typography component="div"><Box fontWeight="fontWeightBold" m={1}>
    {index+1}
      </Box></Typography></td>
    <td data-th="Name"><Typography component="div"><Box fontWeight="fontWeightBold" m={1}>
    {ele.name}
      </Box></Typography></td>
    <td data-th="URL">
 
    {/* <Button
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: '2', background: '#407bff' }}
        startIcon={<VisibilityIcon />}
        component="span"
        // onClick={() => {
        //   window.location = this.state.download[index];
        //   <ViewFile />
        //   // window.open(this.state.download[index], '_blank')
        // }}
        onClick={this.viewFile}
        >
          View
        </Button> */}
      <ViewFile fileurl={this.state.download[index]} name={ele.name} folder={this.props.page} />
      </td>
    <td data-th="Delete">
    <Button
        size="large"
        variant="contained"
        color="secondary"
        style={{ margin: '2' }}
        startIcon={<DeleteForeverIcon />}
        component="span"
        onClick={() => {
          let uid = this.props.user.uid;
        let folder = this.props.page;
        let name = ele.name;

        const storageRef = firebase.storage().ref();

        console.log(uid +'/' + folder + '/' + name)
        const dele = storageRef.child(uid +'/' + folder + '/' + name);

        // Delete the file
        dele.delete().then(function() {
         
          alert('File deleted successfully. Please reload the page to view the changes.');
          
          // File deleted successfully
        }).catch(function(error) {
          // Uh-oh, an error occurred!
        });
        }}
      >
        Delete
      </Button>
    </td>
    
  </tr>
)
// console.log(jsx);
return jsx

});

}

// // Get the download URL
// storageRef.getDownloadURL().then( res => {
//   // Insert url into an <img> tag to "download"

    
    

//     const download = []

//     res.forEach( url => {

//        download.push(url);

// })

// this.setState({ download: download});

// });


    //  handleClick = (e) => {
    //   e.preventDefault();
  
    //   const folderRename = []
  
    //   this.setState({
    //     folderRename: e.target.value
       
    //    });
  
    
    // }

 
   
  //  handleFolderOpen = () => {

   



  //  }
  
    
    render(){

        return(
            <div className="dock-container">



                <h1 className="dock-title" style={{ textTransform: 'uppercase' }} >{this.props.page} Folder</h1>
                {/* <Link to={location.pathname}>Open</Link> */}
                <h3 className="dock-uid">{this.props.user.uid}</h3>
                {/* <h1>{this.props.location.pathname}</h1> */}
                <h2 >{this.state.user.displayName}</h2>

            <div>
              <Link to="/documents" style={{ textDecoration: 'none' }}>
            <Button
            align= 'left'
        size="large"
        variant="contained"
        color="default"
        style={{ margin: '15px', background: '' }}
        startIcon={<ArrowBackIcon />}
        component="span"
        >
          Go Back
        </Button>
        </Link>
    <br />
    <table className="tableClass">
    <tbody>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Url</th>
              <th>Delete</th>
            </tr>
          

          
          {this.showTable()}
          
          </tbody>
          
        </table>
        
        </div>
            </div>
        )
    }
}

export default withRouter(Retrieve);