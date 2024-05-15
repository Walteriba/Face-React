import React from "react";

const DataComponent = ({ expression, age, gender }) => {
  return (
    <div className="data">
      <span>{expression}</span>
      <br />
      <span>{age}</span>
      <br />
      <span>{gender}</span>
    </div>
  );
};

export default DataComponent;
