import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomeWSvg from "../../../assets/img/home_W.svg";
import "../../../scssWeb/main.css";
import AjusteWt from "../../../assets/img/settings_W.svg";
import SvgMensajeW from "../../../assets/img/messages_W.svg";
import MiniRecursos from "../../../assets/img/video_library_W.svg";
import Metricassvg from "../../../assets/img/data_thresholding_W.svg";

export default function NavbarComponentUser() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          id="navbar-user"
          className="navbar-background">
          <div className="navbar-admin-all">
            {" "}
            <Link to="/HomeUser">
              <img src={HomeWSvg} alt="paguina principal usuario" />
              <Nav.Link href="/Inicio"></Nav.Link>
            </Link>
            <Link to="/Ajustes">
              <img src={AjusteWt} alt="ajustes usuario" />
              <Nav.Link href="/Ajustes"></Nav.Link>
            </Link>
            <Link to="/Statistics">
              <img src={Metricassvg}  alt="estadisticas de usuario"/>
              <Nav.Link href="/Statistics"></Nav.Link>
            </Link>
            <Link to="/ListVideoUser">
              <img src={MiniRecursos}  alt="lista de videos"/>
              <Nav.Link href="/ListVideo"></Nav.Link>
            </Link>
            <Link to="/ListMessageUser">
              <img src={SvgMensajeW}  alt="lista de mensajes "/>
              <Nav.Link href="/Message"></Nav.Link>
            </Link>
          </div>
        </Navbar>
      ))}
    </>
  );
}
