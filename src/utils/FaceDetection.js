import * as faceapi from "face-api.js";

const faceMyDetect = async (
  videoRef,
  setDetections,
  setExpression,
  setAge,
  setGender,
  setLoading,
  setError
) => {
  try {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender();

      if (detections.length > 0) {
        const expressions = detections[0].expressions;
        const maxExpression = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b
        );
        setExpression(maxExpression);
        setAge(Math.round(detections[0].age));
        setGender(detections[0].gender);
      } else {
        setExpression(null);
        setAge(null);
        setGender(null);
      }

      setDetections(detections);
      setLoading(false);
    }, 1000);
  } catch (error) {
    console.error(error);
    setError("Error detectando las caras");
  }
};

export default faceMyDetect;
