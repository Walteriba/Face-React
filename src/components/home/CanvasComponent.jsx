import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

// COMPONENTE ACTUALMENTE EN DESUSO, SIRVE PARA VER LAS LANDMARKS FACIALES
const CanvasComponent = ({ detections }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const drawDetections = () => {
      if (detections && detections.length > 0) {
        const resizedDetections = faceapi.resizeResults(detections, {
          width: canvasRef.current.width,
          height: canvasRef.current.height,
        });
        const context = canvasRef.current.getContext("2d");
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
      }
    };

    drawDetections();

    return () => {};
  }, [detections]);

  return <canvas ref={canvasRef} width="940" height="650" className="canvas" />;
};

export default CanvasComponent;
