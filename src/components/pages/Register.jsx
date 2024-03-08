import axios from "axios";
import { API_URL } from "../../constants/env";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginTemplate from "../templates/LoginTemplate";

const Register = () => {
  // Utilizar redirecciones de React Router
  const nav = useNavigate();

  // Manejo del estado: errores
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      details: {
        fullname: e.target.fullname.value,
      }
    };

    axios
      .post(`${API_URL}/public/login`, data)
      .then(() => {
        nav("/login");
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  return (
    <LoginTemplate title="Regístrate">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre completo"
            name="name"
            required
          />
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
          <button
            className="bg-gradient w-full text-white rounded-full"
            type="submit"
          >
            Crear cuenta
          </button>
          <Link className="text-gray-500" to="/login">
            Ya tienes cuenta? Inicia sesión
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-600">
            {error?.response?.data.errors[0].message}
          </p>
        )}
      </form>
    </LoginTemplate>
  );
};

export default Register;
