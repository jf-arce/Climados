const KEY = 'HR5AA6YJCVF4JFT96TTSAXR4T';


export const getDataWeek = async (city) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${KEY}`
    const response = await fetch(url);
    const data = await response.json();

    return data;
};