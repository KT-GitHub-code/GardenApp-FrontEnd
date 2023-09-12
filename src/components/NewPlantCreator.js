import React, { useState, useContext } from 'react'
import GardenContext from '../context/GardenContext';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const NewPlantCreator = () => {

  const gardenId = useContext(GardenContext);

  const token = localStorage.getItem('token');

  const [myPlant, setMyPlant] = useState("ALOE");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setMyPlant(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    try{
      axios.post('http://localhost:9000/api/plant', {
        "type": `${myPlant}`,
        "gardenId": `${gardenId.gardenId}`
      },{
        method: 'POST',
        headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
        withCredentials: true,
      })
    }
    catch(err){
      console.log(err.message);
    }

    alert(`Your new ${myPlant} plant was sent to your Garden!`)
    navigate('/garden');
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
