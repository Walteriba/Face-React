import React, { useRef, useEffect, useState } from "react";

const VideoComponent = ({ videoRef }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    startVideo();
  }, []);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (!stream) {
        setError("No se pudo obtener el flujo de video");
      } else {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error(error);
      setError("Error accediendo a la cámara");
    }
  };

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <video crossOrigin="anonymous" ref={videoRef} autoPlay />
      )}
    </div>
  );
};

export default VideoComponent;
