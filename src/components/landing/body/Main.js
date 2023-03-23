import React from 'react'

import '../../../scss/components/landing/body/_main.scss';

import LLave1 from '../../../assets/img/llave1.svg';
import LLave2 from '../../../assets/img/llave2.svg';

import groups from '../../../assets/img/groups.svg';
import communication from '../../../assets/img/communication.svg';
import calendar from '../../../assets/img/calendar.svg';


import menorque from '../../../assets/img/_Menor.svg';
import card1 from '../../../assets/img/card1.png';

import slash from '../../../assets/img/Slash.svg';
import card2 from '../../../assets/img/card2.png';


import mayorque from '../../../assets/img/_Mayor.svg';
import card3 from '../../../assets/img/card3.png';

import drafts from '../../../assets/img/draftsVerde.svg';

export default function Main() {
    return (
        <>


            <main className='main'>

                <div className='main__call-to-action'>
                    <div className='main__call-to-action--content'>
                        <img className='main__call-to-action--svg1' src={LLave1} alt='svg' />
                        <div className='main__call-to-action--texts'>
                            <h2 className='main__call-to-action--h2'>¡ÚNETE A NUESTRO EQUIPO! </h2>
                            <p className='main__call-to-action--p'> Lorem ipsum dolor sit amet
                                consectetur. Adipiscing suscipit
                                sed elit cursus dui lorem
                                donec. Quis porta at adipiscin
                            </p>
                        </div>
                        <img className='main__call-to-action--svg2' src={LLave2} alt='svg'></img>
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


                {/* carddddd 11111111111111111111111111111111111111111111111111111111111 */}

                <div className='main__card1-mobile'>
                    <div className='main__card1-mobile--content'>
                        <img className='main__card1-mobile--svg' src={menorque}
                        />
                        <img className='main__card1-mobile--img' src={card1} />
                        <p className='main__card1-mobile--p'>
                            Lorem ipsum dolor sit amet consectetur. Sed odio

                            egestas tincidunt mauris mollis senectus tellus

                            Condimentum egestas dignissim venenatis magna

                            ut at a id placerat. Donec gravida elit velit quisque.

                        </p>
                    </div>
                </div>

                <div className='main__card1-desktop'>
                    <div className='main__card1-desktop--content'>
                        <img className='main__card1-desktop--svg' src={menorque} />
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
                        <img className='main__card2-mobile--svg' src={slash} />
                        <img className='main__card2-mobile--img' src={card2} />
                        <p className='main__card2-mobile--p'>
                            Lorem ipsum dolor sit amet consectetur. Sed odio

                            egestas tincidunt mauris mollis senectus tellus

                            Condimentum egestas dignissim venenatis magna

                            ut at a id placerat. Donec gravida elit velit quisque.

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
                        <img className='main__card3-mobile--svg' src={mayorque} />
                        <img className='main__card3-mobile--img' src={card3}/>
                        <p className='main__card3-mobile--p'>
                            Lorem ipsum dolor sit amet consectetur. Sed odio

                            egestas tincidunt mauris mollis senectus tellus

                            Condimentum egestas dignissim venenatis magna

                            ut at a id placerat. Donec gravida elit velit quisque.
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
                        <p>Carrusel 1</p>
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
                        <p>Carrusel 2</p>
                    </div>
                </div>
            </main>


            {/* 
            <div className='main__call-to-action'>
                <div className='main__call-to-action--content'>
                    <img className='main__call-to-action--svg1' src={LLave1} alt='svg' />
                    <div className='main__call-to-action--texts'>
                        <h2 className='main__call-to-action--h2'>Unete a nuestro equipo</h2>
                        <p className='main__call-to-action--p'> Lorem ipsum dolor sit amet
                            consectetur. Adipiscing suscipit
                            sed elit cursus dui lorem
                            donec. Quis porta at adipiscin
                        </p>
                    </div>
                    <img className='main__call-to-action--svg2' src={LLave2} alt='svg'></img>
                </div>
            </div>


            <div className='main__comunidad'>
                <div className='main__comunidad--content'>
                    <h2 className='main__comunidad--h2'> COMUNIDAD DLATAM_</h2>
                    <img className='main__comunidad--svg' alt='svg'></img>
                </div>
            </div>
 */}


            {/* carddddd 11111111111111111111111111111111111111111111111111111111111 */}

            {/* <div className='main__card1-mobile'>
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
            </div> */}
            {/* carddddd 11111111111111111111111111111111111111111111111111111111111 */}

            {/* carddddd  22222222222222222222222222222222222222222222222222222222222 */}

            {/* 
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
 */}
            {/* carddddd  22222222222222222222222222222222222222222222222222222222222 */}
            {/* carddddd  33333333333333333333333333333333333333333333333333333333 */}


            {/*  <div className='main__card3-mobile'>
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
            </div> */}









            {/* carddddd  33333333333333333333333333333333333333333333333333333333 */}



            {/* 
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
            </div> */}
        </>
    )
}
