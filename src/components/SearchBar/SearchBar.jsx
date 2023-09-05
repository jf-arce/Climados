import React from 'react'
import { BsSearch } from "react-icons/bs";

export const SearchBar = ({handleCitySearch,handleSubmit}) => {
  return (
    <form action='get' className='flex justify-center px-4' onSubmit={handleSubmit}>
      <input type="search" onChange={handleCitySearch} className='p-1 focus:outline-none rounded-s-md w-full' placeholder='Ingrese Ciudad'/>
      <button type='submit' className='bg-gray-700 p-2 rounded-e-md'>
        <BsSearch className='text-slate-50'/>
      </button>
    </form>
  )
}
