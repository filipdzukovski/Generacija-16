import React,{useState,useEffect} from 'react';
import {API_URL} from './../utils/constants';

export const Comments = () => {

    const [comments,setComments] = useState([]);

    useEffect(()=>{
        fetch(`${API_URL}/comments`)
            .then(res=>res.json())
            .then(json=>setComments(json))
            .catch(err=>alert(err))
    },[])

    return(
        <div id='comments'>
            {comments.length > 0 ? 
            <div>
                {comments.map(comm=>{
                    return(
                        <React.Fragment key={comm.id}>
                        <p>Name: {comm.name}</p>
                        <p>Email: {comm.email}</p>
                        <p>Body: {comm.body}</p>
                        </React.Fragment>
                    )
                })}
            </div>
             : <p>Comments Loading...</p>}
        </div>
    )
}