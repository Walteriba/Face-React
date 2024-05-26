import React, { useRef, useEffect, useState } from "react";

const VideoComponent = ({ videoRef }) => {
  const [error, setError] = useState(null);
  let streamRef = useRef(null);

  useEffect(() => {
    startVideo();
    return () => {
      stopVideo();
    };
  }, []);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (!stream) {
        setError("No se pudo obtener el flujo de video");
      } else {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.error(error);
      setError("Error accediendo a la cámara");
    }
  };

  const stopVideo = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  return (
    <div className="video">
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <video crossOrigin="anonymous" ref={videoRef} autoPlay />
      )}
    </div>
  );
};

export default VideoComponent;

