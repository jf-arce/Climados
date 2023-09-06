import React, { useEffect, useState } from "react";
import { WeatherDailyCard } from "../WeatherDailyCard/WeatherDailyCard";
import { getDataWeek } from "../../api/visualCrossingData";
import { usePlaceContext } from "../../Context/PlaceContext";
import { temperaturesStates2 } from "../../utils/temperaturesStates";

export const WeatherOfTheWeek = () => {
  const [dataDays, setDataDays] = useState();
  const { place } = usePlaceContext();

  useEffect(() => {
    const search = place;
    getDataWeek(search).then((data) => {
      setDataDays(data.days);
    });
  }, [place]);

  return (
    <div className="w-full flex flex-wrap gap-6 p-2 justify-center">
      {dataDays &&
        dataDays.map((day) => {
          return (
            <WeatherDailyCard
              key={day.datetime}
              dayName={day.datetime}
              temp={(((day.temp - 32) * 5) / 9).toFixed(1)}
              icon={day.icon}
              description={day.conditions}
              img={temperaturesStates2[day.icon]}
            />
          );
        })}
    </div>
  );
};
