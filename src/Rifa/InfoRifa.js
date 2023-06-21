import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { actualizarRifa, borrarRifa, dateOrString, rifaId } from "./ApiRifa";
import Puestos from "../Puesto/Puestos";

const InfoRifa = ({ usuario }) => {
    const { id } = useParams();

    const [edit, setEdit] = useState(false);
    const [editable, setEditable] = useState(false)
    const [rifaForm, setRifaForm] = useState({
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

    const getRifa = async () => {
        try {
            const rifaObj = await rifaId(id);
            console.log(rifaObj, usuario);
            setRifaForm(rifaObj)
            console.log("editable: ", usuario && usuario.uid && rifaObj.usuario.uid === usuario.uid);
            setEditable(usuario && usuario.uid && rifaObj.usuario.uid === usuario.uid)
        } catch (error) {
            console.log(error);
        }
    }


    const onValueChange = (e) => {
        let x;

        if (e.target.type === 'datetime-local') {
            x = new Date(e.target.value).toISOString().split(".")[0]
        } else if (e.target.type === 'number') {
            x = parseInt(e.target.value)
            if (e.target.name === 'puestos' && x > 150) {
                return;
            }
        } else {
            x = e.target.value;
        }
        setRifaForm({ ...rifaForm, [e.target.name]: x })
    }

    const onSubmit = async (e) => {
        try {
            console.log(rifaForm);

            const r = await actualizarRifa(rifaForm);
            console.log(r);
            setEdit(false);
        } catch (error) {
            console.log(error)
        }
    }

    const onDelete = async (e) => {
        console.log(rifaForm);
        try {
            const r = await borrarRifa(rifaForm);
            console.log(r);
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
        console.log("desde submit, ", rifaForm);
    }

    useEffect(() => {
        getRifa();
    }, [])

    return (
        <>
            <div className='bg'>
                <div className='bg-dash'>

                </div>
            </div>
            <section className="vh-100 gradient-custom login-form">
                <div className="container py-2 h-75">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="card my-5 bg-light" style={{ borderRadius: "1rem" }}>
                                <div className="card-body text-center">
                                    <div className="m-5">
                                        <div className="overflow-y-auto overflow-x-hidden" style={{height:"65vh"}}>
                                            <h2 className="fw-bold w-100 mb-2 text-uppercase">{(editable && edit) ? "Editar" : "Ver"} Rifa</h2>
                                            <div className='row'>
                                                <div className='col'>
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="nombre"><b>Nombre</b></label>

                                                        <input type="text" id="nombre" name='nombre' onChange={onValueChange} readOnly={editable ? !edit : true} className={(editable && edit) ? "form-control" : "form-control-plaintext"} value={rifaForm.nombre} />

                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="descripcion"><b>Descripcion</b></label>

                                                        <textarea type="text" id="descripcion" name='descripcion' onChange={onValueChange} readOnly={editable ? !edit : true} className={(editable && edit) ? "form-control" : "form-control-plaintext"} value={rifaForm.descripcion} style={{ height: "136px" }}></textarea>
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="premio"><b>Premio</b></label>

                                                        <input type="text" id="premio" name='premio' onChange={onValueChange} readOnly={editable ? !edit : true} className={(editable && edit) ? "form-control" : "form-control-plaintext"} value={rifaForm.premio} />
                                                    </div>


                                                </div>
                                                <div className='col'>
                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="puestos"><b>Puestos</b></label>
                                                        <input onChange={onValueChange} type="number" id="puestos" name='puestos' max={150} readOnly={editable ? !edit : true} className={(editable && edit) ? "form-control" : "form-control-plaintext"} value={rifaForm.puestos} />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="inicio"><b>Inicio</b></label>

                                                        <input onChange={onValueChange} type="datetime-local" id="inicio" name='inicio' readOnly={editable ? !edit : true} className={(editable && edit) ? "form-control" : "form-control-plaintext"} value={dateOrString(rifaForm.inicio)} />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="fin"><b>Fin</b></label>

                                                        <input onChange={onValueChange} type="datetime-local" id="fin" name='fin' readOnly={editable ? !edit : true} className={(editable && edit) ? "form-control" : "form-control-plaintext"} value={dateOrString(rifaForm.fin)} />
                                                    </div>

                                                    <div className="form-outline mb-2">
                                                        <label className="form-label" htmlFor="valorPuesto"><b>Valor del Puesto</b></label>
                                                        <input onChange={onValueChange} type="number" id="valorPuesto" name='valorPuesto' readOnly={editable ? !edit : true} className={(editable && edit) ? "form-control" : "form-control-plaintext"} value={rifaForm.valorPuesto} />
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <h5>Usuario: {rifaForm.usuario.nombre}</h5>
                                                </div>
                                            </div>

                                            {
                                                editable ?
                                                    (edit) ?
                                                        <>
                                                            <button className="btn btn-primary" onClick={onSubmit}>Guardar Cambios</button>
                                                            <button className="btn btn-primary mx-3" onClick={() => editable ? setEdit(!edit) : false}>Cancelar</button>
                                                        </>
                                                        :
                                                        <>
                                                            <button className="btn btn-primary" onClick={() => editable ? setEdit(!edit) : false}>Editar Rifa</button>
                                                            <button className="btn btn-primary mx-3" onClick={onDelete}>Borrar</button>
                                                        </>
                                                    :
                                                    ""
                                            }
                                            <Puestos rifa={rifaForm} usuario={usuario} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default InfoRifa;