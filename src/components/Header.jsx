import { NavLink } from "react-router-dom";
import logo from "../assets/Imagenes/Logo_Labubus.jpg";

const Header = () => {
  return (
    <header>
      <div className="brand">
        {/* Logotipo del sitio */}
        <img
          className="logo"
          src={logo}
          alt="Logotipo Labubus Gourmet"
          width="64"
          height="64"
        />

        {/* Nombre o título del sitio */}
        <h1 className="site-title">Labubus Gourmet</h1>
      </div>

      {/* Navegación principal del sitio */}
      <nav aria-label="Navegación principal">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Menú
        </NavLink>

        <NavLink
          to="/contacto"
          className={({ isActive }) => (isActive ? "activo" : "")}
        >
          Contacto
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
