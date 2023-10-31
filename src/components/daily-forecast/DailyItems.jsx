import React from 'react'

export default function DailyItems({day, icon, description, tempratureDay, tempratureNight, border}) {
  return (
    <div className={`flex items-center justify-between h-[79px] ${border}`}>
        <p className='text-gray-500 font-semibold w-11'>{day}</p>
        <div className='flex items-center h-10 gap-4'>
            <img src={icon} alt={description} className='h-full w-10'/>
            <p className='font-bold'>{description}</p>
        </div>
        <p className='font-bold'>{tempratureDay} <span className='text-gray-500'>/{tempratureNight}</span></p>
    </div>
  )
}
