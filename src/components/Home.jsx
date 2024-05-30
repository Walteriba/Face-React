import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/authContext";
import VideoComponent from "./home/VideoComponent";
// Este componente  se encarga de renderizar el canva de seguimiento facial
// import CanvasComponent from "./home/CanvasComponent";
import LoaderComponent from "./home/LoaderComponent";
import DataComponent from "./home/DataComponent";
import loadModels from "../utils/LoadModels";
import faceMyDetect from "../utils/FaceDetection";

export const Home = () => {
  const [detections, setDetections] = useState(null);
  const [expression, setExpression] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [error, setError] = useState(null);
  const [gettingReady, setGettingReady] = useState(true);
  const videoRef = useRef();

  // **************
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
    // Navigate("/login")
    // Al hacer el logout estamos borrando el usuario, y entonces
    // lo ideal sería que naveguemos hacia el login. Pero una vez que
    // implementemos la ruta protegida y como ya no hay user (tras el logout)
    // se va a redireccionar a /login automáticamente.
  };

  // **************

  useEffect(() => {
    loadModels()
      .then(() =>
        faceMyDetect(
          videoRef,
          setDetections,
          setExpression,
          setAge,
          setGender,
          setGettingReady,
          setError
        )
      )
      .catch((error) => {
        console.error(error);
        setError("Error cargando los modelos");
        setGettingReady(false);
      });
  }, []);

  return (
    <main>
      <h1 className="tittle">¡Pon tu mejor cara {user.email}!</h1>
      <div className="myapp">
        <div className="video-container">
          <VideoComponent videoRef={videoRef} />
          {/* <CanvasComponent detections={detections} /> */}
        </div>

        <div className="data-container">
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <>
              {gettingReady ? (
                <LoaderComponent />
              ) : (
                <DataComponent
                  expression={expression}
                  age={age}
                  gender={gender}
                />
              )}
            </>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="col-2 btn btn-primary bg-dark-blue mt-5 shadow"
          onClick={handleLogout}
        >
          Salir
        </button>
      </div>
    </main>
  );
};
