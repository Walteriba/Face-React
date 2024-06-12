import React, { useRef, useEffect, useState } from "react";

const VideoComponent = ({ videoRef }) => {
  // Estado para manejar posibles errores en el acceso a la cámara.
  const [error, setError] = useState(null);

  // Referencia para almacenar el stream de video actual.
  let streamRef = useRef(null);

  // useEffect se utiliza para iniciar el video cuando el componente se monta y detenerlo cuando se desmonta.
  useEffect(() => {
    startVideo(); 
    return () => {
      stopVideo(); 
    };
  }, []); 

  // Función asíncrona para iniciar la captura de video.
  const startVideo = async () => {
    try {
      // Intentamos obtener el stream de video de la cámara del usuario.
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (!stream) {
        setError("No se pudo obtener el flujo de video");
      } else {
        // Si el stream es exitoso, lo asignamos al elemento de video referenciado.
        videoRef.current.srcObject = stream;
        // Almacenamos el stream en la referencia `streamRef` para poder detenerlo posteriormente.
        streamRef.current = stream;
      }
    } catch (error) {
      console.error(error);
      setError("Error accediendo a la cámara");
    }
  };

  // Función para detener la captura de video.
  const stopVideo = () => {
    // Verificamos si hay un stream activo.
    if (streamRef.current) {
      // Obtenemos todas las pistas (tracks) del stream.
      const tracks = streamRef.current.getTracks();
      // Detenemos cada pista del stream para liberar la cámara.
      tracks.forEach((track) => track.stop());
    }
  };

  return (
    <div className="video-placeholder">
      {error ? (
        // Si hay un error, mostramos el mensaje de error.
        <div className="error">{error}</div>
      ) : (
        // Si no hay error, mostramos el elemento de video.
        <video
          className="video"
          crossOrigin="anonymous"
          ref={videoRef}
          autoPlay
        />
      )}
    </div>
  );
};

export default VideoComponent;
