import React, { useEffect, useState, useCallback } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsColletionRef = collection(db, "posts");

  const deletePost = useCallback(async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsColletionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [deletePost]);

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
        <div className="post">
          <div className="postHeader">
            <div className="title">
              <h1> {post.title} </h1>
            </div>
            <div className="deletePost">
              {isAuth && post.author.id === auth.currentUser.uid && (
              <button onClick={() => {
                deletePost(post.id)
                }}>🗑️</button>
              )}
            </div>
          </div>
          <div className="postTextContainer"> {post.postText} </div>
          <h3> Autor: {post.author.name}. </h3>
        </div>
        );
      })}
    </div>
  )
}

export default Home