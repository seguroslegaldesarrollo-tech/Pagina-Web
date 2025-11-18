import { useNavigate } from "react-router";
import "./NavBarButtons.css";

function NavBarButtons() {
  const navigate = useNavigate();
  return (
    <div className="buttons-container">
      <button
        className="link"
        onClick={() => {
          navigate("home");
        }}
      >
        INICIO
      </button>
      <button
        className="link"
        onClick={() => {
          navigate("about-us");
        }}
      >
        SERVICIOS
      </button>
      <button
        className="link"
        onClick={() => {
          navigate("contact");
        }}
      >
        CONÓCENOS
      </button>

      <button
        className="link"
        onClick={() => {
          navigate("contact");
        }}
      >
        CONTACTANOS
      </button>
    </div>
  );
}

export default NavBarButtons;
