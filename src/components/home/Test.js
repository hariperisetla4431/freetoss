import React from 'react';

function Test(props){
    return(
        <div>
            <h1>Test App</h1>
            <h2>{props.user.email}</h2>
        </div>
    )
}

export default Test;