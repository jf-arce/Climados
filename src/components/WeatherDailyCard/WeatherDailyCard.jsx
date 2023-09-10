import React from 'react'

export const WeatherDailyCard = ({dayName, temp, icon, img,description}) => {
  return (
    <div className='w-[180px] h-[230px] flex flex-col justify-between items-center bg-slate-100 rounded-md p-1 gap-3'>
      <h3 className='font-light'>{dayName}</h3>
      <picture>
        <img src={img} alt={icon} className='w-24'/>
      </picture>
      <p className='text-center'>{description}</p>
      <h4 className='font-semibold'>{temp}°C</h4>
    </div>
  )
}
