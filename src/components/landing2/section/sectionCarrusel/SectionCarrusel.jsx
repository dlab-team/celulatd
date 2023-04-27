import React from "react";
import HistoriaUsuarios from "../../../../utils/HistoriasUsuarios";
import { Container, Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "../../../../assets/img/Quincy-Larson-photo.jpg";
import "../../../../scssWeb/main.css";

export default function SectionCarrusel() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const itemsToShow = isDesktopOrLaptop ? 3 : 1;

  return (
    <Container className="justify-content-center carousel1">
      <Carousel interval={null} indicators={false}>
        {HistoriaUsuarios.reduce((groups, usuario, index) => {
          if (index % itemsToShow === 0) {
            groups.push(HistoriaUsuarios.slice(index, index + itemsToShow));
          }
          return groups;
        }, []).map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between w-80 testimonio">
              {group.map((usuario) => (
                <div
                  key={usuario.nombre}
                  className="mx-3 title-date-container "
                  style={{ flex: 1 }}>
                  <Carousel.Caption>
                    <img
                      src="https://w7.pngwing.com/pngs/374/169/png-transparent-generic-pic-profile-user-account-avatar-human-male-man-person-vivid-vibrant-solid-fill-flat-style-icon.png"
                      alt="imagenes para carrusel"
                      className="d-block w-50 "
                    />
                    <h3>{usuario.nombre}</h3>
                    <p>{usuario.historia}</p>
                  </Carousel.Caption>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
