import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Rifa = ({ rifa }) => {
    return (
        <>
            <div className="card">
                <div className="m-2">
                    <div className="row">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-4 text-start text-truncate">
                                    <b>{rifa.nombre}</b>
                                </div>

                                <div className="col-8 text-start">
                                    <b>Inicio:</b> {rifa.inicio.toLocaleDateString("es-419", options)}
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-4 text-start text-truncate">
                                    <b>Premio:</b> {rifa.premio}
                                </div>
                                <div className="col-8 text-start">
                                    <b>Fin:</b> {rifa.fin.toLocaleDateString("es-419", options)}
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <Link to={`/rifa/${rifa.id}`}><button className="btn btn-primary"> <FontAwesomeIcon icon={faEye} inverse /> </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rifa;