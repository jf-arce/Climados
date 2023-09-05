import { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar'
import { getData, getWeather, getWeatherOfDays } from '../../api/openWeather';
import { Clock } from '../Clock/Clock';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { BiSolidMap } from "react-icons/bi";
import './DisplayBar.css'


export const DisplayBar = () => {

  const [ search, setSearch ] = useState();
  const [ city, setCity ] = useState({});
  const temperaturesStates = {
    "Clouds": "/assets/images/cloudy.png",
    "Clear": "/assets/images/sun.png",
    "Rain": "/assets/images/rain.png",
    "Snow": "snowy",
    "Thunderstorm": "stormy",
    "Drizzle": "rainy",
    "Mist": "cloudy",
    "Smoke": "cloudy",
    "Haze": "cloudy",
    "Dust": "cloudy",
    "Fog": "cloudy",
    "Sand": "cloudy",
    "Ash": "cloudy",
    "Squall": "cloudy",
    "Tornado": "cloudy",
  }
  
  useEffect(() => {
    if(search === undefined){
      useCurrentLocation().then((data)=>{
        console.log(data);
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
        getWeatherOfDays(data.lat,data.lon).then((data)=>{
          console.log(data);
        })
      })
    }
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault();

    getData(search).then((data)=>{
      getWeather(data.lat,data.lon).then((data)=>{
        console.log(data);    
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

  const handleCitySearch = (event) =>{
    setSearch(event.target.value);  
  }
  
  return (
    <div className='h-screen w-[500px] bg-display flex flex-col items-center py-5 px-3'>
      <div className='flex flex-col gap-10 w-full'>
        <SearchBar handleCitySearch={handleCitySearch} handleSubmit={handleSubmit}/>
        <picture>
          <img src={city.imageState} alt={city.state} className='w-[250px] m-auto' />
        </picture>
        <div className='flex flex-col items-center gap-6'>
          <h2 className='text-5xl font-semibold'>{city.temperature}°C</h2>
          <p className='capitalize'>{city.description}</p>
          <Clock/>
        </div>  
      </div>
      <div className='flex flex-grow items-end mb-6'>
        <div className='flex justify-center items-center gap-1'>
          <BiSolidMap/>
          <h4 className='capitalize'>{city ? `${city.name}, ${city.country}` : "La Plata" }</h4>
        </div>
      </div>
    </div>
  )
}
