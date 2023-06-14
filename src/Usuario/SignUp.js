import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Background.css';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
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
                            <div className="card mt-5 bg-light" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-2 md-2 mt-2 md-2 pb-2">
                                        <form onSubmit={onSubmit}>
                                            <h2 className="fw-bold mb-2 text-uppercase">Regístrate</h2>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="email">Correo Electrónico</label>

                                                <input type="email" id="email" name='email' onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" />
                                            </div>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="password">Contraseña</label>

                                                <input type="password" id="password" name='password' onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" />
                                            </div>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="nombre">Nombre</label>

                                                <input type="text" id="telf" name='nombre' className="form-control form-control-lg" />
                                            </div>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="email">Teléfono</label>
                                                <PhoneInput
                                                    country={'co'}
                                                    inputProps={{
                                                        name: 'phone',
                                                    }}
                                                    inputClass='form-control form-control-lg'
                                                    inputStyle={{width:"100%"}}
                                                    enableSearch = {true}

                                                />
                                            </div>
                                            <button className="btn btn-primary btn-lg px-5" type="submit">Iniciar sesión</button>
                                        </form>
                                        <p className="mb-0">Ya tienes una cuenta? <Link className="text-50 fw-bold" to={`/login`}>Inicia Sesión</Link>
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

export default SignUp;