import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Background.css';

const Principal = () => {

    return (
        <div className='bg-Principal'>
            <ol>
                <div className='dividor'>

                    <div className='textexIzq'>
                        <h1 className='titulo'>Tu sitio preferido</h1>
                        <h3 className='textInfo'>BeLucky es un sitio sencillo lleno de posibilidades</h3>
                    </div>

                    <div className='cmdDer'>
                        <Link to={"/about"}>
                            <button className='buttomDer'>Sobre<br></br>Nosotros</button>
                        </Link>
                    </div>
                </div>


                <div className='dividor'>

                    <div className='cmdIzq'>
                        <Link to={"/login"}>
                            <button className='buttomIzq'>Iniciar <br></br>Sesion</button>
                        </Link>
                    </div>

                    <div className='textexDer'>
                        <h1 className='titulo'>Todos somos ganadores</h1>
                        <h3 className='textInfo'>El exito es para aquellos que toman el riesgo</h3>
                    </div>


                </div>


                <div className='dividor'>

                    <div className='textexIzq'>
                        <h1 className='titulo'>Unete a nosotros</h1>
                        <h3 className='textInfo'>Comienza hoy mismo y entra al mundo de BeLucky</h3>
                    </div>

                    <div className='cmdDer'>
                        <Link to={"/signup"}>
                            <button className='buttomDer'>Registrarse</button>
                        </Link>
                    </div>
                </div>


                <div className='dividor'>

                    <div className='cmdIzq'>
                        <Link to={"/contact"}>
                            <button className='buttomIzq'>Contactanos</button>
                        </Link>
                    </div>

                    <div className='textexDer'>
                        <h1 className='titulo'>Conoce mas sobre nuestros desarrolladores</h1>
                        <h3 className='textInfo'>Quiza podamos ayudarte a desarrollar algun producto en mente</h3>
                    </div>
                </div>
            </ol>
        </div>
    );
}

export default Principal;