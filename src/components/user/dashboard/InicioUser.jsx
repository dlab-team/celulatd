import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../../scssWeb/main.css";
import Recursos from "../../../assets/img/video_library_G.svg";
import SvgMensaje from "../../../assets/img/messages_G.svg";
import HomeGSvg from "../../../assets/img/home_G.svg";
import Header from "../../common/header";
import NavbarComp from "./NavbarComponentUser";

export default function InicioUser() {
  return (
    <div className="container_inicio">
      <Header />
      <NavbarComp />
      <div className="barra">
        <img
          className="svg-img-barra"
          src={HomeGSvg}
          alt="pagina principal usuario"
        />
        <h2>INICIO</h2>
      </div>
      <div className="container-body-all container-inicio_body container-body-all-position">
        <div className="container-inicio_component_all container-inicio_component-background_video">
          <Link to="/ListVideoUser" className="Link">
            <img src={Recursos} alt="lista de videos" />
            <button>
              <p>RECURSOS</p>
            </button>
          </Link>
        </div>
        <div className="container-inicio_component_all container-inicio_component-background_message">
          <Link to="/ListMessageUser" className="Link">
            <img src={SvgMensaje} alt="lista de mensajes" />
            <button>
              <p>MENSAJES</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


