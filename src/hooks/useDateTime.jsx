import { useState } from 'react'

export const useDateTime = () => {
    const [hour, setHour] = useState();
    const [currentHour, setCurrentHour] = useState();
    const [nameOfTheDay,setNameOfTheDay] = useState();
    const daysOfTheWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    setInterval(()=>{
        const currentDay = new Date();
        const numberOfTheWeek = currentDay.getDay();
        setNameOfTheDay(daysOfTheWeek[numberOfTheWeek])

        const currentHour = currentDay.getHours();
        setCurrentHour(currentHour);
        const currentMinutes = currentDay.getMinutes().toString().padStart(2, '0');
        setHour(`${currentHour}:${currentMinutes}`)
    },1000)

    return {day:nameOfTheDay, hour, currentHour }
}
