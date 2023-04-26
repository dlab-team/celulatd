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
            <Link to="/InicioUser">
              <img src={HomeWSvg} alt="paguina principal usuario" />
              <Nav.Link href="/InicioUser"></Nav.Link>
            </Link>
            <Link to="/SettigUser">
              <img src={AjusteWt} alt="ajustes usuario" />
              <Nav.Link href="/SettigUser"></Nav.Link>
            </Link>
            <Link to="/StatisticsUser">
              <img src={Metricassvg}  alt="estadisticas de usuario"/>
              <Nav.Link href="/StatisticsUser"></Nav.Link>
            </Link>
            <Link to="/VideoListUser">
              <img src={MiniRecursos}  alt="lista de videos"/>
              <Nav.Link href="/VideoListUser"></Nav.Link>
            </Link>
            <Link to="/ListMessageUser">
              <img src={SvgMensajeW}  alt="lista de mensajes "/>
              <Nav.Link href="/ListMessageUser"></Nav.Link>
            </Link>
          </div>
        </Navbar>
      ))}
    </>
  );
}
