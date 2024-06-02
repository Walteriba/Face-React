import React from "react";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
    // Navigate("/login")
    // Al hacer el logout estamos borrando el usuario, y entonces
    // lo ideal sería que naveguemos hacia el login. Pero una vez que
    // implementemos la ruta protegida y como ya no hay user (tras el logout)
    // se va a redireccionar a /login automáticamente.
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="d-flex align-items-center">
          <h1 className="me-2">FACE REACT</h1>
          <div className="d-none d-md-block">
            <span className="d-flex align-items-center justify-content-center rounded border px-2">
              beta
            </span>
          </div>
        </div>

        <nav>
          <ul className="list-inline d-flex align-items-center">
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/walter-ibarrola" target="blank">
                {" "}
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  className="icon-small"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/Walteriba/Face-React" target="blank">
                {" "}
                <img
                  src="/github.svg"
                  alt="GitHub"
                  className="icon-small"
                />
              </a>
            </li>
            {user && (
              <li className="list-inline-item">
                <a
                  href="#"
                  className="logout-link d-flex align-items-center"
                  onClick={handleLogout}
                >
                  <b>SALIR</b>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
