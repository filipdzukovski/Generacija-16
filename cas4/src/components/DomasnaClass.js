import React from 'react';
import PropTypes from 'prop-types';

export class DomasnaClass extends React.Component {

    render(){
        return(
            <div id="domasna-class">
                <h2>Domasna Class Component</h2>
                {this.props.listaNaFilmovi.map((film,i)=>{
                    return(
                        <div key={i}>
                            <h2>{film.name}</h2>
                            <h3>{film.genre}</h3>
                            <p>{film.year}</p>
                            <a href={film.imdbLink} target='_blank' rel="noreferrer">Go to IMDB</a>
                            <br/>
                            <img src={film.imageUrl} alt={film.name} width={300} height={300} />
                        </div>    
                    )
                })}
            </div>
        )
    }

}

DomasnaClass.propTypes = {
    listaNaFilmovi: PropTypes.arrayOf(PropTypes.object).isRequired
}