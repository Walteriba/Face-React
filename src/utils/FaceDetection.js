import * as faceapi from "face-api.js";

// Función asíncrona para detectar caras, expresiones, edad y género en un video.
const faceMyDetect = async (
  videoRef, // Referencia al elemento de video.
  setFaceData, // Actualizar el estado combinado de datos faciales.
  setLoading, // Actualizar el estado de carga.
  setError // Manejar errores.
) => {
  setLoading(true); // Iniciamos estableciendo el estado de carga a true.

  // Establecemos un intervalo para detectar caras cada 2 segundos.
  const intervalId = setInterval(async () => {
    try {
      // Realizamos la detección de caras y obtenemos las expresiones, edad y género.
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender();

      // Si se detecta al menos una cara, actualizamos la expresión, edad y género.
      if (detections.length > 0) {
        const expressions = detections[0].expressions;
        const maxExpression = expressions
          ? Object.keys(expressions).reduce((a, b) =>
              expressions[a] > expressions[b] ? a : b
            )
          : null;
        setFaceData({
          detections,
          expression: maxExpression,
          age: detections[0].age ? Math.round(detections[0].age) : null,
          gender: detections[0].gender || null,
        });
      } else {
        // Si no se detecta ninguna cara, restablecemos los valores a null.
        setFaceData({
          detections: [],
          expression: null,
          age: null,
          gender: null,
        });
      }
    } catch (error) {
      // Si ocurre un error durante la detección, lo registramos y actualizamos el estado de error.
      console.error(error);
      setError("Error detectando las caras");

      // En caso de error, detenemos el intervalo para evitar más intentos fallidos.
      clearInterval(intervalId);
    } finally {
      // Aseguramos que el estado de carga se actualice a false siempre, independientemente del éxito o fallo.
      setLoading(false);
    }
  }, 2000);
};

export default faceMyDetect;

