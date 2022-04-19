import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({type,placeholder,value,onChange,name,mouseDown,mouseUp,setToggle}) => {
    
    return(
        <p>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
            {name === "password" && 
            <button type='button'
            className='eye-button'
            //  onClick={setToggle}
             onMouseDown={mouseDown} 
             onMouseUp={mouseUp} 
             onMouseLeave={mouseUp}>
                <i className={type === "password" ? "fa fa-eye-slash" : "fa fa-eye"}></i>
             </button>}
        </p>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    setToggle:PropTypes.func,
    mouseDown:PropTypes.func,
    mouseUp:PropTypes.func
}