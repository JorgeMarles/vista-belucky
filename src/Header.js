import { Link } from 'react-router-dom';
import logo from "./img/logo.jpg"
import NavBar from './Usuario/NavBar';
export default function Header({ usuario }) {
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
                                <li className="nav-item mx-3 hover-resize">
                                    <Link className="nav-link" to={`/`} >Página Principal</Link>
                                </li>
                                <li className="nav-item mx-3 hover-resize">
                                    <Link className="nav-link" to={"/about"}>Sobre Nosotros</Link>
                                </li>
                                <li className="nav-item mx-3 hover-resize">
                                    <Link className="nav-link" to={"/contact"}>Contáctanos</Link>
                                </li>
                                <li className='nav-item mx-3'>
                                    {
                                        usuario ?
                                            <NavBar user={usuario} />
                                            :
                                            <div className='hover-resize'>
                                                <Link className="nav-link" to={`/login`} >Iniciar Sesión</Link>
                                            </div>
                                    }
                                </li>
                                {
                                    !usuario ? <li className='nav-item mx-3 hover-resize'>
                                        <Link className="nav-link" to={`/signup`} >Registrarse</Link>
                                    </li> : ""
                                }
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>

        </>
    );
}

/**
 * 


 */