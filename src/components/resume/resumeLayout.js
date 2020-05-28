import React, {Component} from 'react';

class Resume extends React.Component{
    
    constructor(props){
        super(props);
       
        this.state = {
          email: '',
          password: ''  
        }
    }
    render(){

        return(
            <div><h1>Resume</h1></div>
        )
    }
}

export default Resume;