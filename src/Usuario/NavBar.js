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
            <li className='nav-item dropdown' onClick={changeShow}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.nombre}
                </a>
                <ul className={menuClass}>
                    <Link className="nav-link" to={`/dashboard`} >Panel Principal</Link>
                    <Link className="nav-link" to={`/`} >Mis Rifas</Link>
                    <Link className="nav-link" to={`/`} >Mis Puestos</Link>
                    
                    <hr className='dropdown-divider'></hr>
                    <Link className="nav-link" to={`/logout`} >Cerrar Sesión</Link>
                </ul>
            </li>
        </>
    );

}

export default NavBar;