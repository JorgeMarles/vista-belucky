import React, { useState, useRef, useEffect } from 'react';
import './Background.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, Outlet, useNavigate, useOutletContext} from 'react-router-dom'

const DashBoard = () => {
    const navigate = useNavigate();
    const usuario = useOutletContext();

    useEffect(()=>{
        console.log(usuario);

        if(!usuario.hasOwnProperty("uid")){
            console.log("en dash no tiene uid");
            navigate("/login")
        }
    },[])

    return (
        <>
            <div className='bg'>
                <div className='bg-dash'>

                </div>
            </div>
            <section className="vh-100 gradient-custom login-form">
                <div className="container py-2 h-75">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-light" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashBoard;