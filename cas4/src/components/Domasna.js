import React from 'react';
import PropTypes from 'prop-types';
import "./../css/Domasna.css";

export const Domasna = ({listaNaFilmovi}) => {

    console.log(listaNaFilmovi);
    return(
        <div id="domasna">
            <h2 id="domasna-title">Domasna</h2>
            {listaNaFilmovi.map((film,i)=>{
                return(
                    <div key={i}>
                        <h2>Title: {film.name}</h2>
                        <h3>Genre: {film.genre}</h3>
                        <p>Release year: {film.year}</p>
                        <a href={film.imdbLink} target="_blank" rel="noreferrer">Go to IMDB</a>
                        <br/>
                        <img src={film.imageUrl} alt={film.name} width="200" height="250" />
                    </div>
                )
            })}
        </div>
    )
}

Domasna.propTypes = {
    listaNaFilmovi: PropTypes.arrayOf(PropTypes.object).isRequired
}