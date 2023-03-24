import React from 'react'


import menorque from '../../../assets/img/_Menor.svg';
import card1 from '../../../assets/img/card1.png';

import slash from '../../../assets/img/Slash.svg';
import card2 from '../../../assets/img/card2.png';


import mayorque from '../../../assets/img/_Mayor.svg';
import card3 from '../../../assets/img/card3.png';

import drafts from '../../../assets/img/draftsVerde.svg';

import '../../../scss/components/landing/body/_card.scss';


export default function Card() {
  return (
    <>
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
            Lorem ipsum dolor sit amet consectetur. Sed odio

            egestas tincidunt mauris mollis senectus tellus

            Condimentum egestas dignissim venenatis magna

            ut at a id placerat. Donec gravida elit velit quisque.
            Lorem ipsum dolor sit amet consectetur. Sed odio

            egestas tincidunt mauris mollis senectus tellus

            Condimentum egestas dignissim venenatis magna

            ut at a id placerat. Donec gravida elit velit quisque.
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

      <div className='main__card2-mobile'>
        <div className='main__card2-mobile--content'>
          <img className='main__card2-mobile--svg' src={slash} />
          <img className='main__card2-mobile--img' src={card2} />
          <p className='main__card2-mobile--p'>
            Lorem ipsum dolor sit amet consectetur. Sed odio

            egestas tincidunt mauris mollis senectus tellus

            Condimentum egestas dignissim venenatis magna

            ut at a id placerat. Donec gravida elit velit quisque.
            Lorem ipsum dolor sit amet consectetur. Sed odio

            egestas tincidunt mauris mollis senectus tellus

            Condimentum egestas dignissim venenatis magna

            ut at a id placerat. Donec gravida elit velit quisque.
            Lorem ipsum dolor sit amet consectetur. Sed odio

            egestas tincidunt mauris mollis senectus tellus

            Condimentum egestas dignissim venenatis magna

            ut at a id placerat. Donec gravida elit velit quisque.
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

      <div className='main__card3-mobile'>
        <div className='main__card3-mobile--content'>
          <img className='main__card3-mobile--svg' src={mayorque} />
          <img className='main__card3-mobile--img' src={card3} />
          <p className='main__card3-mobile--p'>
            Lorem ipsum dolor sit amet consectetur. Sed odio

            egestas tincidunt mauris mollis senectus tellus

            Condimentum egestas dignissim venenatis magna

            ut at a id placerat. Donec gravida elit velit quisque.
            Lorem ipsum dolor sit amet consectetur. Sed odio

            egestas tincidunt mauris mollis senectus tellus

            Condimentum egestas dignissim venenatis magna

            ut at a id placerat. Donec gravida elit velit quisque.
            Lorem ipsum dolor sit amet consectetur. Sed odio

            egestas tincidunt mauris mollis senectus tellus

            Condimentum egestas dignissim venenatis magna

            ut at a id placerat. Donec gravida elit velit quisque.
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

    </>
  )
}
