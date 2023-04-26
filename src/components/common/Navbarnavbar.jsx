import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../../scssWeb/main.css";

export default function Navbarnavbar(props) {

  const { links, texts } = props;

  return (
    <>
      <div className="navbarvideo">
        <div className="container-video">
          {links.map((link, index) => (
            <div key={index}>
              <NavLink to={link} className="Link" activeClassName="active">
                <Nav.Link href={link}>
                  <p>{texts[index]}</p>
                </Nav.Link>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
