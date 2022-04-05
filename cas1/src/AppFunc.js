import React from 'react';
import { Goodbye } from './components/Goodbye';
import {Hello} from './components/Hello';
import './css/AppFunc.css';

function AppFunc(){

    return(
        <div className="filip" id="app-func">
            <h2>Functional Component Text</h2>
            <Hello/> 
            <Goodbye/>
            <p>{5+3}</p>
        </div>
    )
}

export default AppFunc;