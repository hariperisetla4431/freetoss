import React from 'react';
import {Link, withRouter} from 'react-router-dom'

function Help(props){
    return(
        <div>
            <h2>Contact Us:</h2>
            
            <a style={{ fontSize: '20px' }} href="mailto: freetoss8@gmail.com" target="_blank">freetoss@gmail.com</a>
            <br/><br/>
            <h2>Report your issues at:</h2>
            <a style={{fontSize: '20px' }} href="https://github.com/hariperisetla4431/Freetoss/issues" target="_blank">Github Repository</a>
        </div>
    )
}

export default withRouter(Help);