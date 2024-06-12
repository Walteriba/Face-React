import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/authContext"; 
import Header from "./Header";
import VideoComponent from "./home/VideoComponent"; 
import LoaderComponent from "./home/LoaderComponent"; 
import DataComponent from "./home/DataComponent"; 
import loadModels from "../utils/LoadModels"; 
import faceMyDetect from "../utils/FaceDetection"; 

export const Home = () => {
  // Estado para almacenar los datos de la cara detectada
  const [faceData, setFaceData] = useState({
    detections: null,
    expression: null,
    age: null,
    gender: null
  });
  const [error, setError] = useState(null);
  // Estado para indicar si se están cargando los modelos
  const [gettingReady, setGettingReady] = useState(true);
  const videoRef = useRef();
  const { user } = useAuth();

  // Efecto para inicializar los modelos y la detección facial
  useEffect(() => {
    const initializeModels = async () => {
      try {
        // Carga los modelos necesarios
        await loadModels();
        // Inicia la detección facial
        await faceMyDetect(
          videoRef,
          setFaceData,
          setGettingReady,
          setError
        );
      } catch (error) {
        console.error(error);
        setError("Error cargando los modelos");
        setGettingReady(false);
      }
    };
    // Llama a la función de inicialización cuando se monta el componente
    initializeModels();
  }, []);

  // Función para renderizar el contenido basado en el estado de error y carga
  const renderContent = () => {
    if (error) {
      return <div className="error">{error}</div>;
    } else {
      return gettingReady ? (
        <LoaderComponent />
      ) : (
        <DataComponent 
          expression={faceData.expression} 
          age={faceData.age} 
          gender={faceData.gender} 
        />
      );
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h1 className="tittle">¡Pon tu mejor cara {user.email}!</h1>
        <div className="myapp">
          <div className="video-container">
            <VideoComponent videoRef={videoRef} />
          </div>
          <div className="data-container">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
