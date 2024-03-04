import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoImage from "./../../assets/imgs/logo.svg";

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
    <section className="w-full gradient-form bg-grey-200 md:h-screen">
      <div className="container m-auto py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg-flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">     
                  <div className="md:p-12 md:mx-6">  
                    <div className="text-center">
                      <img className="m-auto w-48 mb-4 pt-4" src={logoImage} alt="" />
                      <h1 className="font-semibold mt-1 mb-8 pb-1">Iniciar sesión</h1>
                    </div>                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input className="p-1" type="email" placeholder="Correo electrónico" name="email" required/>
                      </div>
                      <div className="mb-4">
                        <input className="p-1" type="password" placeholder="Contraseña" name="password" required/>
                      </div>          
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button className="bg-gradient w-full text-white rounded-full p-1" type="submit">
                          Ingresar
                        </button>
                        <Link className="text-gray-500" to="/registro">
                          ¿Deseas registrarte?
                        </Link>
                      </div>
                      {error && (
                        <p className="text-center p-2 bg-red-100 text-red-800">
                          {error?.resp?.data?.data}
                        </p>
                      )}
                    </form> 
                  </div> 
                </div>
                <div className="bg-gradient lg:w-6/12 flex items-center lg:rounded-r-lg rounded-bl-lg-none">
                  <span>Más que un e-commerce...</span>
                  <h2>Somos una tienda en línea</h2>
                </div>
              </div> 
            </div>
          </div>         
        </div>
      </div>
    </section>
  )
}

export default Login;
