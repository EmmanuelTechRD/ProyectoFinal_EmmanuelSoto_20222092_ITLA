import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsColletionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsColletionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth){
      navigate("/iniciarsesion")
    }
  })

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Crear una publicación:</h1>
        <div className="inputGp">
          <label for="titulo"> Título: </label>
          <input id="titulo" placeholder="Ingresa el título de tu publicación..." 
          onChange={(event) => { 
            setTitle(event.target.value); 
          }}/>
        </div>
        <div className="inputGp">
          <label for="contenido"> Contenido: </label>
          <textarea id="contenido" placeholder="Ingresa el contenido de tu publicación..."
          onChange={(event) => { 
            setPostText(event.target.value); 
          }}/>
        </div>
        <button onClick={createPost}>¡Crear post!</button>
      </div>
    </div>
  )
}

export default CreatePost