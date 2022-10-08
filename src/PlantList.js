import React from 'react'
import Plant from './Plant'

export default function PlantList({plants}) {
  return (
    plants.map(plant => {
        return <Plant plant={plant} key={plant.id}/>               
        }
    )
  )
}
