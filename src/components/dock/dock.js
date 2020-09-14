import React from 'react';
import firebase from '../../services/firebase';
// import 'materialize-css/dist/css/materialize.min.css'
import "./dock.css";

class Dock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      itemList: [""],
      download: [""],
      user: `${this.props.match.params.id}`,
    email: '',
    password: ''      
    } 
}



  componentDidMount() {
     
    

    // const storageRef = firebase.storage().ref(`${this.props.match.params.id}/profile`);
    
    const storageRef = firebase.storage().ref(`${this.props.match.params.id}/profile`);

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
          

              
        // storageRef.listAll().then( res => {
        
        //   const download = []
        
        //   res.items.forEach( down => {
        //    down.getDownloadURL().then( url => {
        
        //  //  res.items.forEach( item => {
        
        //     download.push(url); 
        //    // console.log(url)
        //   })
        //   this.setState({ download: download})
        // })
        // })
        
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




 showTable = () => {
  
return this.state.itemList.map((ele,index) => {
  
let jsx = (
  <tr key={index}>
    <td data-th="Sl. No">{index+1}</td>
    <td data-th="Name">{ele.name}</td>
    <td data-th="URL"><a className="download" href={this.state.download[index]} target="_blank">View</a></td>
    {/* <td><a href={this.state.download[index]} target="_blank">{ele.name}</a></td> */}
    {/* <td><a href={this.state.download[index]} target="_blank">{this.state.download[index]}</a></td> */}
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


     handleClick = (e) => {
      e.preventDefault();
  
      const folderRename = []
  
      this.setState({
        folderRename: e.target.value
       
       });
  
    
    }

 
   
  //  handleFolderOpen = () => {

   



  //  }
  
    
    render(){

      const { match, location } = this.props;

      

        return(
            <div className="dock-container">
                <h1 className="dock-title">FreeToss Dock</h1>
                {/* <Link to={location.pathname}>Open</Link> */}
                <h3 className="dock-uid">{match.params.id}</h3>
                {/* <h1>{this.props.location.pathname}</h1> */}
                <h2 >{this.state.user.displayName}</h2>
            <div>
    <br />

    <table className="tableClass">
    <tbody>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Url</th>
            </tr>
          

          
          {this.showTable()}
          </tbody>
          
        </table>

        {/* <TestLayout /> */}
{/* 
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody> */}

      {/* <div id="post">

      </div>
      
      { 
      this.state.itemList &&
      this.state.itemList.map( (itemName, index) => {
      return(

        <div>

        <tr key={index}>
         <td >{index+1}</td>
         <td >{itemName.name }</td>
         <td ><a id = {index + 1}>{itemName.name}</a></td>
         {/* {console.log(itemName)} */}

         {/* </tr>
      

     
  </div> */}
      
{/* 
{ this.state.download &&
      this.state.download.map( (url, index) => {
      return(
        

<div>
        <img src={url} alt={url.name} width="50%"></img>
        <p>{url.name}</p>
        <br />
        </div>
      )
    })
  } */}
{/* { 
      this.state.download &&
      this.state.download.map( (url, index) => {
      return(
        document.getElementById('fileRefLink').href= url
        
      )
    })
    
    } */}
    {/* { 
      this.state.itemList &&
      this.state.itemList.map( (itemName, index) =>
    

         <td key={index}>{itemName.name}</td>
   
    )
    
    } */}
    
    {/* <tr>
    {
            
            this.state.download && this.state.itemList &&
            this.state.itemList.map( (itemName, index) => 
            
            this.state.download.map( (url, itemName ) => 
            
                <td>
                <p>{itemName.name}</p>
                <a href={url} target="_blank" key={index}>{url.toString()}</a>   
                </td>
           
            )
      )
    }
</tr> */}

{/* </tbody>
      </table> */}

        </div>
            </div>
        )
    }
}

export default Dock;