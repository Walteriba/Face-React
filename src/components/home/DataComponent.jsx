import React from "react";

const DataComponent = ({ expression, age, gender }) => {
  let expressionMessage;

switch (expression) {
  case 'happy':
    expressionMessage = "¡Qué linda sonrisa!";
    break;
  case 'sad':
    expressionMessage = "Espero que te sientas mejor pronto.";
    break;
  case 'angry':
    expressionMessage = "Intentemos calmarnos un poco.";
    break;
  case 'fearful':
    expressionMessage = "¿Hay algo que te preocupa?";
    break;
  case 'disgusted':
    expressionMessage = "¿Algo te ha disgustado?";
    break;
  case 'surprised':
    expressionMessage = "¡Vaya sorpresa!";
    break;
  default:
    expressionMessage = "Pareces estar bastante neutral.";
}

let genderInSpanish = gender === 'male' ? 'Masculino' : 'Femenino';

return (
  <div className="data">
    <span>{expression}</span>
    <br />
    <span>Edad: {age}</span>
    <br />
    <span>Género: {genderInSpanish}</span>
    <br />
    <span>{expressionMessage}</span>
  </div>
);

};

export default DataComponent;
