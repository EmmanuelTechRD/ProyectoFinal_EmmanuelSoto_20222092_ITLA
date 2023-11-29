import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/iniciarsesion";
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/"> Inicio </Link>
        {!isAuth ? ( <Link to="/iniciarsesion"> Iniciar Sesión </Link> 
        ) : ( 
        <>
        <Link to="/crearpublicacion"> Crear Publicación </Link>
        <button onClick={signUserOut}> Cerrar la sesión </button>
        </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/iniciarsesion" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/crearpublicacion" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
