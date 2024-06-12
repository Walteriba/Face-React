import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();

  const { signUp } = useAuth();
  const navigate = useNavigate();

  // La siguiente es una forma muy clara...
  // *** const handleChange = e => {
  // ***   console.log(e.target.name, e.target.value);
  // *** }
  // ...pero es más profesional del siguinte modo.
  // Aquí sabemos que en el evento existe una propiedad
  // "target", y de target quiero extraer el name y el value:
  const handleChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    // Con ...user, copio todos los dato
    // que el user tenga en ese momento,
    // y luego actualizo.
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/login");
    } catch (error) {
      // console.log(error.message)
      setError(error.message);
      // O mejor aún:
      if (error.code === "auth/invalid-email") {
        setError("Correo inválido.");
      }
    }
    //console.log(user)
  };

  return (
    <div>
      <div className="d-flex flex-column flex-lg-row justify-content-evenly align-items-center vw-100 min-vh-100">
        <div>
          <h1 className="text-center my-0 fs-1">FACE REACT</h1>

          <img
            className="emoji-svg d-block mx-auto"
            src="/happy-girl.svg"
            alt="Happy Girl"
          />

          <div className="mx-5 fs-5 text-center">¡Deja que tu cara hable!</div>

          <p className="mx-5 fs-5 text-center tittle-text">
            Experimenta con tus expresiones y diviértete como nunca antes.
          </p>
        </div>

        <div className="p-5 rounded bg-dark-blue shadow">
          <form onSubmit={handleSubmit} className="form-group">
            <h3 className="text-center">REGISTRARSE</h3>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="e-mail@dominio.com"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                placeholder="*******"
                id="passwd"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="d-grid">
              <button
                type="onSubmit"
                className="btn btn-primary"
                name="register"
              >
                Registrarse
              </button>
              {/* // Si hay error (en la interacción con 
                // la API de Firebase en handleSubmit())
                // => lo muestro. */}
            </div>
            <div className="centered-text my-3">
              <div className="line"></div>
              <span className="text">
                <a class="text-decoration-none text-white" href="/login">
                  Volver
                </a>
              </span>
              <div className="line"></div>
            </div>

            <div>{error && <p>{error}</p>}</div>
          </form>
        </div>
      </div>
    </div>
  );
};
