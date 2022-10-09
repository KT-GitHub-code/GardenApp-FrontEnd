import React from 'react'
import './Card.css'

export default function Plant({plant}) {
  return (
    <div className='container'>    
      <div className='card-container'>
        <div className='image-container'>
          <img src="" alt=""/>
        </div>
        <div className='card-content'>
          <div className='card-title'>
            {plant.type}
          </div>

        </div>
      </div>
    </div>
  )
}
