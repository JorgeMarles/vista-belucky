import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Background.css';

const Login = () => {
    const [usuario, setUsuario] = useState({usuario: '', password: '' });

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(usuario);
        setUsuario({usuario: '', password: '' }); /*da la estructura del json*/
    };

    const login = async (usuario) => {
        try {
            console.log(usuario);
            await axios.post("http://localhost:8080/BeLucky/api/apiusuario/login", usuario, {
                headers: {
                    'Content-Type': 'application/json',
                },

            }).then(response => {
                console.log(response.data);
            });
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <>
            <div className='bg'>
                <div className='bg-user'>

                </div>
            </div>
            <section className="vh-100 gradient-custom login-form">
                <div className="container py-2 h-75">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-light" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-2 mt-md-2 pb-2">
                                        <form onSubmit={handleSubmit}>
                                            <h2 className="fw-bold mb-2 text-uppercase">Iniciar sesión</h2>

                                            <div className="form-outline mb-2">
                                                <input type="text" id="usuario" name='usuario' onChange={handleInputChange} className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="usuario">Usuario</label>
                                            </div>

                                            <div className="form-outline mb-2">
                                                <input type="password" id="password" name='password' onChange={handleInputChange} className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="password">Contraseña</label>
                                            </div>

                                            <p className="small mb-1 pb-lg-2"><a className="text-50" href="#!">¿Olvidaste tu Contraseña?</a></p>

                                            <button className="btn btn-primary btn-lg px-5" type="submit">Iniciar sesión</button>
                                        </form>
                                        <p className="mb-0">No tienes una cuenta? <a href="#!" className="text-50 fw-bold">Regístrate</a>
                                        </p>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;