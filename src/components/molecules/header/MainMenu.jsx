import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-700">
        <li className="flex items-center">
          <Link className="menu-item" to="/">Inicio</Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/products">Productos</Link>
        </li>
        <li className="flex items-center">
          <Link className="menu-item" to="/">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu;
