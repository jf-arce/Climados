import { useEffect, useState } from "react";
import { DisplayBar } from "./components/DisplayBar/DisplayBar"
import { HighlightsOfTheDay } from "./components/HighlightsOfTheDay/HighlightsOfTheDay"
import { WeatherOfTheWeek } from "./components/WeatherOfTheWeek/WeatherOfTheWeek"
import { useDateTime } from "./hooks/useDateTime"

function App() {
  const { currentHour } = useDateTime();
  const [currentBg, setCurrentBg] = useState();

  useEffect(() => {
    if (currentHour >= 6 && currentHour < 20){
      setCurrentBg('bg-day')
    }else{
      setCurrentBg('bg-night')
    }
  },[currentHour])
  
  return (
    <div className={`App flex ${currentBg}`}>
      <DisplayBar/>
      <main className="w-full p-7">
        <h1 className="text-center text-slate-50 mb-5 text-3xl p-3">Pronóstico de la semana</h1>
        <WeatherOfTheWeek/>
        <h2 className="text-center text-slate-50 mt-6 text-3xl p-3">Resumen del día</h2>
        <HighlightsOfTheDay/>
      </main>
    </div>
  )
}

export default App
