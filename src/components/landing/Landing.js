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
                <header className='header'>
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







                <div className='main__call-to-action'>
                    <div className='main__call-to-action--content'>
                        <img className='main__call-to-action--svg1' alt='svg'></img>
                        <div className='main__call-to-action--texts'>
                            <h2 className='main__call-to-action--h2'>Unete a nuestro equipo</h2>
                            <p className='main__call-to-action--p'> unete unete unete unete unete unete unete unete unete unete unete unete unete unete unete unete unete unete
                                unete unete unete unete unete unete unete unete

                            </p>
                        </div>
                        <img className='main__call-to-action--svg2' alt='svg'></img>
                    </div>
                </div>


                <div className='main__comunidad'>
                    <div className='main__comunidad--content'>
                        <h2 className='main__comunidad--h2'> COMUNIDAD DLATAM_</h2>
                        <img className='main__comunidad--svg' alt='svg'></img>
                    </div>
                </div>



                {/* carddddd 11111111111111111111111111111111111111111111111111111111111 */}

                <div className='main__card1-mobile'>
                    <div className='main__card1-mobile--content'>
                        <img className='main__card1-mobile--svg'></img>
                        <img className='main__card1-mobile--img'></img>
                        <p className='main__card1-mobile--p'>
                            texto texto texto texto texto texto texto textotextotextotextotextotextotexto
                        </p>
                    </div>
                </div>

                <div className='main__card1-desktop'>
                    <div className='main__card1-desktop--content'>
                        <img className='main__card1-desktop--svg'></img>
                        <img className='main__card1-desktop--img'></img>
                        <p className='main__card1-desktop--p'>
                            texto texto texto texto texto texto texto textotextotextotextotextotextotexto
                            texto texto texto texto texto texto texto textotextotextotextotextotextotexto

                        </p>
                    </div>
                </div>
                {/* carddddd 11111111111111111111111111111111111111111111111111111111111 */}

                {/* carddddd  22222222222222222222222222222222222222222222222222222222222 */}


                <div className='main__card2-mobile'>
                    <div className='main__card2-mobile--content'>
                        <img className='main__card2-mobile--svg'></img>
                        <img className='main__card2-mobile--img'></img>
                        <p className='main__card2-mobile--p'>
                            texto texto texto texto texto texto texto textotextotextotextotextotextotexto
                        </p>
                    </div>
                </div>

                <div className='main__card2-desktop'>
                    <div className='main__card2-desktop--content'>
                        <img className='main__card2-desktop--svg'></img>
                        <img className='main__card2-desktop--img'></img>
                        <p className='main__card2-desktop--p'>
                            texto texto texto texto texto texto texto textotextotextotextotextotextotexto
                            texto texto texto texto texto texto texto textotextotextotextotextotextotexto

                        </p>
                    </div>
                </div>

                {/* carddddd  22222222222222222222222222222222222222222222222222222222222 */}
                {/* carddddd  33333333333333333333333333333333333333333333333333333333 */}


                <div className='main__card3-mobile'>
                    <div className='main__card3-mobile--content'>
                        <img className='main__card3-mobile--svg'></img>
                        <img className='main__card3-mobile--img'></img>
                        <p className='main__card3-mobile--p'>
                            texto texto texto texto texto texto texto textotextotextotextotextotextotexto
                        </p>
                    </div>
                </div>

                <div className='main__card3-desktop'>
                    <div className='main__card3-desktop--content'>
                        <img className='main__card3-desktop--svg'></img>
                        <img className='main__card3-desktop--img'></img>
                        <p className='main__card3-desktop--p'>
                            texto texto texto texto texto texto texto textotextotextotextotextotextotexto
                            texto texto texto texto texto texto texto textotextotextotextotextotextotexto

                        </p>
                    </div>
                </div>









                {/* carddddd  33333333333333333333333333333333333333333333333333333333 */}




                <div className='main__experiencia'>
                    <div className='main__experiencia--content'>
                        <h2 className='main__experiencia--h2'> EXPERIENCIA ESTUDIANTIL</h2>
                        <img className='main__experiencia--svg' alt='svg'></img>
                    </div>
                </div>



                <div className='main__carousel1 '>
                <div className='main__carousel1--content'>
                        <p>Carrusel 1</p>
                    </div>
                </div>


                <div className='main__agenda'>
                    <div className='main__agenda--content'>
                        <h2 className='main__agenda--h2'> AGENDA ACTIVADES</h2>
                        <img className='main__agenda--svg' alt='svg'></img>
                    </div>
                </div>
                
                <div className='main__carousel2 '>
                <div className='main__carousel2--content'>
                        <p>Carrusel 2</p>
                    </div>
                </div>





               
                <footer className='footer'>

                    <div className='footer-mobile-version'>

                        <div className='footer-mobile-version__hfooter'>

                            <h2 className='footer-mobile-version__hfooter--h2'>SUSCRÍBETE Y RECIBE
                                NUESTRO BOLETÍN QUINCENAL </h2>


                            <div className='footer-mobile-version__hfooter--icon-input'>
                                <span className='footer-mobile-version__hfooter--icon'> <p>hola hola hola hola hola<br /> hola<br /> hola</p></span>
                                <input className='footer-mobile-version__hfooter--input' placeholder='escribe aca'></input>
                            </div>

                        </div>






                        <section className='footer-mobile-version__section '>
                            <ul className='footer-mobile-version__section--ul'>
                                <li className='footer-mobile-version__section--li1'><p>NUESTROS CONTACTOS</p></li>
                                <li className='footer-mobile-version__section--li2'>Dudas y consultas</li>
                                <li className='footer-mobile-version__section--li3'><p><a href='#'>sos@desafiolatam.com</a></p></li>
                                <li className='footer-mobile-version__section--li4'><p>Ayuda tecnica</p></li>
                                <li className='footer-mobile-version__section--li5'><p><a href='#'>ayuda@desafiolatam.com</a></p></li>
                            </ul>
                        </section>



                        <span className='footer-mobile-version__span'>
                            <p className='footer-mobile-version__span--p'>NUESTRAS REDES SOCIALES</p>
                            <i className='footer-mobile-version__span--i'><a href='#'>icon</a></i>
                            <i className='footer-mobile-version__span--i'><a href='#'>icon</a></i>
                            <i className='footer-mobile-version__span--i'><a href='#'>icon</a></i>

                        </span>




                        <div className='footer-mobile-version__logo'>
                            <img className='footer-mobile-version__logo--img' alt="logo"></img>
                            <h2 className='footer-mobile-version__logo--h2'>DESAFIO<br />latam_</h2>
                        </div>


                    </div>


                             
                        <div className='footer-desktop-version'>

                        <div className='footer-desktop-version__hfooter'>

                            <h2 className='footer-desktop-version__hfooter--h2'>SUSCRÍBETE Y RECIBE
                                NUESTRO BOLETÍN QUINCENAL </h2>


                            <div className='footer-desktop-version__hfooter--icon-input'>
                                <span className='footer-desktop-version__hfooter--icon'> <p>hola hola hola hola hola<br /> hola<br /> hola</p></span>
                                <input className='footer-desktop-version__hfooter--input' placeholder='escribe aca'></input>
                            </div>

                        </div>






                        <section className='footer-desktop-version__section '>
                            <ul className='footer-desktop-version__section--ul'>
                                <li className='footer-desktop-version__section--li1'><p>NUESTROS CONTACTOS</p></li>
                                <li className='footer-desktop-version__section--li2'>Dudas y consultas</li>
                                <li className='footer-desktop-version__section--li3'><p><a href='#'>sos@desafiolatam.com</a></p></li>
                                <li className='footer-desktop-version__section--li4'><p>Ayuda tecnica</p></li>
                                <li className='footer-desktop-version__section--li5'><p><a href='#'>ayuda@desafiolatam.com</a></p></li>
                            </ul>
                        </section>



                        <span className='footer-desktop-version__span'>
                            <p className='footer-desktop-version__span--p'>NUESTRAS REDES SOCIALES</p>
                            <i className='footer-desktop-version__span--i'><a href='#'>icon</a></i>
                            <i className='footer-desktop-version__span--i'><a href='#'>icon</a></i>
                            <i className='footer-desktop-version__span--i'><a href='#'>icon</a></i>

                        </span>




                        <div className='footer-desktop-version__logo'>
                            <img className='footer-desktop-version__logo--img' alt="logo"></img>
                            <h2 className='footer-desktop-version__logo--h2'>DESAFIO<br />latam_</h2>
                        </div>

                         <div className='faq'>
                           <p>FAQ</p> 
                        </div>
                        <div className=' about'>
                             <p>ABOUT</p>
                        </div>
                        <div className='site'>
                            <p>SITIO</p>
                        </div> 


                    </div> 




                </footer> 

            </div>



        </>

    )


}















