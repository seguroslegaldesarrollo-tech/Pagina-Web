import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./NavBarButtons.css";

function NavBarButtons() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleNavigation = (index: number, path: string) => {
    setSelected(index);
    navigate(path);
    setIsMenuOpen(false);
  };

  if (isMobile) {
    return (
      <>
        <button
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <h3>Menú</h3>
            <button
              className="close-menu"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>
          <div className="mobile-menu-content">
            <button
              className={`mobile-link ${selected === 0 ? 'selected' : ''}`}
              onClick={() => handleNavigation(0, "home")}
            >
              INICIO
            </button>
            <button
              className={`mobile-link ${selected === 1 ? 'selected' : ''}`}
              onClick={() => handleNavigation(1, "about-us")}
            >
              CONÓCENOS
            </button>
            <button
              className={`mobile-link ${selected === 2 ? 'selected' : ''}`}
              onClick={() => handleNavigation(2, "contact")}
            >
              CONTACTANOS
            </button>
          </div>
        </div>
      </>
    );
  }

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
