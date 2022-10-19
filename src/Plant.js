import React from 'react'
import './Card.css'

const Plant = ({plant}) => {

  let imageName = plant.type.toLowerCase();

  return (
    <div className='container'>    
      <div className='card-container'>
        <div className='image-container'>
          <img src={`${imageName}.jpg`} width="300" height="200" alt=""/>
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

export default Plant