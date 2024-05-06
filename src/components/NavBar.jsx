import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      {/*<Link to='/'>Inicio</Link>
      <Link to='/about'>Sobre</Link>*/}

      <NavLink
        to="/"
        //className={({ isActive }) => (isActive ? "esta-ativo" : "n-ativo")}
      >
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default NavBar;
