import axios from 'axios';


const info = async (uid) => {
    const link = `http://localhost:8080/BeLucky/api/apiusuario/usuario/${uid}`;
    //console.log(link);
    const processJSON = (obj) => {
        const uid = obj.uid;
        const nombre = obj.nombre;
        const correo = obj.correo;
        const telefono = '+' + obj.telefono;
        const registro = new Date(obj.registro);
        const usuarioReg = {
            uid: uid,
            nombre: nombre,
            telefono: telefono,
            registro: registro,
            correo: correo
        }
        return usuarioReg;
    }
    try {
        const respuesta = await axios.get(link);
        return processJSON(respuesta.data);
    } catch (error) {
        console.log("Error: "+error);
    }


}

export default info;