import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/authContext";
import Header from "./Header";
import VideoComponent from "./home/VideoComponent";
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
  const { user } = useAuth();

  useEffect(() => {
    const initializeModels = async () => {
      try {
        await loadModels();
        await faceMyDetect(
          videoRef,
          setDetections,
          setExpression,
          setAge,
          setGender,
          setGettingReady,
          setError
        );
      } catch (error) {
        console.error(error);
        setError("Error cargando los modelos");
        setGettingReady(false);
      }
    };
    initializeModels();
  }, []);

  const renderContent = () => {
    if (error) {
      return <div className="error">{error}</div>;
    } else {
      return gettingReady ? (
        <LoaderComponent />
      ) : (
        <DataComponent expression={expression} age={age} gender={gender} />
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
          <div className="data-container">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
