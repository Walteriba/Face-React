import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoaderComponent = () => {
  return (
    <div className="loader">
      <ScaleLoader color="white" />
      <span>CARGANDO</span>
    </div>
  );
};

export default LoaderComponent;
