import "./NavBar.css";
import logo from "../../assets/logo-h.png";
import NavBarButtons from "./navbarButtons/NavBarButtons";

function NavBar() {
  return (
    <div className="container">
      <div className="name-logo">
        <img className="logo" src={logo} alt="Logo Shekta Seguros" />
      </div>
      <div className="nav-actions">
        <NavBarButtons />
      </div>
    </div>
  );
}

export default NavBar;
