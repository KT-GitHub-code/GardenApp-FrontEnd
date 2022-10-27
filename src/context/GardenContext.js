import { createContext, useState, useEffect} from 'react';

const GardenContext = createContext({});


export const GardenProvider = ({children}) => {

    const [gardenId, setGardenId] = useState("1");


    return(
        <GardenContext.Provider value={{
            gardenId,setGardenId
            }}>
            {children}
        </GardenContext.Provider>
    )
}

export default GardenContext;
