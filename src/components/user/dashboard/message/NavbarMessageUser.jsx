import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../../../../scssWeb/main.css";

export default function NavbarMessageUser() {
  return (
    <>
      <div className="navbarvideo">
        <div className="container-video">
          <div>
            <NavLink to="/ListMessageUser" className="Link" activeClassName="active">
              <Nav.Link href="/ListMessageUser">
                <p>MENSAJES</p>
              </Nav.Link>
            </NavLink>
          </div>
          <div>
            <NavLink to="/TrashMessageUser" className="Link" activeClassName="active">
              <Nav.Link href="/TrashMessageUser">
                <p>PAPELERA</p>
              </Nav.Link>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}


