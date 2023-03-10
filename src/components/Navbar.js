import "../assets/css/navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar () {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={ ( { isActive } ) => isActive ? "active" : "" }
      >
        Home
      </NavLink> |
      <NavLink
        to="/favoritos"
        className={ ( { isActive } ) => isActive ? "active" : "" }
      > Favoritos
      </NavLink>
    </nav>
  );
}
