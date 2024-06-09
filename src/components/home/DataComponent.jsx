import React from "react";

const DataComponent = ({ expression, age, gender }) => {
  let expressionMessage;

  switch (expression) {
    case "happy":
      expressionMessage = "¡Qué linda sonrisa!";
      break;
    case "sad":
      expressionMessage = "Espero que te sientas mejor pronto.";
      break;
    case "angry":
      expressionMessage = "Intentemos calmarnos un poco.";
      break;
    case "fearful":
      expressionMessage = "¿Hay algo que te preocupa?";
      break;
    case "disgusted":
      expressionMessage = "¿Algo te ha disgustado?";
      break;
    case "surprised":
      expressionMessage = "¡Vaya sorpresa!";
      break;
    case "neutral":
      expressionMessage = "¡Parece que estás en calma!";
      break;
    default:
      expressionMessage = "No se ha detectado ninguna cara.";
  }

  // Devolver edad y sexo, aunque sea null
  const ageMessage = age === null ? null : `¡Pareces tener ${age} años!`;

  const genderMessage =
    gender === null
      ? null
      : `¿Tu sexo es ${gender === "male" ? "masculino" : "femenino"}?`;

  // Manejo de la imagen del emoji
  const emojiSrc = expression ? `/emojis/${expression}.svg` : `/nofound.png`;

  return (
    <div className="container">
      <div className="data text-center">
        <div><b>¿Sin emoción? ¡Dale un giro a tu expresión y diviértete!</b></div>
        <br />
        <img className="emoji-svg" src={emojiSrc} alt={`${expression}`} />
        <br />
        <div>{expressionMessage}</div>
        <div>{ageMessage}</div>
        <div>{genderMessage}</div>
      </div>
    </div>
  );
};

export default DataComponent;
