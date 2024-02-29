import { API_URL } from "../../constants/env"

export const Home = () => {
  return (
    <div>
        <h1>Bienvenido {API_URL}</h1>
        <p>Este es el sitio en desarrollo</p>
    </div>
  )
}

export default Home