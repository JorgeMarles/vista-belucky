import React, { useState, useRef } from 'react';
import './Background.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                navigate("/")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

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
                                        <form onSubmit={onLogin}>
                                            <h2 className="fw-bold mb-2 text-uppercase">Iniciar sesión</h2>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="email">Correo Electrónico</label>

                                                <input type="email" id="email" name='email' onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" />
                                            </div>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="password">Contraseña</label>

                                                <input type="password" id="password" name='password' onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" />
                                            </div>

                                            <p className="small mb-1 pb-lg-2"><a className="text-50" href="#!">¿Olvidaste tu Contraseña?</a></p>

                                            <button className="btn btn-primary btn-lg px-5" type="submit">Iniciar sesión</button>
                                        </form>
                                        <p className="mb-0">No tienes una cuenta? <Link className="text-50 fw-bold" to={`/signup`}>Regístrate</Link>
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