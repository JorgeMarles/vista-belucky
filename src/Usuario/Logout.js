
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from '../firebase';

const LogOut = ({setUsuario}) => {
    const navigate = useNavigate();
    useEffect(() => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUsuario(null);
            navigate(0);
            navigate("/")
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }, [])

}

export default LogOut;