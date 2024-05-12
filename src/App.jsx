import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import * as faceapi from 'face-api.js';

function App() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [expression, setExpression] = useState(null); // Estado para almacenar la expresión facial
  const [age, setAge] = useState(null); // Estado para almacenar la edad
  const [gender, setGender] = useState(null); // Estado para almacenar el género
  const [error, setError] = useState(null); // Estado para almacenar errores

  useEffect(() => {
    startVideo()
      .then(() => loadModels())
      .catch(error => setError("Error empezando el video"));
  }, []);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      setError("Error accediendo a la cámara");
      throw error;
    }
  }

  const loadModels = async () => {
    try {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
        faceapi.nets.ageGenderNet.loadFromUri("/models")
      ]);
      faceMyDetect();
    } catch (error) {
      setError("Error cargando los modelos");
    }
  }

  const faceMyDetect = () => {
    setInterval(async () => {
      try {
        const detections = await faceapi.detectAllFaces(videoRef.current,
          new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender();

        // Actualizar estado de expresión facial, edad y género
        if (detections.length > 0) {
          const expressions = detections[0].expressions;
          const maxExpression = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
          setExpression(maxExpression);
          setAge(Math.round(detections[0].age));
          setGender(detections[0].gender);
        } else {
          setExpression(null);
          setAge(null);
          setGender(null);
        }

        // Dibujar la detección en el canvas
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
        faceapi.matchDimensions(canvasRef.current, {
          width: 940,
          height: 650
        });

        const resized = faceapi.resizeResults(detections, {
          width: 940,
          height: 650
        });

        faceapi.draw.drawDetections(canvasRef.current, resized);
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
        faceapi.draw.drawFaceExpressions(canvasRef.current, resized);

      } catch (error) {
        setError("Error detectando las caras");
      }
    }, 1000);
  }

  return (
    <div className="myapp">
      <h1>¡Pon tu mejor cara!</h1>
      <div className="appvide">
        <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
      </div>
      <canvas ref={canvasRef} width="940" height="650" className="appcanvas" />
      
      {/* Mostrar expresión facial, edad y género detectado */}
      <div>
        <span>{expression}</span>
        <br />
        <span>{age}</span>
        <br />
        <span>{gender}</span>

      {/* Mostrar el error detectado, si existe */}
        {error ? <div className="error">{error}</div> : null}
      </div>
    </div>
  )
}

export default App;

