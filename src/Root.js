import { Outlet } from 'react-router';
import './Header.css';
import logo from "./img/logo.jpg";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';
import info from './Usuario/info'
import NavBar from './Usuario/NavBar';

function Root() {
  const navigate = useNavigate();
  let [usuario, setUsuario] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {

      if (user && user !== null && user!==undefined && user.uid) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUsuario(await info(user.uid))
        //setUsuario(inf);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out")
      }
    });

  }, [])


  return (
    <>

      <nav className="navbar navbar-expand-lg bg-header">
        <div className="container-fluid">
          <Link className="nav-link" to={`/`}  >

            <div className='d-flex align-items-center'>
              <img src={logo} width={150} alt='Logo' />
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
                  <a className="nav-link" href="/contact">Contáctanos</a>
                </li>
                {
                  usuario.uid ?
                  <NavBar user={usuario} />
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
        <Outlet context={usuario}/>
      </div>
    </>
  );
}

export default Root;
