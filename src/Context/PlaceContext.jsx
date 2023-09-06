import { createContext, useContext, useState } from "react";

const PlaceContext = createContext();

export const usePlaceContext = () => useContext(PlaceContext);

export const PlaceContextProvider = ({children}) => {
    
    const [place, setPlace] = useState();
   
    const handleSetPlace = (place) => {
        setPlace(place);
    }
    
    return (
        <PlaceContext.Provider value={{handleSetPlace,place}}>
        {children}
        </PlaceContext.Provider>
    )
}