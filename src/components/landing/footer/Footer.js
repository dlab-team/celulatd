import React from 'react'
import InputHero from '../header/Input';


import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


import logo3 from '../../../assets/img/logo3.svg';

import '../../../scss/components/landing/footer/_footer.scss';

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
                        {/* </button> */}


                        {/* <div className='footer-mobile-version__hfooter--input' placeholder='escribe aca'> */}
                        <InputHero />
                        {/* </div> */}
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


    )
}
