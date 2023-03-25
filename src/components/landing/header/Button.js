import React from 'react'
import { Link } from 'react-router-dom';


import '../../../scss/components/landing/header/_button.scss'

export default function Button() {
  return (

    <>

      <Link to="/login" className='link'>
        <button className='btn__hero'>
          <div className='btn__text'>
          {'\{ENTRAR\}'}
          </div>
          
        </button>
      </Link>

    </>
  )
}
