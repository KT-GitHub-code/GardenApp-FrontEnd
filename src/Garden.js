import React, {useState, useEffect, useContext} from 'react'
import NewPlant from "./NewPlant";
import PlantList from "./PlantList";
import { Link } from "react-router-dom";
import GardenContext from './context/GardenContext';

const Garden = () => {
    
    const [plants, setPlants] = useState([]);
    const [garden, setGarden] = useState(null);
    const gardenId = useContext(GardenContext);

    
    // fetch POST to create a new garden
    const handleClick = async () => {
        try{
            fetch('http://localhost:8080/api/garden', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({})
              })
          }
        catch(err){
            console.log(err.message);
        }
        window.location.reload(false);
    }

    // fetch GET the garden
    useEffect( () => {
        const fetchGarden = async() => {
        await fetch(`http://localhost:8080/api/gardens/${gardenId.gardenId}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then( (res) => res.json())
        .then( (garden) => {
            setGarden(garden);
            console.log("Garden:")
            console.log(garden);
        })
        };
        fetchGarden();
    }, [] );

// fetch GET the plants that belong to this garden
useEffect( () => {
    const fetchPlants = async() => {
    await fetch(`http://localhost:8080/api/plantsbygardenid/${gardenId.gardenId}`)
    .then( (res) => res.json())
    .then( (plants) => {
        setPlants(plants);
        console.log("Plants:");
        console.log(plants);
    })
    };
    fetchPlants();
}, [] );


    if(!garden) return (
        <div>
            <h1>You don't have a garden yet</h1>
            <button onClick={handleClick} >I want a garden</button>
        </div>
    )
    
    if(!plants.length) return (
        <div>
            <h2>Loading...</h2>
            <Link to="/garden/newplant"> <NewPlant/> </Link>
        </div>)

    return (
        <>
        <div>
        <PlantList plants={plants}/>
        </div>
        <div>
        <Link to="/garden/newplant"> <NewPlant/> </Link>
        </div>
        </>
    )
}

export default Garden