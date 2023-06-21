import React, { useState, useEffect } from 'react';
import '../Usuario/Background.css';
import { Link } from 'react-router-dom'
import { consultarRifasDe, consultarRifasParticipo } from './ApiRifa';
import ListaRifas from "./ListaRifas"


const DashBoard = ({ usuario }) => {
    const [myRifas, setMyRifas] = useState([])
    const [rifasParticipo, setRifasParticipo] = useState([])

    const getMyRifas = async () => {
        try {
            const x = await consultarRifasDe(usuario)
            console.log(x);

            setMyRifas(x);
        } catch (error) {
            console.log(error);
        }
    }

    const getRifasParticipo = async () => {
        try {
            const x = await consultarRifasParticipo(usuario)
            console.log(x);
            setRifasParticipo(x)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMyRifas();
        getRifasParticipo();
    }, [])

    return (
        <>
            <div className='bg'>
                <div className='bg-dash'>

                </div>
            </div>

            <section className="vh-100 gradient-custom login-form w-100">
                <div className="container py-2 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100 w-100">

                        <div className="w-100 h-75 col-12 col-md-8 col-lg-6 col-xl-5">

                            <div className="card h-100 bg-light" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center d-flex">
                                    <div className='col overflow-y-auto overflow-x-hidden me-2'>
                                        <div className='d-flex  justify-content-center align-items-center'>
                                            <h3>Mis rifas</h3>
                                            <Link to={"/newrifa"} className='btn btn-primary mx-3' >Nueva Rifa</Link>
                                        </div>
                                        <ListaRifas rifas={myRifas} />
                                    </div>
                                    <div className='col  overflow-y-auto  overflow-x-hidden ms-2'>
                                        <h3>Rifas en las que participo</h3>
                                        <ListaRifas rifas={rifasParticipo} />
                                    </div>
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