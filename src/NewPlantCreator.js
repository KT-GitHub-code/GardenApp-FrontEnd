import React, { useState, useContext } from 'react'
import GardenContext from './context/GardenContext';


const NewPlantCreator = () => {

  const gardenId = useContext(GardenContext);

  const [myPlant, setMyPlant] = useState("ALOE");

  const handleChange = (event) => {
    setMyPlant(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    try{
      fetch('http://localhost:8080/api/plant', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "type": `${myPlant}`,
          "garden": {"id":`${gardenId.gardenId}`} 
        })
      })
    }
    catch(err){
      console.log(err.message);
    }

    alert(`Your new ${myPlant} plant was sent to your Garden!`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Select plant type:
        <select value={myPlant} onChange={handleChange}>
          <option value="AEONIUM">AEONIUM</option>
          <option value="AGAVE">AGAVE</option>
          <option value="ALOE">ALOE</option>
          <option value="CRASSULA">CRASSULA</option>
          <option value="ECHEVERIA">ECHEVERIA</option>
          <option value="EUPHORBIA">EUPHORBIA</option>
          <option value="GASTERIA">GASTERIA</option>
          <option value="GRAPTOPETALUM">GRAPTOPETALUM</option>
          <option value="HAWORTHIA">HAWORTHIA</option>
          <option value="KALANCHOE">KALANCHOE</option>
          <option value="MAMMILLARIA">MAMMILLARIA</option>
          <option value="OPUNTIA">OPUNTIA</option>
          <option value="SEDUM">SEDUM</option>
          <option value="SEMPERVIVUM">SEMPERVIVUM</option>
          <option value="SENECIO">SENECIO</option>
        </select>
      </label>
      <button type='submit'>Add plant</button>
    </form>
  )
}

export default NewPlantCreator