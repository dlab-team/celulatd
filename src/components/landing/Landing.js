import React from 'react';
import '../../scss/layout/_landing.scss';


import Logo1 from '../../assets/img/Logo1.svg';

import Background from '../landing/header/Background';
import InputHero from '../landing/header/Input';
import Button from '../landing/header/Button';
import Titles from '../landing/header/Titles';
import Logo from '../landing/header/Logo';
import Navigation from './header/Navigation';

import BackgroundCallToAction from '../landing/body/Background-call-to-action';
import CallToAction from '../landing/body/CallToAction';
import Bgcomunidad from '../landing/body/Bgcomunidad';
import Comunidad from '../landing/body/Comunidad';
import ImgCard1 from './body/ImgCard1';
import SvgCard1 from './body/SvgCard1';
import BgCard1 from './body/BgCard1';
import TextCard1 from './body/TextCard1';
import ImgCard2 from './body/ImgCard2';
import SvgCard2 from './body/SvgCard2';
import BgCard2 from './body/BgCard2';
import TextCard2 from './body/TextCard2';
import ImgCard3 from './body/ImgCard3';
import SvgCard3 from './body/SvgCard3';
import BgCard3 from './body/BgCard3';
import TextCard3 from './body/TextCard3';
import BgExperiencia from '../landing/body/BgExperiencia';
import Experiencia from '../landing/body/Experiencia';
import CarruselStories from '../landing/body/CarruselStories';
import BgActividades from '../landing/body/BgActividades';
import Actividades from '../landing/body/Actividades';
import CarruselCalendario from '../landing/body/CarruselCalendario';


import Footer from '../landing/footer/Footer';








export default function Landing() {
    return (

        <>
            <div id='container'>
                <div className='hero'>
                    <header className='hero__header header'>
                        <input className='header__input' placeholder='escribe aca'></input>
                        <img className='header__img' /* src={ Logo1 } */ alt="logo academia" />
                        <h1 className='header__h1'>DESAFIO</h1>
                        <h2 className='header__h2'>latam_</h2>
                        <button className='header__btn'> clik me </button>
                        <nav className='header__nav'>
                            <ul className='header__nav--ul'>
                                <li className='header__nav--li'>{/* <img src={groups} />*/}1</li>
                                <li className='header__nav--li'>{/* <img src={drafts} /> */}2</li>
                                <li className='header__nav--li'>{/* <img src={mail1} /> */}3</li>
                                <li className='header__nav--li'>{/* <img src={calendar} /> */}4</li>
                                <li className='header__nav--li'>{/* <img src={communication} /> */}5</li>
                            </ul>
                        </nav>
                    </header>
                </div>

                





                <main className='main'>

                    <div className='main__calltoaction calltoaction'>
                        <img className='calltoaction__img--svg1'></img>
                        <h2 className='calltoaction__h2'>Unete a nuestro equipo</h2>
                        <p className='calltoaction__p'> unete unete unete unete unete unete unete unete unete unete unete unete unete unete unete unete unete unete unete </p>
                        <img className='calltoaction__img--svg2' alt='svg'></img>
                    </div>
                    <div className='main__comunidad comunidad'>
                        <h2 className='comunidad__h2'> COMUNIDAD DLATAM_</h2>
                        <img className='comunidad__img--svg'></img>
                    </div>


                    <section className='section'>
                        <div className='section__card card1'>
                            <img className='card1__img--svg'></img>
                            <img className='card1__img'></img>
                            <p className='card1__p'>
                                unete unete unete unete unete unete unete unete unete unete
                            </p>
                        </div>
                        <div className='section__card card2'>
                            <img className='card2__img--svg'></img>
                            <img className='card2__img'></img>
                            <p className='card2__p'>
                                unete unete unete unete unete unete unete unete unete unete
                            </p>
                        </div>
                        <div className='section__card card3'>
                            <img className='card3__img'></img>
                            <img className='card3__img--svg'></img>
                            <p className='card3__p'>
                                unete unete unete unete unete unete unete unete unete unete
                            </p>
                        </div>
                    </section>

                    <div className='main__experiencia experiencia'>
                        <h2 className='experiencia__h2'> EXPERIENCIA ESTUDIANTIL</h2>
                        <img className='experiencia__img--svg'></img>
                    </div>

                    <div className='main-carousel carousel1'>
                        carrusel1
                    </div>

                    <div className='main__agenda agenda'>
                        <h2 className='agenda__h2'> AGENDA ACTIVIDADES</h2>
                        <img className='agenda__img--svg'></img>
                    </div>

                    <div className='main-carousel carousel2'>
                        carrusel2
                    </div>
                </main>

                <footer className='footer'>
                    <h2 className='footer__h2'>SUSCRÍBETE Y RECIBE
                        NUESTRO BOLETÍN QUINCENAL </h2>
                    <input className='footer__input' placeholder='escribe aca'></input>

                    <section className='footer__section section'>


                        <ul className='section__ul ul'>
                            <li className='ul--li1'>NUESTROS CONTACTOS</li>
                            <li className='ul--li2'>Dudas y consultas</li>
                            <li className='ul--li3'><a href='#'>sos@desafiolatam.com</a></li>
                            <li className='ul--li4'>Ayuda tecnica</li>
                            <li className='ul--li5'><a href='#'>ayuda@desafiolatam.com</a></li>
                            <li className='ul--li6'>NUESTRAS REDES SOCIALES</li>
                        </ul>



                        <span className='section__span icons'>
                            <i className='icons__i'><a href='#'>icon</a></i>
                            <i className='icons__i'><a href='#'>icon</a></i>
                            <i className='icons__i'><a href='#'>icon</a></i>
                        </span>


                        <div className='section__logo logo' >
                            <img className='logo__img' alt="logo">
                            </img>
                        </div>

                        <div className='section__h2 h2'>
                            <h2 className='h2--h2'>
                                DESAFIO latam_
                            </h2>
                        </div>
                    </section>

                </footer>
            </div>



        </>

    )


}















