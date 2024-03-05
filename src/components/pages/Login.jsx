import axios from "axios"
import { API_URL } from "../../constants/env"
import { setToken } from "../../helpers/auth"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import logoImage from "./../../assets/imgs/logo.svg"
import LoginTemplate from "../templates/LoginTemplate"

const Login = () => {

    // Utilizar redirecciones de React Router
    const nav = useNavigate()

    // Manejo del estado: errores
    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axios
            .post(`${API_URL}/public/login`, data)
            .then(resp => {
                setToken(resp.data.data.token)
                nav("/")
            })
            .catch(err => {
              setError(err)
              console.log(err)
            })
    }
    
  return (
    <LoginTemplate>
      <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <input 
                                                type="email"
                                                placeholder="Correo electrónico"
                                                name="email"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input 
                                                type="password"
                                                placeholder="Contraseña"
                                                name="password"
                                                required
                                            />
                                        </div>
                                        <div className="text-center pt-1 mb-12 pb-1">
                                            <button className="bg-gradient w-full text-white rounded-full" type="submit">
                                                Ingresar
                                            </button>
                                            <Link className="text-gray-500" to="/registro">
                                                ¿Deseas registrarte?
                                            </Link>
                                        </div>
                                        {error && (
                                            <p className="text-center p-2 bg-red-100 text-red-600">
                                                    {error?.response?.data?.data}
                                            </p>
                                        )}
                                    </form>
    </LoginTemplate>
  )
}

export default Login