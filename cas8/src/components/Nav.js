import React from 'react';
import {Link} from 'react-router-dom';

export function Nav(){

    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <ul>
                <li><Link to="/contact/us">Us</Link></li>
            </ul>
            <li><Link to="/class-component">Class Component</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>
    )
}