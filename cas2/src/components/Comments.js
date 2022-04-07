import React from 'react';

export function Comments(props){
    console.log(props)
    return(
        <div className='comments'>
            {props.hasComments && <h2>Comments</h2>}
            {props.multipleComments ? <p>Some comments</p>
            : <p>Only a few Comments</p>
            }

        </div>
    )
}

//  if(uslov){ 
//      Napravi nesto
//    }
// else{
//      Napravi Nesto drugo
// }
// uslov ? Napravi Nesto : Napravi Nesto Drugo <- Ternary Operator 