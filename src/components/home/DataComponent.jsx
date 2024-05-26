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
    default:
      expressionMessage = "Pareces estar bastante neutral.";
  }

  // Setear emocion en neutral
  const checkAndSetNeutral = (expression) => {
    return expression === null || expression === undefined
      ? "neutral"
      : expression;
  };

  expression = checkAndSetNeutral(expression);

  // Pasar a español el sexo
  let genderInSpanish = gender === "male" ? "Masculino" : "Femenino";
  //Devolver edad, aunque sea null
  let ageMessage =
    age === null ? "No logro detectar una edad" : `¡Pareces tener ${age} años!`;

  return (
    <div className="container">
      <div className="data text-center">
        <div>¿Sin emoción? ¡Dale un giro a tu expresión y diviértete!</div>
        <br />
        <img src={`/emojis/${expression}.svg`} alt={`${expression}`} />
        <br />
        <div>{expressionMessage}</div>
        <div>{ageMessage}</div>     
        <div>¿Tu género es {genderInSpanish}?</div>
      </div>
    </div>
  );
};

export default DataComponent;
