import React, {Component} from 'react';
import Resume from './resume';

class ResumeLayout extends React.Component{
    
    constructor(props){
        super(props);
       
        this.state = {
          email: '',
          password: ''  
        }
    }
    render(){

        return(
            <div>
            <h1>Resume</h1>
            
            <Resume />
            </div>

        )
    }
}

export default ResumeLayout;