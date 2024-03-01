import { Link } from "react-router-dom";
import logoImg from './../../../assets/imgs/logo.svg'

const Logo = () => {
  return (
    <div className="flex">
      <Link to="/">
        <img src={logoImg} alt="Logo comercio virtual" />
      </Link>
    </div>
  )
}

export default Logo;
