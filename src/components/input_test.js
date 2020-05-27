import React from 'react';
import Test from './test';
import {Link} from 'react-router-dom';

class Input extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            uid: '',
            onUid: false
        }
    }

    takeInput(e){
        return 
    }
    toggleUpload = () => {
        this.setState({
          onUid: !this.state.onUid
        })
      }

    handleChange(e) {
        this.setState({
           [e.target.name]: e.target.value
          
          });
        }

    render(){
        return(
            <div>
               {/* <input type="text" defaultValue={this.state.uid} onChange={this.handleChange} className="form-control" placeholder="Enter uid" name="uid"/>
            
            <Link to={{ pathname: "test/${this.state.uid}", uid:  `${this.state.uid}` }} >Enter</Link>

            <Test uid={this.state.uid}/>

            {this.state.onUid &&
            <Test uid={this.state.uid}/>
            } */}
            </div>
        )
    }
}

export default Input;