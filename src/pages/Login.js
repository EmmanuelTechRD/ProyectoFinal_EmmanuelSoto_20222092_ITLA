import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  }

  return (
    <div className='loginPage'>
      <p>Inicia sesión con Google para continuar...</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Iniciar Sesión con Google</button>
    </div>
  )
}

export default Login