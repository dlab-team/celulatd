import React from 'react';

import card2 from '../../../assets/img/card1.png';

import '../../../scss/components/landing/body/_imgCard1.scss';

export default function ImgCard1() {
  return (
    <div className='img-card'>
      <img src={card2}/>
    </div>
  )
}
