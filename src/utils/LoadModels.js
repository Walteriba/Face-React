import * as faceapi from "face-api.js";

// Función asíncrona para cargar los modelos de reconocimiento facial.
const loadModels = async () => {
  try {
    // Intentamos cargar todos los modelos requeridos en paralelo.
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"), 
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"), 
      faceapi.nets.faceExpressionNet.loadFromUri("/models"), 
      faceapi.nets.ageGenderNet.loadFromUri("/models"), 
    ]);
  } catch (error) {
    // Si ocurre un error durante la carga de los modelos, lo registramos en la consola.
    console.error(error);
    // Además, actualizamos el estado para reflejar que hubo un error al cargar los modelos.
    setError("Error cargando los modelos");
  }
};

export default loadModels;
