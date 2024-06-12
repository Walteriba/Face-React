import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();

  const { signIn } = useAuth();
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
      await signIn(user.email, user.password);
      navigate("/home");
    } catch (error) {
      // console.log(error.message)
      setError(error.message);
      // O mejor aún:
      if (error.code === "auth/invalid-email") {
        setError("Correo inválido.");
      }
      if (error.code === "auth/invalid-credential") {
        setError("Su información de autenticación es incorrecta.");
      }
      if (error.code === "auth/too-many-requests") {
        setError(
          "Demasiados intentos incorrectos. Espere e intente nuevamente."
        );
      }
    }
    // console.log(user)
  };

  const handleRegister = (e) => {
    navigate("/register");
  };

  // Manejar inicio de sesión Demo
  const handleDemoLogin = async () => {
    const demoCredentials = {
      email: "prueba@correo.com",
      password: "abc1234",
    };
    try {
      await signIn(demoCredentials.email, demoCredentials.password);
    } finally {
      navigate("/home");
    }
  };

  return (
    <div className="d-flex flex-column flex-lg-row justify-content-evenly align-items-center vw-100 min-vh-100">
      <div>
        <h1 className="text-center my-2 fs-1 fs-md-1">FACE REACT</h1>
        <img
          className="emoji-svg d-block mx-auto"
          src="/happy-girl.svg"
          alt="Happy Girl"
        />
        <div className="mx-2 fs-5 text-center">¡Deja que tu cara hable!</div>
        <p className="mx-2 fs-5 text-center tittle-text">
          Experimenta con tus expresiones y diviértete como nunca antes.
        </p>
      </div>

      <div className="p-5 rounded bg-dark-blue shadow">
        <form onSubmit={handleSubmit} className="form-group">
          <h3 className="text-center">INGRESAR</h3>
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
            <button className="btn btn-primary" name="login">
              Ingresar
            </button>
          </div>

          <div>
            {error && <p className="text-center">{error}</p>}
            {!error && <p> </p>}
          </div>
        </form>

        <div className="d-grid">
          <div className="centered-text my-3">
            <div className="line"></div>
            <span className="text">¿No tienes una cuenta?</span>
            <div className="line"></div>
          </div>
          <button
            onClick={handleRegister}
            className="d-grid btn btn-primary mt-4"
            name="register"
          >
            Registrarse
          </button>
        </div>

        <div className="d-grid mt-3">
          <button
            onClick={handleDemoLogin}
            className="btn btn-secondary button-demo"
            name="demo"
          >
            Ingresar como Demo
          </button>
        </div>
      </div>
    </div>
  );
};
