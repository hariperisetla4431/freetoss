import React from 'react';
import firebase, {storageRef } from '../../services/firebase';


class FileRetrieval extends React.Component {

    
  // var listRef = storageRef.child(`${props.user.uid}/`);
  constructor(props) {
    super(props);

    // this.handleFolder = this.handleFolder.bind(this);

    this.state = {
      folderList: null,
      folderRef: null,
      itemList: null,
      folderRename: null,
      download: null,
      image: "image",
      pdf: "pdf",
      word: "word",
      
    }

    

  }

  componentDidMount() {

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


     handleClick = (e) => {
      e.preventDefault();
  
      const folderRename = []
  
      this.setState({
        folderRename: e.target.value
       
       });
  
    
    }

 
   
   handleFolderOpen = () => {
  const storageRef = firebase.storage().ref(`${this.props.user.uid}/${this.state.value}`);

    // const storageRef = firebase.storage().ref(this.state.folderRef);
  storageRef.listAll().then( res => {
     // for folders

    

    const folderList = [] 

     res.prefixes.forEach( folder => {
        console.log(folder);
        
        
        
        folderList.push(folder)
        

     })
     this.setState({ folderList: folderList});
     // for files like images

     const itemList = []

     res.items.forEach( item => {

        itemList.push(item)

     })
     this.setState({ itemList: itemList})
  })

  

}


 

  




  // const folderSelect = (e) => {

    

  //   this.setState({
  //     folderRename: `${this.props.user.uid}/${this.state.folderName.name}/`
  //   })

  //   const storageRef = firebase.storage().ref(this.state.folderRef);

  // }   

  
// var listRef = storageRef.child(`${props.user.uid}/`);



// // Find all the prefixes and items.
// listRef.listAll().then(function(res) {

//   const folderData = []

//   res.prefixes.forEach(function(folderRef) {
//     // All the prefixes under listRef.
//     // You may call listAll() recursively on them.


// console.log('Folders: ' + folderRef.toString())

//     const folders = folderRef.toString()

//     folderData.push(folders)

//   });

//   res.items.forEach(function(itemRef) {
//     // All the items under listRef.
//     console.log('Item Ref: ' + itemRef.toString());
//   });
// }).catch(function(error) {
//   // Uh-oh, an error occurred!
// });



render() {

    return(
        <div>

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
          onClick={this.handleFolderOpen}
          className="waves-effect waves-light btn"
        >
          Open
        </Button>



    <h1>Folders: </h1>
    <Table striped bordered hover size="sm" >



    <tbody>
      
    { 
      this.state.folderList &&
      this.state.folderList.map( (folderName, index ) => {
      return(

        
          
      
        <tr>
         <td> <h3>{index + 1}</h3></td>
         <td> <h3>{folderName.name}</h3></td>
         <td><h3>{folderName.path}</h3></td>
         <td> 
        <input
          type="button"
          defaultValue={folderName.name}
          onClick={this.handleClick}
        /> </td>
          </tr>
      
      
      )
    })}
    </tbody>
    </Table>
    <br />
    
    <h1>Files: </h1>

    <Table striped bordered hover size="sm" >
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    { 
      this.state.itemList &&
      this.state.itemList.map( (itemName, index ) => {
      return(

        
          
      
        <tr>
         <td> <h3>{index + 1}</h3></td>
         <td> <h3>{itemName.name}</h3></td>
         <td>{this.state.download}</td>
         <td> 
        <input
          type="button"
          defaultValue={itemName.name}
          onClick={this.handleClick}
        /> </td>
        
          </tr>
      
      
      )
    })}

{ 
      this.state.download &&
      this.state.download.map( (downloadLink ) => {
      return(

        <h1>{downloadLink.url}</h1>

      )
      }

      )}

</tbody>
      </Table>

      
  
  

        </div>
    )
}
}

export default FileRetrieval;