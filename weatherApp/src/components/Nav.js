import React from 'react'
import { Link } from 'react-router-dom'
import "./../assets/css/Nav.css"
export function Nav() {
    return (
        <ul>
            <li><Link to="/search-cities">Search Cities</Link></li>
            <li><Link to="/local-weather">Local Weather</Link></li>
        </ul>
    )
}
