import {  useState } from "react";
import PhoneInput from "react-phone-input-2";
import { deleteUser, sendPasswordResetEmail, updateEmail } from "firebase/auth";
import { auth } from '../firebase';
import { actualizarUsuario, borrarUsuario } from "./ApiUsuario";
import { useNavigate } from "react-router";

const Profile = ({ usuario, setUsuario }) => {
    const [userProfile, setUserProfile] = useState(usuario);
    const [edit, setEdit] = useState(false);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const navigate = useNavigate();
    const changeInput = (e) => {
        setUserProfile({ ...userProfile, [e.target.name]: e.target.value })


    }

    const deleteUsuario = async (e) => {
        try {
            deleteUser(auth.currentUser).then(async (res)=>{

                
                const resultado = await borrarUsuario(usuario)
                setUserProfile(resultado)
                setUsuario(null);
                setEdit(false);
                navigate("/logout");
            }).catch((error)=>{
                alert(error)
            });
            

        } catch (error) {
            console.log(error);
            if ((error.name && error.name === "AxiosError" && error.response.status !== 500) || (!error.name)) {
                alert(error.message)

            }
        }
    }

    const cambiarPW = async (e) => {
        try {
            sendPasswordResetEmail(auth, usuario.correo).then(()=>{
                alert("Se ha enviado un correo para cambiar su contraseña")
            }).catch((error)=>{
                alert(error.message)
            })
        } catch (error) {
            alert(error.message)
        }
    }

   
    const updateUsuario = async (e) => {
        
        if(!edit){
            setEdit(!edit);
            return;
        }
        e.preventDefault();

        try {
            updateEmail(auth.currentUser, userProfile.correo).then(async (res)=>{

                let userApi = userProfile;
                userApi.registro = userApi.registro.toISOString().split(".")[0];
                userApi.telefono = userApi.telefono.slice(1)

                const resultado = await actualizarUsuario(userApi);
                setUserProfile(resultado)
                setUsuario(resultado);
                setEdit(false);
            }).catch((error)=>{
                alert(error)
            });
            

        } catch (error) {
            console.log(error);
            if ((error.name && error.name === "AxiosError" && error.response.status !== 500) || (!error.name)) {
                alert(error.message)

            }
        }

    }

    return (
        <>
            <div className="m-5 w-50">
                <div className="mb-3 row">
                    <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={changeInput} name="nombre" readOnly={!edit} className={edit ? "form-control" : "form-control-plaintext"} id="nombre" value={userProfile.nombre} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="telefono" className="col-sm-2 col-form-label">Telefono</label>
                    <div className="col-sm-10">
                        <PhoneInput
                            country={'co'}
                            inputProps={{
                                name: 'telefono',
                            }}
                            value={userProfile.telefono}
                            disabled={!edit}
                            inputClass={edit ? "form-control" : "form-control-plaintext"}
                            inputStyle={{ width: "100%" }}
                            onChange={v => changeInput({ target: { name: "telefono", value: v } })}
                            enableSearch={true}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="correo" className="col-sm-2 col-form-label">Correo</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={changeInput} name="correo" readOnly={!edit} className={edit ? "form-control" : "form-control-plaintext"} id="correo" value={userProfile.correo} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="registro" className="col-sm-2 col-form-label">Registro</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={changeInput} name="registro" readOnly={true} className={"form-control-plaintext"} id="registro" value={userProfile.registro.toLocaleDateString("es-419", options)} />
                    </div>
                </div>
                {
                    edit ?
                    <>
                    <button className="btn btn-primary" onClick={updateUsuario}>Guardar Cambios</button>
                    <button className="btn btn-primary mx-3" onClick={() => setEdit(!edit)}>Cancelar</button>
                    </>
                    :
                    <>
                     <button className="btn btn-primary" onClick={() => setEdit(!edit)}>Editar Perfil</button>
                    <button className="btn btn-primary mx-3" onClick={deleteUsuario}>Borrar</button>
                    </>
                }
                <button className="btn btn-primary mx-3" onClick={cambiarPW}>Cambiar Contraseña</button>
            </div>
        </>
    )
}

export default Profile;