import React from 'react';

const userInput =  (props) => {
    const style= { 
        border: '3px solid blueviolet',
        padding: "15px",
        color: 'orangered',
        margin: '10px',
        fontSize: 'medium'


    }
    return <input 
    type="text" 
    style={style}
    onChange={props.changed}
    value={props.currentName} />
 
    
}

export default userInput;