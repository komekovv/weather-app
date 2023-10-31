import { useEffect, useState } from "react";
import {AirConditions, DailyForecast, MainForecast, SearchBar, TodaysForecast} from './components/index'
import { sunny } from "./assets";

function App() {

  const formatDate = (originalDate) => {
    
    const [datePart, timePart] = originalDate.split(' ');
    const [ month, day] = datePart.split('-');
    const [hour, minutes] = timePart.split(':');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedMonth = monthNames[parseInt(month) - 1];
    const amOrPm = parseInt(hour) >= 12 ? 'PM' : 'AM';

    const formattedHour = (parseInt(hour) % 12) || 12;
    const formattedDate = `${formattedMonth} ${parseInt(day)}, ${formattedHour}:${minutes} ${amOrPm}`;
  
    return formattedDate;
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
