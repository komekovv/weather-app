import React from 'react'
import { cloudy, rainy, sunny } from '../../assets'
import DailyItems from './DailyItems'

export default function DailyForecast() {
  return (
    <div className='bg-[#f1f1f1] w-full lg:w-[350px] lg:mt-0 mt-6 p-3 rounded-lg'>
        <h1 className='font-semibold text-xs text-gray-500'>   
            DAILY FORECAST
        </h1>
        <div>
            <DailyItems day={'Today'} icon={sunny} description={'Sunny'} tempratureDay={'34'} tempratureNight={'20'} border={'border-b'}/>
            <DailyItems day={'Tue'} icon={sunny} description={'Sunny'} tempratureDay={'38'} tempratureNight={'21'}  border={'border-b'}/>
            <DailyItems day={'Wed'} icon={sunny} description={'Sunny'} tempratureDay={'35'} tempratureNight={'20'}  border={'border-b'}/>
            <DailyItems day={'Thu'} icon={cloudy} description={'Cloudy'} tempratureDay={'34'} tempratureNight={'20'} border={'border-b'}/>
            <DailyItems day={'Fri'} icon={cloudy} description={'Cloudy'} tempratureDay={'30'} tempratureNight={'18'} border={'border-b'}/>
            <DailyItems day={'Sat'} icon={rainy} description={'Rainy'} tempratureDay={'28'} tempratureNight={'17'} border={'border-b'}/>
            <DailyItems day={'Sun'} icon={sunny} description={'Sunny'} tempratureDay={'29'} tempratureNight={'17'} border={'border-none'}/>
        </div>
    </div>
  )
}
