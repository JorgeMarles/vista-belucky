import { useState } from 'react';
import '../Header.css';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
    const [state, setState] = useState(false);

    const menuClass = `dropdown-menu${state ? " show" : ""}`;

    const changeShow = () => {
        setState(!state);
    }

    return (

        <>
            <div className='dropdown' onClick={changeShow}>
                <a className="nav-link dropdown-toggle" role="button" href='#' data-bs-toggle="dropdown" aria-expanded="false">
                    {user ? user.nombre : "nada"}
                </a>
                <ul className={menuClass}>
                    <Link className="nav-link" to={`/rifas`} >Ver Rifas</Link>
                    <Link className="nav-link" to={`/dashboard`} >Mis Rifas</Link>
                    
                    <hr className='dropdown-divider'></hr>
                    <Link className="nav-link" to={`/profile`} >Mi perfil</Link>
                    <Link className="nav-link" to={`/logout`} >Cerrar Sesión</Link>
                </ul>
            </div>
        </>
    );

}

export default NavBar;