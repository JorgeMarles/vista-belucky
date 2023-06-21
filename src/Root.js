import './Header.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { usuarioUid } from './Usuario/ApiUsuario'
import DashBoard from './Rifa/Dashboard';
import SignUp from './Usuario/SignUp';
import Login from './Usuario/Login';
import Header from './Header';
import Profile from './Usuario/Profile';
import LogOut from './Usuario/Logout';
import NewRifa from './Rifa/NewRifa';
import InfoRifa from './Rifa/InfoRifa';
import Rifas from './Rifa/Rifas';
import Principal from './Principal/Principal';
import Contact from './Contact/Contact';

function Root() {
  const [usuario, setUsuario] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth, async (usuarioFirebase) => {
      if (usuarioFirebase) {
        try {
          await setUsuario(await usuarioUid(usuarioFirebase.uid));

        } catch (error) {
          if ((error.name && error.name === "AxiosError" && error.response.status !== 500) || (!error.name)) {
            alert(error.message)

          }
          await setUsuario(null);
        }
      } else {
        await setUsuario(null);
      }
      console.log(usuario);

    });
  }, []);


  return (
    <>
      <Router>
        <Header usuario={usuario} />

        <Routes>
          <Route path="/about" element={<Navigate to="/dashboard" replace />} />
          <Route path="/" element={<Principal />} />
          <Route path="/contact" element={<Contact/>} />
          <Route
            path="/dashboard"
            element={
              usuario ? (
                <DashBoard
                  usuario={usuario}

                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
          </Route>
          <Route
            path="/newrifa"
            element={
              usuario ? (
                <NewRifa
                  usuario={usuario}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/rifas"
            element={
              usuario ? (
                <Rifas usuario={"-1"} replace />
              ) : (
                <Rifas usuario={usuario} replace />
              )
            }
          />

          <Route
            path="/rifa/:id"
            element={usuario ? (
              <InfoRifa
                usuario={usuario}
              />
            ) : (
              <Navigate to="/login" replace />

            )}
          />
          <Route
            path="/profile"
            element={
              usuario ? (
                <Profile
                  usuario={usuario}
                  setUsuario={setUsuario}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !usuario ? (
                <SignUp setUsuario={setUsuario} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />
          <Route
            path="/login"
            element={!usuario ? <Login usuario={usuario} setUsuario={setUsuario} /> : <Navigate to="/dashboard" replace />}
          />
          <Route
            path="/logout"
            element={usuario ? <LogOut setUsuario={setUsuario} /> : <Navigate to="/" replace />}
          />

        </Routes>
      </Router>
    </>
  );
}

export default Root;
