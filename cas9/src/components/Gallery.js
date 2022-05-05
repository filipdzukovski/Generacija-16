import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import {Popup} from './Popup';
import { GalleryContext } from '../utils/GalleryContext';

export const Gallery = ({listOfPhotos}) => {

    const {selectedImage,setSelectedImage} = useContext(GalleryContext);

    return(
        <div id="gallery">
            {listOfPhotos.slice(0,50).map(photo=>{
                return(
                    <div
                    className='image-holder'
                    onClick={()=>setSelectedImage(photo)}
                    key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                )
            })}
            {
                 selectedImage !== "" && 
                <Popup/>
            }
        </div>
    )
}

Gallery.propTypes = {
    listOfPhotos: PropTypes.arrayOf(PropTypes.object).isRequired
}