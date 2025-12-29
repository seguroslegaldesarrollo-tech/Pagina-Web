import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./NavBarButtons.css";

function NavBarButtons() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/" || window.location.pathname === "/home") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelected(0);
    } else if (window.location.pathname === "/about-us") {
      setSelected(1);
    } else if (window.location.pathname === "/contact") {
      setSelected(2);
    }
  }, []);

  return (
    <div className="buttons-container">
      <button
        className={selected === 0 ?"link-selected" : "link"}
        onClick={() => {
          setSelected(0);
          navigate("home");
        }}
      >
        INICIO
      </button>
      <button
        className={selected === 1 ?"link-selected" : "link"}
        onClick={() => {
          setSelected(1);
          navigate("about-us");
        }}
      >
        CONÓCENOS
      </button>

      <button
        className={selected === 2 ?"link-selected" : "link"}
        onClick={() => {
          setSelected(2);
          navigate("contact");
        }}
      >
        CONTACTANOS
      </button>
    </div>
  );
}

export default NavBarButtons;
