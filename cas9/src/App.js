import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Posts } from './components/Posts';
import { Comments } from './components/Comments';
import { Nav } from './components/Nav';
import { Gallery } from './components/Gallery';
import { API_URL } from './utils/constants';
import { GalleryContext } from './utils/GalleryContext';


export function App() {

  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState("")

  useEffect(() => {
    //fetch za posts
    fetch(`${API_URL}/posts`)
      .then(res => res.json())
      .then(json => setPosts(json))
      .catch(err => alert(err))
    //fetch za photos
    fetch(`${API_URL}/photos`)
      .then(res => res.json())
      .then(json => setPhotos(json))
      .catch(err => alert(err))
  }, [])

  function deletePhoto(){
    setPhotos([...photos.filter(item => item.id !== selectedImage.id)]);
    setSelectedImage("");
  }

  return (
    <div id="app">
      <Nav />
      <GalleryContext.Provider value={{selectedImage,setSelectedImage,deletePhoto}}>
        <Routes>
          <Route path="/posts" element={<Posts postList={posts} />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/gallery" element={
            <Gallery
              listOfPhotos={photos}
            />
          } />
        </Routes>
      </GalleryContext.Provider>
    </div>
  )
}