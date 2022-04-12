import React from 'react';
import PropTypes from 'prop-types';

export const Comments = ({ listOfComments,cifra }) => {

    console.log(cifra)
    return (
        <div id="comments">
            <h2>Comments</h2>
            <ol>
                {listOfComments.map((komentar, i) => {
                    return (
                        <li key={i}>
                            <p> Author:  {komentar.author} </p>
                            <p> Content: {komentar.content} </p>
                        </li> 
                    )
                })}
            </ol>
            <p>Cifra: {cifra}</p>
        </div>
    )
}

Comments.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.object).isRequired,
    cifra:PropTypes.number
}