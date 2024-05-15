import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoaderComponent = () => {
  return (
    <div>
      <ScaleLoader />
      <span>CARGANDO</span>
    </div>
  );
};

export default LoaderComponent;
