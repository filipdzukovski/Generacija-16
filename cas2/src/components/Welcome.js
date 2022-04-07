import React from 'react';

export function Welcome(props){
    console.log(props);
    return(
        <div className='welcome'>
           <p>Hi and Welcome to my App Your name is {props.name} {props.lastName}</p>
           {props.godini && <p>Age: {props.godini}</p> }
        </div>
    )
}