import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import VideoComponent from "./components/VideoComponent";
import CanvasComponent from "./components/CanvasComponent";
import LoaderComponent from "./components/LoaderComponent";
import DataComponent from "./components/DataComponent";
import loadModels from "./utils/LoadModels";
import faceMyDetect from "./utils/FaceDetection";

const App = () => {
  const [detections, setDetections] = useState(null);
  const [expression, setExpression] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    loadModels()
      .then(() =>
        faceMyDetect(
          videoRef,
          setDetections,
          setExpression,
          setAge,
          setGender,
          setLoading,
          setError
        )
      )
      .catch((error) => {
        console.error(error);
        setError("Error cargando los modelos");
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1 className="tittle">¡Pon tu mejor cara!</h1>
      <div className="myapp">
        <div className="video-container">
          <VideoComponent videoRef={videoRef} />
          <CanvasComponent detections={detections} />
        </div>

        <div className="data-container">
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <>
              {loading ? (
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
    </main>
  );
  
};

export default App;
