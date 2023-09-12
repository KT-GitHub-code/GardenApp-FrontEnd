import React, {useState, useEffect, useContext} from 'react'
import NewPlant from "./NewPlant";
import PlantList from "./PlantList";
import { Link } from "react-router-dom";
import GardenContext from '../context/GardenContext';
import axios from "axios";

const Garden = () => {

    const token = localStorage.getItem('token');

    const [plants, setPlants] = useState([]);
    const [garden, setGarden] = useState(null);
    const gardenId = useContext(GardenContext);


    // fetch POST to create a new garden
    const handleClick = async () => {
        try{
            await axios.post('http://localhost:9000/api/garden', {body: JSON.stringify({})},{
                method: 'POST',
                headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
                withCredentials: true
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
        await axios.get(`http://localhost:9000/api/gardens/${gardenId.gardenId}`,{
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
            withCredentials: true
        })
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
    const plantsFromFetch = [];
    const fetchPlants = async() => {
    await axios.get(`http://localhost:9000/api/plantsbygardenid/${gardenId.gardenId}`, {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
        withCredentials: true
    })
    .then( (plants) => {
        plants.data.map((p) => {plantsFromFetch.push(p)});
        setPlants(plantsFromFetch);
        console.log("Plants:");
        console.log(plants);
    })
    };
    fetchPlants();
}, [] );


    if(garden==null || garden.data==null) return (
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

    if(garden.data!=null) return (
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
