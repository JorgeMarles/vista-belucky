import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contactanos.css';

const Contact = () => {
    const Enviar = (e) => {
        e.preventDefault();
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("celular").value = "";
        document.getElementById("mensaje").value = "";
        var notificacion = document.getElementById("notificacion");
        notificacion.style.display = "block";
    }

    const CerrarNotificacion = () => {
        var notificacion = document.getElementById("notificacion");
        notificacion.style.display = "none";
    }

    return (
        <div className='bg2'>
            <div className='izq'>
                <div className='cont'>
                    <h1 className='text'>Habla directamente con nosotros</h1>
                    <h3 className='text'>Haremos lo posible para ponernos en contacto lo antes posible</h3>

                    <form onSubmit={Enviar}>
                        <div className='entradas'>
                            <h5>Nombre</h5>
                            <input type='text' className='txtIn' id='nombre'></input>
                        </div>

                        <div className='entradas'>
                            <h5>Correo</h5>
                            <input type='text' className='txtIn' id='correo'></input>
                        </div>

                        <div className='entradas'>
                            <h5>Celular</h5>
                            <input type='text' className='txtIn' id='celular'></input>
                        </div>

                        <div className='entradas'>
                            <h5>Mensaje</h5>
                            <textarea type='text' className='txtMsg' id='mensaje'></textarea>
                        </div>

                        <button className='send' type='submit' >Enviar</button>
                    </form>
                </div>
            </div>

            <div className='der'>
                <div className='contDer'>
                    <div>
                        <h2 className='developers'>Desarrollado Por</h2>
                    </div>

                    <div className='Imagen'></div>
                    <div className='redes'>
                        <div className='app'>
                            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                                <button className='facebook'></button>
                            </a>
                        </div>
                        <div className='app'>
                            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                                <button className='ig'></button>
                            </a>
                        </div>
                        <div className='app'>
                            <a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <button className='wtp'></button>
                            </a>
                        </div>
                        <div className='app'>
                            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                                <button className='twt'></button>
                            </a>
                        </div>
                        <div className='app'>
                            <a href="http://tiktok.com" target="_blank" rel="noopener noreferrer">
                                <button className='tkt'></button>
                            </a>
                        </div>
                    </div>
                    <div className='redesSocialesInd'></div>
                </div>
            </div>

            <div className="toast align-items-center text-bg-info border-0" role="alert" aria-live="assertive" aria-atomic="true" id="notificacion" style={{ display: 'none' }}>
                <div className="d-flex">
                    <div className="toast-body">
                        Mensaje enviado con éxito.
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={CerrarNotificacion}></button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
