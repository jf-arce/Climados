const KEY = 'e674f709927b9c2924c02032d2487adb'

export const getData= async (city)=>{
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=es&appid=${KEY}`);
        const data = await response.json();
        const lat = data.city.coord.lat;
        const lon = data.city.coord.lon;

        return {data,lat,lon};
        
    }catch(error){

    }
}


export const getWeather = async (lat,lon)=>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&cnt=5&lang=es&appid=${KEY}`);
        const data = await response.json();

        return data;
    }catch(error){
        console.log('No se encontro la ciudad o pais');
    }
}

export const getWeatherOfDays = async (lat,lon)=>{
    try{
        const url = `https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&units=metric&cnt=4&lang=es&appid=${KEY}`
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }catch(error){
       
        console.log('No se encontro la ciudad o pais');
        
    }
}

