import React, { useState } from 'react'

const NewPlantCreator = () => {

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
          "garden": {"id":1} 
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
          <option selected value="ALOE">Aloe</option>
          <option value="SEDUM" selected>Sedum</option>
        </select>
      </label>
      <button type='submit'>Add plant</button>
    </form>
  )
}

export default NewPlantCreator