import React from 'react'

import mail1 from '../../../assets/img/mail1.svg';
import calendar from '../../../assets/img/calendar.svg';
import drafts from '../../../assets/img/drafts.svg';
import groups from '../../../assets/img/groups.svg';
import communication from '../../../assets/img/communication.svg';

import '../../../scss/components/landing/header/_navigation.scss';


export default function Navigation
    () {
    return (

        <nav className='nav'>
            Navigation
            <ul className='nav-list'>
                <li className="nav-item">{/* <img src={groups} />*/}</li>
                <li className="nav-item">{/* <img src={drafts} /> */}</li>
                <li className="nav-item">{/* <img src={mail1} /> */}</li>
                <li className="nav-item">{/* <img src={calendar} /> */}</li>
                <li className="nav-item">{/* <img src={communication} /> */}</li>
            </ul>
        </nav>
        
    )
}


