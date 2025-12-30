import "./NavBar.css";
import logo from "../../assets/logo.png";
import NavBarButtons from "./navbarButtons/NavBarButtons";

function NavBar() {
  return (
    <div className="container">
      <div className="name-logo">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-actions">
        <NavBarButtons />
      </div>
    </div>
  );
}

export default NavBar;
