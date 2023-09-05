import React, { useEffect } from 'react'
import { WeatherDailyCard } from '../WeatherDailyCard/WeatherDailyCard'
import { getWeatherOfDays } from '../../api/openWeather'

export const WeatherOfTheWeek = () => {
  
  return (
    <div className='w-full flex flex-wrap gap-6 p-2 justify-center'>
        <WeatherDailyCard dayName="Domingo"/>
        <WeatherDailyCard dayName="Lunes"/>
        <WeatherDailyCard dayName="Martes"/>
        <WeatherDailyCard dayName="Miercoles"/>
        <WeatherDailyCard dayName="Jueves"/>
        <WeatherDailyCard dayName="Viernes"/>
        <WeatherDailyCard dayName="Sabado"/>
    </div>
  )
}
