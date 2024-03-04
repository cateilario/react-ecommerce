import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  //Utilizar redirecciones de React Router
  const nav = useNavigate()

  //Manejo de estado: errores
  const [error, setError] = useState()

  const handleSubmit = (e) =>{
    e.preventDefault();
    // Dejar vacío el array de errores cada vez que enviemos la aplicación
    setError();

    const data = {
      email: e.target.value,
      password: e.target.value
    }

    // axios admite 2 parámetros: 
    axios
      .post(`${API_URL}/public/login`, data)
      .then(resp =>{
        setToken(resp.data.data.token)
        nav("/")
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <div className="pt-16 max-w-256 m-auto">
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Contraseña" required/>
        <button type="submit">Iniciar sesión</button>
        </form>
    </div>
  )
}

export default Login;
