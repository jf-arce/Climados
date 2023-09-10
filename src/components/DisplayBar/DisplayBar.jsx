import { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar'
import { getWeather } from '../../api/openWeather';
import { Clock } from '../Clock/Clock';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { temperaturesStates, temperaturesStates2 } from '../../utils/temperaturesStates';
import { usePlaceContext } from '../../Context/PlaceContext';
import { getDataWeek } from '../../api/visualCrossingData';
import { BiSolidMap } from "react-icons/bi";
import './DisplayBar.css'

export const DisplayBar = () => {
  const [ search, setSearch ] = useState();
  const [ city, setCity ] = useState({});
  const [error, setError] = useState();
  const [errorState, setErrorState] = useState(false);
  const {handleSetPlace} = usePlaceContext();
  
  useEffect(() => {
    if(search === undefined){
      useCurrentLocation().then((data)=>{
        getWeather(data.lat,data.lon).then((data)=>{
          setCity({
            name: data.name,
            country: data.sys.country,
            temperature: Math.round(data.main.temp),
            description: data.weather[0].description,
            state: data.weather[0].main,
            imageState: temperaturesStates[data.weather[0].main]
          })
        })
      })
    }
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault();
    handleSetPlace(search);

    getDataWeek(search).then((data) => {
      console.log(data);
      setErrorState(false);
      setCity({
        name: data.resolvedAddress,
        temperature: (((data.currentConditions.temp - 32) * 5) / 9).toFixed(1),
        description: data.description,
        conditions: 
          data.currentConditions.conditions === "Clear" ? "Despejado" : 
          data.currentConditions.conditions === "Rain" ? "Lluvia" :
          data.currentConditions.conditions === "Overcast" ? "Nublado" :
          data.currentConditions.conditions === "Snow" ? "Nieve" :
          data.currentConditions.conditions === "Thunderstorm" ? "Tormenta" :
          data.currentConditions.conditions === "Drizzle" ? "Llovizna" :
          data.currentConditions.conditions === "Mist" ? "Niebla": "",
        state: data.currentConditions.icon,
        imageState: temperaturesStates2[data.currentConditions.icon]
      })
    }).catch((e)=>{
      setError("No se encontró la ciudad o país");
      setErrorState(true);
    });
  }

  //Obtenemos el valor del input
  const handleCitySearch = (event) =>{
    setSearch(event.target.value);  
  }

  return (
    <div className='h-screen w-[500px] bg-display flex flex-col items-center py-7 px-3'>
      <div className='flex flex-col gap-10 w-full'>
        <picture>
          <img src="/assets/images/climados-logo-white.png" alt="Climados" className='w-44 m-auto object-cover object-center' />
        </picture>
        <div className='relative'>
          <SearchBar handleCitySearch={handleCitySearch} handleSubmit={handleSubmit}/>
          <p className={`text-red-500 px-5 mt-2 text-sm ${errorState ? 'block' : 'hidden'}`}>{error}</p> 
        </div>
        <picture>
          <img src={city.imageState} alt={city.state} className='w-[250px] m-auto' />
        </picture>
        <div className='flex flex-col items-center gap-6'>
          <h2 className='text-5xl font-semibold'>{city.temperature}°C</h2>
          <p className='capitalize text-center'>Actualmente {city.conditions}</p>
          <p className='capitalize text-center'>{city.description}</p>
          <Clock/>
        </div>  
      </div>
      <div className='flex flex-grow items-end mb-6'>
        <div className='flex justify-center items-center gap-1'>
          <BiSolidMap/>
          <h4 className='capitalize'>{city ? `${city.name}` : "La Plata" }</h4>
        </div>
      </div>
    </div>
  )
}
