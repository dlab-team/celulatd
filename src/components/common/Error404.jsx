import React from "react";
import "../../../src/scssWeb/main.css";
import Movil404 from "../../assets/img/movil404.svg";

const Error404 = () => {
  return (
    <div className="container-error">
      <div className="container-error-movil">
        <img src={Movil404} alt="pagina no encontrada" />
      </div>
    </div>
  );
};

export default Error404;
