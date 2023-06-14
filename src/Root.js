import { Outlet } from 'react-router';
import './Header.css';
import logo from "./img/logo.jpg";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';

function Root() {
  const navigate = useNavigate();
  let [usuario, setUsuario] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUsuario(user);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out")
      }
    });

  }, [])

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate(0);
      
      console.log("Signed out successfully")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-header">
        <div className="container-fluid">
          <Link className="nav-link" to={`/`}  >

            <div className='d-flex align-items-center'>
              <img src={logo} width={150} />
              <h1>BeLucky</h1>

            </div>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to={`/`} >Página Principal</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contactanos</a>
                </li>
                {
                  usuario.uid ?
                    <li className="nav-item">
                      <button className='nav-link' onClick={logOut}>Cerrar Sesión</button>
                    </li>
                    :
                    <li className="nav-item">
                      <Link className="nav-link" to={`/login`} >Iniciar Sesión</Link>
                    </li>


                }

              </ul>
            </span>
          </div>
        </div>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
