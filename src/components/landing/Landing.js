import React from 'react';
import '../../scss/layout/_landing.scss';

////nuevos import funcionando//

import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './body/Main';

////nuevos import funcionando//


import InputHero from '../landing/header/Input';
import Button from '../landing/header/Button';
import CarruselStories from '../landing/body/CarruselStories';
import CarruselCalendario from '../landing/body/CarruselCalendario';



export default function Landing() {
    return (

        <>
            <div id='container'>
                <Header />
                <Main />
                <Footer />
            </div>
        </>

    )


}















