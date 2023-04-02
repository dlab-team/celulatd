import React  from 'react';
import { Container,  Carousel } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'; 
import '../../../scss/components/landing/body/_carrusel2.scss'; 

const Eventos = [
  {
    nombre: "Evento 1",
    tipo: "Conferencia",
    tema: "Tecnología"
  },
  {
    nombre: "Evento 2",
    tipo: "Taller",
    tema: "Marketing"
  },
  {
    nombre: "Evento 3",
    tipo: "Seminario",
    tema: "Finanzas"
  }
  ,
  {
    nombre: "Evento 4",
    tipo: "Seminario",
    tema: "Finanzas"
  }
  ,
  {
    nombre: "Evento 5",
    tipo: "Seminario",
    tema: "Finanzas"
  },
  {
    nombre: "Evento 5",
    tipo: "Seminario",
    tema: "Finanzas"
  }
];

function CarruselStories() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  const itemsToShow = isDesktopOrLaptop ? 3 : 1;

  return (
    <Container id="calendario" className="justify-content-center  carousel2">
      <Carousel interval={null} indicators={false} >
        {Eventos.reduce((groups, usuario, index) => {
          if (index % itemsToShow === 0) {
            groups.push(Eventos.slice(index, index + itemsToShow));
          }
          return groups;
        }, []).map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between w-100 testimonio">

              {group.map(evento => (
                <div key={evento.nombre} className="mx-3 title-date-container " style={{ flex: 1 }}>
                  <h3>{evento.nombre}</h3>
                  <p>Tipo: {evento.tipo}</p>
                  <p>Tema: {evento.tema}</p>
                </div>
              ))}

            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default CarruselStories;

/* 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Eventos from '../../../utils/Eventos';
import HistoriaUsuarios from '../../../utils/HistoriasUsuarios';
import { Container, Carousel } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

import '../../../scss/components/landing/body/_carrusel2.scss';

const CarruselCalendario = () => {
  const [events, setEvents] = useState([]);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  const itemsToShow = isDesktopOrLaptop ? 3 : 1;


  useEffect(() => {
    const API_KEY = 'AIzaSyDCtEVPUK8m7rLK9kchfGifpEdaGk8Zxk8';
    const CALENDAR_ID = 'fc879f23a68641ddcac87c4b24451c23c515924f8d29bef7592a25b5b9cbcd2e@group.calendar.google.com';
    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

    axios.get(url)
      .then(response => {
        const events = response.data.items.filter(event => {
          const eventDate = new Date(event.start.dateTime);
          return eventDate >= new Date();
        });

        console.log("Número de eventos cargados:", events.length);
        setEvents(events);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container className=' justify-content-center carousel2' id="calendario">
      <Carousel interval={null} indicators={false}>
        {events.reduce((groups, event, index) => {
          if (index % itemsToShow === 0) {
            groups.push(events.slice(index, index + itemsToShow));
          }
          return groups;
        }, []).map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between w-100">
              {group.map((event, idx) => (
                <div
                  key={event.id}
                  className={`mx-3 title-date-container ${idx === Math.floor(group.length / 2) ? 'active' : ''}`}
                  style={{ flex: 1 }}
                >
                  <h3>{event.summary}</h3>
                  <p>{new Date(event.start.dateTime).toLocaleString()}</p>
                </div>
              ))}
              {group.map(usuario => (
                <div key={usuario.nombre} className="mx-3 title-date-container " style={{ flex: 1 }}>
                  <h3>{usuario.nombre}</h3>
                  <p>Edad: {usuario.edad}</p>
                  <p>{usuario.historia}</p>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

    </Container>
  );
}

export default CarruselCalendario; */

