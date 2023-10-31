import React from 'react'
import { cloudSunny, rainy, sunny } from '../../assets'
import TodaysItems from './TodaysItems'

export default function TodaysForecast() {
  return (
    <div className='bg-[#f1f1f1] h-[150px] md:h-[160px] lg:h-[175px] rounded-lg p-3'>
        <h1 className='font-semibold text-xs text-gray-500'>
            TODAY'S FORECAST
        </h1>
        <div className='flex justify-between items-center'>
            <TodaysItems time={'6:00'} timeN={'AM'} icon={sunny} temprature={'25°'} border={'border-r'}/>
            <TodaysItems time={'9:00'} timeN={'AM'} icon={cloudSunny} temprature={'29°'} border={'border-r'}/>
            <TodaysItems time={'12:00'} timeN={'PM'} icon={sunny} temprature={'33°'} border={'border-r'}/>
            <TodaysItems time={'3:00'} timeN={'PM'} icon={sunny} temprature={'34°'} border={'border-r'}/>
            <TodaysItems time={'6:00'} timeN={'PM'} icon={cloudSunny} temprature={'32°'} border={'border-r'}/>
            <TodaysItems time={'9:00'} timeN={'PM'} icon={rainy} temprature={'20°'} border={'border-none'}/>
        </div>
    </div>
  )
}
