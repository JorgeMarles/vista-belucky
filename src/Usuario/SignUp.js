import React, { useState } from 'react';
import './Background.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { crearUsuario } from './ApiUsuario'


const SignUp = ({setUsuario}) => {


    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const credencial = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("After dignup");
            const usuarioCreado = await crearUsuario({
                uid: credencial.user.uid,
                nombre: nombre,
                correo: email,
                telefono: telefono,
                registro: new Date().toISOString().split(".")[0]
            })
            console.log("After creado database");
            await setUsuario(usuarioCreado)
            console.log("After setuser");
        } catch (error) {
            console.log(error);
            if (error && error.response && error.response.status && error.response.status !== 500)
                alert(error.message)
        }
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
                                                <label className="form-label" htmlFor="nombre">Nombre Completo</label>

                                                <input onChange={(e) => setNombre(e.target.value)} type="text" id="nombre" name='nombre' className="form-control form-control-lg" />
                                            </div>

                                            <div className="form-outline mb-2">
                                                <label className="form-label" htmlFor="email">Teléfono</label>
                                                <PhoneInput
                                                    country={'co'}
                                                    inputProps={{
                                                        name: 'telefono',
                                                    }}
                                                    inputClass='form-control form-control-lg'
                                                    inputStyle={{ width: "100%" }}
                                                    enableSearch={true}
                                                    onChange={setTelefono}
                                                />
                                            </div>
                                            <button className="btn btn-primary btn-lg px-5" type="submit">Registrarse</button>
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