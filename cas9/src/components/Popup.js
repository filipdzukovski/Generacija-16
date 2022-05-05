import React,{useContext} from 'react';
import { GalleryContext } from '../utils/GalleryContext';

export const Popup = () => {

    const {selectedImage,setSelectedImage,deletePhoto} = useContext(GalleryContext);
    console.log(selectedImage)
    return(
        <div id="popup">
            <button className='close-popup' onClick={()=>{setSelectedImage("")}}>
                &times;
            </button>
            <button onClick={deletePhoto} className='delete-photo'>
                Del
            </button>
            <div className='popup-container'>
                <img src={selectedImage.url} alt=""/>
            </div>
        </div>
    )
}