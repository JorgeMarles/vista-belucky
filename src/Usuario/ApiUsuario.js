import axios from 'axios';

const url = process.env.REACT_APP_API_URL;
const appname = process.env.REACT_APP_API_APPNAME;

export const processUserJSON = (obj) => {
    const uid = obj.uid;
    const nombre = obj.nombre;
    const correo = obj.correo;
    const telefono = '+' + obj.telefono;
    const registro = parseDate(obj.registro);
    const usuarioReg = {
        uid: uid,
        nombre: nombre,
        telefono: telefono,
        registro: registro,
        correo: correo
    }
    return usuarioReg;
}

const parseDate = (date) => {
    return new Date(date);
}

export const usuarioUid = async (uid) => {
    const link = `${url}/${appname}/api/apiusuario/usuario/${uid}`;
    //console.log(link);

    const respuesta = await axios.get(link);
    return processUserJSON(respuesta.data);

}

export const usuarios = async () => {
    const link = `${url}/${appname}/api/apiusuario/usuarios`;
    //console.log(link);

    const respuesta = await axios.get(link);
    return respuesta.data;
}

export const actualizarUsuario = async (usuario) => {
    const link = `${url}/${appname}/api/apiusuario/usuario`;
    //console.log(link);

    const respuesta = await axios.put(link, usuario);
    return processUserJSON(respuesta.data);
}

export const borrarUsuario = async (usuario) => {
    const link = `${url}/${appname}/api/apiusuario/usuario/${usuario.uid}`;

    const respuesta = await axios.delete(link);
    return processUserJSON(respuesta);
}

export const crearUsuario = async (usuario) => {
    const link = `${url}/${appname}/api/apiusuario/usuario`;

    const respuesta = await axios.post(link, usuario);
    usuario = processUserJSON(respuesta.data);
    console.log(usuario);
    return usuario;
}

