import React from 'react'
import './Card.css'

const Plant = ({plant}) => {
  return (
    <div className='container'>    
      <div className='card-container'>
        <div className='image-container'>
          <img src="leaf-green-plant-tree-grass-PnQcaVDj.jpg" width="200" height="200" alt=""/>
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