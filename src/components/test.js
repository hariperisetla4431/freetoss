import React from 'react';
import firebase from '../services/firebase';
// import 'materialize-css/dist/css/materialize.min.css'
import TestLayout from './test copy'
import "./test.css";







// LAYOUT LAYOUT LAYOUT









class Test extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      itemList: [""],
      download: [""]     
    } 
}

  componentDidMount() {
     
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
    <td>{index+1}</td>
    <td>{ele.name}</td>
    <td><a href={this.state.download[index]} target="_blank">{ele.name}</a></td>
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
            <div>
                <h1>Test App</h1>
                {/* <Link to={location.pathname}>Open</Link> */}
                <h1>{match.params.id}</h1>
                {/* <h1>{this.props.location.pathname}</h1> */}
                <div>

{/* <Form.Group  controlId="formGridState">
      <Form.Label>State</Form.Label> */}
        {/* <divb class="input-field col s12">

      <select as="select" custom onChange={(e) => this.setState({ value: e.target.value })}>
      
        <option>Choose FileType</option>
        <option value="image">Image</option>
        <option value="pdf">PDF</option>
        <option value="word">Word</option>
      </select>
      </divb */}
    {/* </Form.Group>   */}

    {/* <button
          onClick={this.handleFolderOpen}
          className="waves-effect waves-light btn"
        >
          Open
        </button> */}



    {/* <h1>Folders: </h1>
    <table >



    <tbody>
      
    { 
      this.state.download &&
      this.state.download.map( (download, index ) => {
      return(

        
          
      
        <tr key={index}>
         <td> <h3>{index + 1}</h3></td>
         <td> <h3>{download.toString()}</h3></td>
         
         {/* <td> 
        <input
          type="button"
          defaultValue={folderName.name}
          onClick={this.handleClick}
        /> </td> 
          </tr>
      
      
      )
    })}
    </tbody>
    </table> */}
    <br />
    
    <h1>Files: </h1>

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

export default Test;