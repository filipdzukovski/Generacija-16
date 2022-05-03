import React,{useEffect,useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import {Posts} from './components/Posts';
import {Comments} from './components/Comments';
import { Nav } from './components/Nav';
import {Gallery} from './components/Gallery';
import {API_URL} from './utils/constants';


export function App(){

  const [posts,setPosts] = useState([]);
  const [photos,setPhotos] = useState([]);
  const [selectedImage,setSelectedImage] = useState({})

  function openPhoto(photo){
    setSelectedImage(photo);
  }

  function closePhoto(){
    setSelectedImage({});
  }

  useEffect(()=>{
    //fetch za posts
    fetch(`${API_URL}/posts`)
        .then(res=>res.json())
        .then(json=> setPosts(json))
        .catch(err=>alert(err))  
    //fetch za photos
    fetch(`${API_URL}/photos`)
        .then(res=>res.json())
        .then(json=>setPhotos(json))
        .catch(err=>alert(err))
  },[])

  return(
    <div id="app">
      <Nav/>
      <Routes>
        <Route path = "/posts" element={<Posts postList={posts}/>} />
        <Route path = "/comments" element={<Comments />} />
        <Route path="/gallery" element={
        <Gallery 
        listOfPhotos={photos}
        openPhoto={openPhoto}
        selectedImage={selectedImage.url}
        closePhoto={closePhoto}
        />
        } />
      </Routes>
    </div>
  )
}