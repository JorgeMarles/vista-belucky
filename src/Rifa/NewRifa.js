import React, { useState } from 'react';
import '../Usuario/Background.css';
import {useNavigate } from 'react-router-dom'
import { crearRifa } from './ApiRifa';


const NewRifa = ({ usuario }) => {
    const [rifa, setRifa] = useState({
        descripcion: "",
        fin: new Date(),
        inicio: new Date(),
        nombre: "",
        premio: "",
        puestos: 0,
        usuario: usuario,
        valorPuesto: 0
    })

    const navigate = useNavigate();

    const onValueChange = (e) => {
        let x;
        
        if(e.target.type==='datetime-local'){
            x = new Date(e.target.value).toISOString().split(".")[0]
        }else if(e.target.type === 'number'){
            x = parseInt(e.target.value)
            if(e.target.name === 'puestos' && x > 150){
                return;
            }
        }else{
            x = e.target.value;
        }
        setRifa({ ...rifa, [e.target.name]: x })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await crearRifa(rifa);
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
        }
        console.log(rifa);
    }

    return (
        <>
            <div className='bg'>
                <div className='bg-dash'>

                </div>
            </div>
            <section className="vh-100 gradient-custom login-form">
                <div className="container py-2 h-75">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10 col-md-10 col-lg-10 col-xl-10">
                            <div className="card mt-5 bg-light" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-2 md-2 mt-2 md-2 pb-2">
                                        <form onSubmit={onSubmit}>
                                            <h2 className="fw-bold mb-2 text-uppercase">Crear Rifa</h2>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="nombre">Nombre</label>

                                                        <input type="text" id="nombre" name='nombre' onChange={onValueChange} className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="descripcion">Descripcion</label>

                                                        <textarea type="text" id="descripcion" name='descripcion' onChange={onValueChange} className="form-control form-control-lg" style={{height:"136px"}}></textarea>
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="premio">Premio</label>

                                                        <input onChange={onValueChange} type="text" id="premio" name='premio' className="form-control form-control-lg" />
                                                    </div>

                                                    
                                                </div>
                                                <div className='col'>
                                                <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="puestos">Puestos</label>
                                                        <input onChange={onValueChange} type="number" id="puestos" name='puestos' max={150} className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="inicio">Inicio</label>

                                                        <input type="datetime-local" id="inicio" name='inicio' onChange={onValueChange} className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="fin">Fin</label>

                                                        <input onChange={onValueChange} type="datetime-local" id="fin" name='fin' className="form-control form-control-lg" />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="valorPuesto">Valor del Puesto</label>
                                                        <input onChange={onValueChange} type="number" id="valorPuesto" name='valorPuesto' className="form-control form-control-lg" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-lg px-5" type="submit">Guardar</button>
                                        </form>

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

export default NewRifa;