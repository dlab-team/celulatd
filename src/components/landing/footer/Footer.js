import React from 'react'
import InputHero from '../header/Input';
import '../../../scss/components/landing/footer/_footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo3 from '../../../assets/img/logo3.svg';
import drafts from '../../../assets/img/draftsVerde.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-mobile-version'>
                <div className='footer-mobile-version__hfooter'>
                    <h2 className='footer-mobile-version__hfooter--h2'>SUSCRÍBETE Y RECIBE
                        NUESTRO BOLETÍN QUINCENAL </h2>

                    <div className='footer-mobile-version__hfooter--icon-input'>
                        {/* <span className='footer-mobile-version__hfooter--icon'> </span> */}

                        {/*< button className='footer-mobile-version__hfooter--logo'> */}
                        <button className='footer-mobile-version__hfooter--svg'>

                            <img src={drafts} alt='svg' />

                        </button>

                        <InputHero />
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

                    <i className='footer-mobile-version__span--i'><a href='#'> <FaInstagram /></a></i>
                    <i className='footer-mobile-version__span--i'><a href='#'><FaFacebookF /></a></i>
                    <i className='footer-mobile-version__span--i'><a href='#'><FaTwitter /></a></i>


                </span>

                <div className='footer-mobile-version__logo'>
                    <img className='footer-mobile-version__logo--img' src={logo3} alt="logo" />
                    <div className='footer-mobile-version__logo--texts'>
                        <h2 className='footer-mobile-version__logo--h2'>DESAFIO</h2>
                        <h3 className='footer-mobile-version__logo--h3'>latam_</h3>
                    </div>
                </div>
            </div>

            <div className='footer-desktop-version'>
                <div className='footer-desktop-version__hfooter'>

                    <h2 className='footer-desktop-version__hfooter--h2'>SUSCRÍBETE Y RECIBE
                        NUESTRO BOLETÍN QUINCENAL </h2>


                    <div className='footer-desktop-version__hfooter--icon-input'>
                        {/* <span className='footer-desktop-version__hfooter--icon'> <p>hola hola hola hola hola<br /> hola<br /> hola</p></span> */}
                        <button className='footer-desktop-version__hfooter--svg'>

                            <img src={drafts} alt='svg' />

                        </button>

                        <InputHero />
                        {/* <input className='footer-desktop-version__hfooter--input' placeholder='escribe aca'></input> */}
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
                    <div className='footer-desktop-version__span--container-icons'>
                    <i className='footer-desktop-version__span--i'><a href='#'><FaInstagram /></a></i>
                    <i className='footer-desktop-version__span--i'><a href='#'><FaFacebookF /></a></i>
                    <i className='footer-desktop-version__span--i'><a href='#'><FaTwitter /></a></i>
                    </div>
                </span>

                <div className='footer-desktop-version__logo'>
                    <img className='footer-desktop-version__logo--img' src={logo3}alt="logo"/>

                    <div className='footer-desktop-version__logo--texts'>
                    <h2 className='footer-desktop-version__logo--h2'>DESAFIO</h2>
                    <h3 className='footer-desktop-version__logo--h3'>latam_
                    </h3>
                    </div>
                </div>

                <div className='footer-desktop-version__faq'>
                    <p>FAQ</p>
                    <p>MISION Y VISION</p>
                    <p>TRANSPARENCIA</p>
                </div>
                <div className=' footer-desktop-version__about'>
                    <p>SOBRE EL SITIO </p>
                    <p>POLITICA DE SEGURIDAD</p>
                    <p>POLITICA CYBERBULLING</p>
                </div>
                <div className='footer-desktop-version__site'>
                    <p>SITIO</p>
                    <p>Comunidad</p>
                    <p>Newsletters</p>
                    <p>Mail</p>
                    <p>Agenda</p>
                    <p>Experiencia</p>
                    <p>Formulario</p>
                </div>
            </div>
        </footer>
    )
}
