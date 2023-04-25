import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../../../../scssWeb/main.css";

export default function NavbarDocumentUser() {
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
            <NavLink to="/FavoriteMessage" className="Link" activeClassName="active">
              <Nav.Link href="/FavoriteMessage">
                <p>FAVORITOS</p>
              </Nav.Link>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}


