import React from 'react'
import { Link } from 'react-router-dom';


export default function Button() {
  return (
    <div className='container-btn'>
      <Link to="/login" className='Link'>
      <button className='btn'   >    
        {'\{ENTRAR\}'}
        </button>    
        </Link> 
    </div>
  )
}
