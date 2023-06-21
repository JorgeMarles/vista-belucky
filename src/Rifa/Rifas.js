import { useEffect, useState } from "react";
import { consultarRifas } from "./ApiRifa";
import ListaRifas from "./ListaRifas";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Rifas = ({ usuario }) => {

    const [rifas, setRifas] = useState([]);
    const [rifasAll, setRifasAll] = useState([])
    const [search, setSearch] = useState("");

    const getRifas = async () => {
        try {
            const x = await consultarRifas();
            console.log(x);

            setRifas(x);
            setRifasAll(x)
        } catch (error) {
            console.log(error);
        }
    }

    const actualizarBusqueda = () => {
        setRifas(rifasAll.filter(e => 
            e.nombre.toUpperCase().includes(search.toUpperCase()) || e.descripcion.toUpperCase().includes(search.toUpperCase())
        ))
    }

    useEffect(() => {
        getRifas();
    }, [])


    useEffect(()=>{
        
        actualizarBusqueda();

    }, [search])

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
                                    <div className='col overflow-y-auto overflow-x-hidden'>
                                        <div className='d-flex justify-content-around align-items-center'>
                                            <h3>Rifas</h3>
                                            <div className="input-group w-50">
                                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
                                                <input type="text" onChange={e => setSearch(e.target.value)} className="form-control" placeholder="Buscar..." value={search} />
                                            </div>
                                        </div>
                                        <ListaRifas rifas={rifas} />
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

export default Rifas;