import React from 'react'
import Plant from './Plant'

const PlantList = ({plants}) => {
  return (
    plants.map(plant => {
        return <Plant plant={plant} key={plant.id}/>               
        }
    )
  )
}

export default PlantList