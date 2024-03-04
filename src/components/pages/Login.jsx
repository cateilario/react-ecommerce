import axios from "axios";
import { API_URL } from "../../constants/env";

const Login = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();

    const data = {
      email: e.target.value,
      password: e.target.value
    }

    // axios admite 2 parámetros: 
    axios.post(`${API_URL}/public/login`, data)
      .then((result) => {
        localStorage.setItem("token", result.data.data.token)
      }).catch((error) => {
        console.log(error)
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
