import axios from 'axios';
import { processUserJSON } from "../Usuario/ApiUsuario"
import { consultarPuestosDe } from '../Puesto/ApiPuesto';

const url = process.env.REACT_APP_API_URL;
const appname = process.env.REACT_APP_API_APPNAME;

export const processRifaJSONVO = (obj) => {

    let x;
    if (isArray(obj)) {
        if (obj.length > 0) {
            if (obj[0].rifa) {
                x = [];
                obj.forEach(element => {
                    x.push(processRifaJSONVO(element))
                })
                return x
            } else {
                return processRifaJSONIndividual(obj)
            }
        } else {
            return []
        }

    } else {

        if (obj.rifa) {
            x = {};
            x.id = obj.rifa.id;
            x.nombre = obj.rifa.nombre;
            x.descripcion = obj.rifa.descripcion;
            x.premio = obj.rifa.premio;
            x.puestos = obj.rifa.puestos;
            x.inicio = parseDate(obj.rifa.inicio)
            x.fin = parseDate(obj.rifa.fin)
            x.valorPuesto = obj.rifa.valorPuesto;

            x.usuario = processUserJSON(obj.usuario)
            return x;
        } else {
            return processRifaJSONIndividual(obj)
        }
    }
}

const processRifaJSONIndividual = (obj) => {
    let x;
    if (isArray(obj)) {
        if (obj.length > 0) {
            x = [];
            obj.forEach(element => {
                x.push(processRifaJSONIndividual(element))
            })
            return x;
        } else {
            return []
        }

    } else {

        x = {};
        x.id = obj.id;
        x.nombre = obj.nombre;
        x.descripcion = obj.descripcion;
        x.premio = obj.premio;
        x.puestos = obj.puestos;
        x.inicio = parseDate(obj.inicio)
        x.fin = parseDate(obj.fin)
        x.valorPuesto = obj.valorPuesto;

        x.usuario = processUserJSON(obj.usuario)
        return x;
    }

}

const passToVO = (obj) => {
    const ret = { rifa: obj, usuario: obj.usuario }
    ret.usuario.registro = ret.usuario.registro.toISOString().split(".")[0]
    return ret
}

const passToBack = (obj) => {
    let ret = obj;
    ret.usuario.registro = dateOrString(ret.usuario.registro)
    ret.inicio = dateOrString(ret.inicio)
    ret.fin = dateOrString(ret.fin)
    return ret
}


export const dateOrString = (obj) => {
    return isDate(obj) ? obj.toISOString().split(".")[0] : obj.split(".")[0]
}

const isArray = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

const isDate = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Date]';
}



const parseDate = (date) => {
    return new Date(date);
}

export const rifaId = async (id) => {
    const link = `${url}/${appname}/api/apirifa/rifa/${id}`;
    //console.log(link);

    const respuesta = await axios.get(link);
    return processRifaJSONVO(respuesta.data);

}

export const consultarRifas = async () => {
    const link = `${url}/${appname}/api/apirifa/rifa`;
    //console.log(link);

    const respuesta = await axios.get(link);
    return processRifaJSONVO(respuesta.data);
}

const extraerRifasDePuestos = (puestos) => {
    let rifas = [];
    puestos.forEach(element => {
        rifas.push(element.rifa)
    });
    return rifas;
}


export const consultarRifasParticipo = async (usuario) => {
    const rifasParticipo = await consultarPuestosDe(usuario);
    //console.log(link);
    const rifasRep = extraerRifasDePuestos(rifasParticipo)
    const rifas = rifasRep.filter((v, i, a) => a.findIndex(v2 => (v2.id === v.id)) === i)
    return rifas;
}

export const consultarRifasDe = async (usuario) => {
    const link = `${url}/${appname}/api/apirifa/rifa/of/${usuario.uid}`

    const respuesta = await axios.get(link);
    return processRifaJSONVO(respuesta.data)
}

export const actualizarRifa = async (rifa) => {
    const link = `${url}/${appname}/api/apirifa/rifa`;
    //console.log(link);
    const obj = passToBack(rifa);

    console.log("al back se le manda", JSON.stringify(obj));
    const respuesta = await axios.put(link, obj);
    return processRifaJSONVO(respuesta.data);
}

export const borrarRifa = async (rifa) => {
    const link = `${url}/${appname}/api/apirifa/rifa/${rifa.id}`;

    const respuesta = await axios.delete(link);
    return respuesta;
}

export const crearRifa = async (rifa) => {
    const link = `${url}/${appname}/api/apirifa/rifa`;
    const obj = passToVO(rifa);
    const respuesta = await axios.post(link, obj);
    rifa = processRifaJSONVO(respuesta.data)
    return rifa;
}



