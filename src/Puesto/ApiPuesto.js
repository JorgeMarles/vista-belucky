import { processUserJSON } from "../Usuario/ApiUsuario"
import { processRifaJSONVO } from "../Rifa/ApiRifa";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;
const appname = process.env.REACT_APP_API_APPNAME;

export const processPuestoJSONVO = (obj) => {
    if (!obj.puesto) {
        return processPuestoJSONIndividual(obj)
    }
    let x;
    if (isArray(obj)) {
        x = [];
        obj.forEach(element => {
            x.push(processPuestoJSONVO(element))
        })

    } else {
        x = {};
        x.id = obj.id;
        x.numPuesto = obj.numPuesto;
        x.rifa = processRifaJSONVO(obj.rifa)
        x.usuario = processUserJSON(obj.usuario)
    }
    return x;
}

const isArray = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

/*
"id": 7,
        "numPuesto": 52,
        "rifa": {
            "descripcion": "Una rifa de prueba22",
            "fin": "2023-06-08T03:01:00",
            "id": 15,
            "inicio": "2023-06-15T03:01:00",
            "nombre": "Rifa de prueba2",
            "premio": "5000",
            "puestos": 3,
            "usuario": {
                "correo": "wfvje@gmail.com",
                "nombre": "Karelise Quintero",
                "registro": "2023-06-20T01:45:29",
                "telefono": "573124567897",
                "uid": "iEmSJ7zaZ5Z2OMX1RPrpKdn4yKH3"
            },
            "valorPuesto": 20002
        },
        "usuario": {
            "correo": "wfvje@gmail.com",
            "nombre": "Karelise Quintero",
            "registro": "2023-06-20T01:45:29",
            "telefono": "573124567897",
            "uid": "iEmSJ7zaZ5Z2OMX1RPrpKdn4yKH3"
        }
*/

const processPuestoJSONIndividual = (obj) => {
    let x;
    if (isArray(obj)) {
        x = [];
        obj.forEach(element => {
            x.push(processPuestoJSONIndividual(element))
        })

    } else {
        x = {};
        x = {};
        x.id = obj.id;
        x.numPuesto = obj.numPuesto;
        x.rifa = processRifaJSONVO(obj.rifa)
        x.usuario = processUserJSON(obj.usuario)
    }

    return x;
}

export const consultarPuestosDe = async (usuario) => {
    const link = `${url}/${appname}/api/apipuesto/puesto/user/${usuario.uid}`;

    const respuesta = await axios.get(link);
    return await processPuestoJSONVO(respuesta.data);
}

export const consultarPuestosEn = async (rifa) => {
    const link = `${url}/${appname}/api/apipuesto/puesto/rifa/${rifa.id}`;

    const respuesta = await axios.get(link);
    return await processPuestoJSONVO(respuesta.data);
}


/*
{
    "puesto": {
        "numPuesto": 4
    },
    "rifa": {
        "id":21
    },
    "usuario": {
        "uid": "iEmSJ7zaZ5Z2OMX1RPrpKdn4yKH3"
    }
}

*/

const passToBack = (numPuesto, rifa, usuario) => {
    return {
        puesto: {
            numPuesto: numPuesto
        },
        rifa: {
            id: rifa.id
        },
        usuario: {
            uid: usuario.uid
        }
    }
}

export const anotarEnRifa = async (numPuesto, rifa, usuario) => {
    const link = `${url}/${appname}/api/apipuesto/puesto`;
    const data = passToBack(numPuesto, rifa, usuario);
    //console.log(data);
    await axios.post(link, data);
}

export const borrarPuesto = async (puesto) => {
    const link = `${url}/${appname}/api/apipuesto/puesto/${puesto.id}`
    await axios.delete(link);
}