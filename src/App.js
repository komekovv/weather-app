import { useEffect, useState } from "react";
import {AirConditions, DailyForecast, MainForecast, SearchBar, TodaysForecast} from './components/index'
import { sunny } from "./assets";

function App() {

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  }

  const [weatherData, setWeatherData] = useState(null);
  // let location = 'Ashgabat';
  const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Ashgabat&days=3';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '5fbb416c93msha718ebae33678ecp1f43fajsn92b46d68f6a4',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        });
        const jsonData = await response.json();
        console.log(jsonData);
        const neededData = {
          city: jsonData.location.name,
          time: formatDate(jsonData.location.localtime),
          temprature: jsonData.current.temp_c,
          humidity: jsonData.current.humidity,
        }
        setWeatherData(neededData);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  console.log(weatherData);

  return (
    <div className="h-screen lg:px-40 md:px-16 px-3">
      <SearchBar />
      <div className="lg:flex block gap-6 ">
        <div className='flex flex-col gap-6'>
          {weatherData ?(
            <>
              <MainForecast date={weatherData.time} city={weatherData.city} chance={weatherData.humidity} temprature={weatherData.temprature} icon={sunny}/>
              
            </>
          ) : (
           <p className="">Loading...</p>
          )
          }
          <TodaysForecast />
          <AirConditions />
        </div>
        <div>
          <DailyForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
