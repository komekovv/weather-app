import React from 'react'

export default function TodaysItems({time, timeN, icon, temprature, border}) {
  return (
        <div className={`flex flex-col gap-2 items-center ${border} w-full lg:w-[134.82px]`}>
            <p className='text-gray-500 text-xs md:text-s'>{time} {timeN}</p>
            <img src={icon} alt="icon" className=' md:w-16 md:h-16 w-10 h-10' />
            <h2 className='font-bold md:text-xl text-lg'>{temprature}</h2>
        </div>
  )
}
