import React from 'react'
import Card from './Card';
import CarruselStories from './CarruselStories';
import CarruselCalendario from './CarruselCalendario';
import '../../../scss/components/landing/body/_main.scss';
import LLave1 from '../../../assets/img/llave1.svg';
import groups from '../../../assets/img/groups.svg';
import communication from '../../../assets/img/communication.svg';
import calendar from '../../../assets/img/calendar.svg';

export default function Main() {
    return (
        <>
            <main className='main'>
                <div className='main__call-to-action'>
                    <div className='main__call-to-action--content'>
                        <img className='main__call-to-action--svg1' src={LLave1} alt='svg' />
                        <div className='main__call-to-action--texts'>
                            <h2 className='main__call-to-action--h2'>¡ÚNETE A NUESTRO EQUIPO! </h2>
                            <p className='main__call-to-action--p'> Tecnología y Conocimiento para hacer de tu futuro una brillante carrera,
¡Se parte de este desafío!


                            </p>
                        </div>
                        <img className='main__call-to-action--svg2' src={LLave1} alt='svg'></img>
                    </div>
                </div>

                <div className='main__comunidad'>
                    <div className='main__comunidad--content'>
                        <h2 className='main__comunidad--h2'>
                            <span className='main__comunidad--line'>COMUNIDAD </span><br />
                            {'\{D\} LATAM_'}</h2>
                        <button className='main__comunidad--logo'>
                            <img className='main__comunidad--svg' src={groups} alt='svg' />
                        </button>
                    </div>
                </div>


                {/* ////AGREGAR COMPONENTE CARD A PARTIR DE ACA*/}
                <Card />
                {/* ////AGREGAR COMPONENTE CARD HASTA ACA*/}

                <div className='main__experiencia'>
                    <div className='main__experiencia--content'>
                        <h2 className='main__experiencia--h2'>
                            <span className='main__experiencia--line'> EXPERIENCIA
                            </span><br />ESTUDIANTIL</h2>
                        <button className='main__experiencia--logo'>
                            <img className='main__experiencia--svg' src={communication} alt='svg'></img>
                        </button>

                    </div>
                </div>

                <div className='main__carousel1 '>
                    <div className='main__carousel1--content'>
                        <CarruselStories />
                    </div>
                </div>

                <div className='main__agenda'>
                    <div className='main__agenda--content'>
                        <h2 className='main__agenda--h2'>
                            <span className='main__agenda--line'>
                                AGENDA
                            </span><br />ACTIVADES
                        </h2>
                        <button className='main__agenda--logo'>
                            <img className='main__agenda--svg' src={calendar} alt='svg'></img>
                        </button>
                    </div>
                </div>

                <div className='main__carousel2 '>
                    <div className='main__carousel2--content'>
                        <CarruselCalendario />
                    </div>
                </div>
            </main>
        </>
    )
}
