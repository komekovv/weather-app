import React from 'react'

export default function MainForecast({date, city, chance, temprature, icon}) {
  return (
    <div className='flex h-[175px] justify-between px-4'>
        <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-1'>
                <p className='font-medium'>{date}</p>
                <h2 className='text-2xl font-bold'>{city}</h2>
                <p className='text-gray-500 text-sm font-light'>Humidity: {chance}%</p>
            </div>
            <div>
                <h1 className='text-6xl font-bold text-center'>{temprature}°</h1>
            </div>
        </div>
        <div className=''>
            <img src={icon} alt="icon" className=' h-full animate-spin-slow'/>
        </div>
    </div>
  )
}
