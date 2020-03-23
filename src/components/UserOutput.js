import React from 'react';
import './UserOutput.css';

const userOutput =  (props) => {
    return <div className="user-output">
                <p> User Name : <span className="name-style"> {props.name}</span>, Fun doing this!</p>
                <p> This is working!! </p>
            </div>
} 

export default userOutput;