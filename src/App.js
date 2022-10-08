import React, {useState, useEffect} from "react";
import Plant from "./Plant";
import PlantList from "./PlantList";


function App() {
  const [plants, setPlants] = useState([]);
  useEffect( () => {
    const fetchLocation = async() => {
      await fetch("https://localhost:8080/plants")
      .then( (res) => res.json())
      .then( (plants) => {
        setPlants(plants);
        console.log(plants);
      })
    };
    fetchLocation();
  }, [] );

  if(!plants.length) return <div>Loading...</div>
  return (
  <>
    Plantlist:
    <div>
      <PlantList plants={plants}/>
      
    </div>

  </>
  );
}

export default App;
