import React from 'react'

export const WeatherDailyCard = ({dayName}) => {
  return (
    <div className='w-[150px] h-full flex flex-col justify-between items-center bg-slate-100 rounded-md p-1 gap-3'>
      <h3 className='font-light'>{dayName}</h3>
      <picture>
        <img src="/assets/images/sun.png" alt="sun" />
      </picture>
      <h4 className='font-semibold'>20.2°C</h4>
    </div>
  )
}
