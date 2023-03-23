import React from 'react'

import '../../../scss/components/landing/header/_header.scss';

import InputHero from './Input';

import logo from '../../../assets/img/Logo1.svg'

import mail1 from '../../../assets/img/mail1.svg';
import calendar from '../../../assets/img/calendar.svg';
import drafts from '../../../assets/img/drafts.svg';
import groups from '../../../assets/img/groups.svg';
import communication from '../../../assets/img/communication.svg';

import Button from './Button';

export default function Header() {
  return (

    <header className='header'>
      <InputHero />
      <img className='header__img' src={logo} alt="logo academia" />
      <h1 className='header__h1'>DESAFIO</h1>
      <h2 className='header__h2'>latam_</h2>
      
      <button className='header__btn'>  {'\{ENTRAR\}'}  </button>
      <nav className='header__nav'>
        <li className='header__nav--li'><a className='anchor' href='#card1'><img src={groups} /></a></li>
        <li className='header__nav--li'><a className='anchor' href='#'><img src={drafts} /></a></li>
        <li className='header__nav--li'><a className='anchor' href='#'><img src={mail1} /></a></li>
        <li className='header__nav--li'><a className='anchor' href='#calendario'><img src={calendar} /></a></li>
        <li className='header__nav--li'><a className='anchor' href='#experiencia'><img src={communication} /></a></li>
      </nav>

    </header>
  )
}
